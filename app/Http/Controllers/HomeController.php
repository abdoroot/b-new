<?php

namespace App\Http\Controllers;

use App\Models\LandOpportunity;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $featuredOpportunities = LandOpportunity::query()
            ->where('status', LandOpportunity::STATUS_PUBLISHED)
            ->where('is_featured', true)
            ->with(['area', 'landUse', 'ownershipType', 'priceRange'])
            ->orderBy('sort_order', 'asc')
            ->orderBy('published_at', 'desc')
            ->limit(6)
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

        return Inertia::render('Home', [
            'featuredOpportunities' => $featuredOpportunities,
        ]);
    }
}
