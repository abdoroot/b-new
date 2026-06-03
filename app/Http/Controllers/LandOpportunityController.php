<?php

namespace App\Http\Controllers;

use App\Models\Area;
use App\Models\LandOpportunity;
use App\Models\LandUse;
use App\Models\OwnershipType;
use App\Models\PriceRange;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
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
        $locale = App::currentLocale();

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
                'title' => $locale === 'ar' ? ($opportunity->title_ar ?: $opportunity->title_en) : $opportunity->title_en,
                'slug' => $opportunity->slug,
                'area_name' => $locale === 'ar'
                    ? ($opportunity->area?->name_ar ?: $opportunity->area?->name_en)
                    : $opportunity->area?->name_en,
                'land_use_name' => $locale === 'ar'
                    ? ($opportunity->landUse?->name_ar ?: $opportunity->landUse?->name_en)
                    : $opportunity->landUse?->name_en,
                'ownership_label' => $locale === 'ar'
                    ? ($opportunity->ownershipType?->name_ar ?: $opportunity->ownershipType?->name_en)
                    : $opportunity->ownershipType?->name_en,
                'ownership_color' => $opportunity->ownershipType?->color,
                'price_range_label' => $locale === 'ar'
                    ? ($opportunity->priceRange?->label_ar ?: $opportunity->priceRange?->label_en)
                    : $opportunity->priceRange?->label_en,
            ]);

        $filterOptions = [
            'areas' => Area::where('is_active', true)->orderBy('sort_order')->get(['id', 'name_en', 'name_ar', 'slug'])
                ->map(fn (Area $area) => [
                    'id' => $area->id,
                    'slug' => $area->slug,
                    'label' => $locale === 'ar' ? ($area->name_ar ?: $area->name_en) : $area->name_en,
                ]),
            'price_ranges' => PriceRange::where('is_active', true)->orderBy('sort_order')->get(['id', 'label_en', 'label_ar', 'slug'])
                ->map(fn (PriceRange $range) => [
                    'id' => $range->id,
                    'slug' => $range->slug,
                    'label' => $locale === 'ar' ? ($range->label_ar ?: $range->label_en) : $range->label_en,
                ]),
            'ownership_types' => OwnershipType::where('is_active', true)->orderBy('sort_order')->get(['id', 'name_en', 'name_ar', 'slug'])
                ->map(fn (OwnershipType $type) => [
                    'id' => $type->id,
                    'slug' => $type->slug,
                    'label' => $locale === 'ar' ? ($type->name_ar ?: $type->name_en) : $type->name_en,
                ]),
            'land_uses' => LandUse::where('is_active', true)->orderBy('sort_order')->get(['id', 'name_en', 'name_ar', 'slug'])
                ->map(fn (LandUse $landUse) => [
                    'id' => $landUse->id,
                    'slug' => $landUse->slug,
                    'label' => $locale === 'ar' ? ($landUse->name_ar ?: $landUse->name_en) : $landUse->name_en,
                ]),
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
        $locale = App::currentLocale();

        $opportunity = LandOpportunity::query()
            ->where('slug', $slug)
            ->where('status', LandOpportunity::STATUS_PUBLISHED)
            ->with(['area', 'landUse', 'ownershipType', 'priceRange'])
            ->firstOrFail();

        return Inertia::render('LandOpportunities/Show', [
            'opportunity' => [
                'title' => $locale === 'ar' ? ($opportunity->title_ar ?: $opportunity->title_en) : $opportunity->title_en,
                'slug' => $opportunity->slug,
                'area_name' => $locale === 'ar'
                    ? ($opportunity->area?->name_ar ?: $opportunity->area?->name_en)
                    : $opportunity->area?->name_en,
                'location' => $locale === 'ar' ? ($opportunity->location_ar ?: $opportunity->location_en) : $opportunity->location_en,
                'land_use_name' => $locale === 'ar'
                    ? ($opportunity->landUse?->name_ar ?: $opportunity->landUse?->name_en)
                    : $opportunity->landUse?->name_en,
                'ownership_label' => $locale === 'ar'
                    ? ($opportunity->ownershipType?->name_ar ?: $opportunity->ownershipType?->name_en)
                    : $opportunity->ownershipType?->name_en,
                'ownership_color' => $opportunity->ownershipType?->color,
                'price_range_label' => $locale === 'ar'
                    ? ($opportunity->priceRange?->label_ar ?: $opportunity->priceRange?->label_en)
                    : $opportunity->priceRange?->label_en,
                'short_description' => $locale === 'ar'
                    ? ($opportunity->short_description_ar ?: $opportunity->short_description_en)
                    : $opportunity->short_description_en,
                'investment_insight' => $locale === 'ar'
                    ? ($opportunity->investment_insight_ar ?: $opportunity->investment_insight_en)
                    : $opportunity->investment_insight_en,
                'area_growth_trigger' => $locale === 'ar'
                    ? ($opportunity->area_growth_trigger_ar ?: $opportunity->area_growth_trigger_en)
                    : $opportunity->area_growth_trigger_en,
            ]
        ]);
    }
}
