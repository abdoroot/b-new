<?php

namespace App\Http\Controllers;

use App\Models\Area;
use App\Models\LandOpportunity;
use App\Models\LandUse;
use App\Models\OwnershipType;
use App\Models\PriceRange;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LandOpportunityController extends Controller
{
    private const BUYER_ELIGIBILITY_OWNERSHIP_SLUGS = [
        'freehold-all-nationalities' => ['freehold-all-nationalities'],
        'uae-gcc-nationals' => ['freehold-all-nationalities', 'uae-gcc-nationals'],
        'restricted-ownership' => ['restricted-ownership'],
    ];

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = LandOpportunity::query()
            ->where('status', LandOpportunity::STATUS_PUBLISHED)
            ->with(['area', 'landUse', 'ownershipType', 'priceRange']);

        if ($request->filled('area')) {
            $query->whereHas('area', function ($q) use ($request) {
                $q->where('slug', $request->area);
            });
        }

        if ($request->filled('price_range')) {
            $query->whereHas('priceRange', function ($q) use ($request) {
                $q->where('slug', $request->price_range);
            });
        }

        if ($request->filled('ownership_type')) {
            $ownershipSlugs = self::BUYER_ELIGIBILITY_OWNERSHIP_SLUGS[$request->ownership_type] ?? [$request->ownership_type];

            $query->whereHas('ownershipType', function ($q) use ($ownershipSlugs) {
                $q->whereIn('slug', $ownershipSlugs);
            });
        }

        if ($request->filled('land_use')) {
            $query->whereHas('landUse', function ($q) use ($request) {
                $q->where('slug', $request->land_use);
            });
        }

        $opportunities = $query
            ->orderBy('sort_order', 'asc')
            ->orderBy('published_at', 'desc')
            ->get()
            ->map(fn (LandOpportunity $opportunity) => [
                'title' => $opportunity->title_en,
                'slug' => $opportunity->slug,
                'area_name' => $opportunity->area?->name_en,
                'land_use_name' => $opportunity->landUse?->name_en,
                'ownership_label' => $opportunity->ownershipType?->name_en,
                'ownership_color' => $opportunity->ownershipType?->color,
                'price_range_label' => $opportunity->priceRange?->label_en,
            ]);

        $filterOptions = [
            'areas' => Area::where('is_active', true)->orderBy('sort_order')->get(['id', 'name_en', 'slug']),
            'price_ranges' => PriceRange::where('is_active', true)->orderBy('sort_order')->get(['id', 'label_en', 'slug']),
            'ownership_types' => OwnershipType::where('is_active', true)->orderBy('sort_order')->get(['id', 'name_en', 'slug']),
            'land_uses' => LandUse::where('is_active', true)->orderBy('sort_order')->get(['id', 'name_en', 'slug']),
        ];

        return Inertia::render('LandOpportunities/Index', [
            'opportunities' => $opportunities,
            'filterOptions' => $filterOptions,
            'filters' => $request->only(['area', 'price_range', 'ownership_type', 'land_use']),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        $opportunity = LandOpportunity::query()
            ->where('slug', $slug)
            ->where('status', LandOpportunity::STATUS_PUBLISHED)
            ->with(['area', 'landUse', 'ownershipType', 'priceRange'])
            ->firstOrFail();

        return Inertia::render('LandOpportunities/Show', [
            'opportunity' => [
                'title' => $opportunity->title_en,
                'slug' => $opportunity->slug,
                'area_name' => $opportunity->area?->name_en,
                'location' => $opportunity->location_en,
                'land_use_name' => $opportunity->landUse?->name_en,
                'ownership_label' => $opportunity->ownershipType?->name_en,
                'ownership_color' => $opportunity->ownershipType?->color,
                'price_range_label' => $opportunity->priceRange?->label_en,
                'short_description' => $opportunity->short_description_en,
                'investment_insight' => $opportunity->investment_insight_en,
                'area_growth_trigger' => $opportunity->area_growth_trigger_en,
            ]
        ]);
    }
}
