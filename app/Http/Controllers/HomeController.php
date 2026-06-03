<?php

namespace App\Http\Controllers;

use App\Models\LandOpportunity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $locale = App::currentLocale();

        $featuredOpportunities = LandOpportunity::query()
            ->where('status', LandOpportunity::STATUS_PUBLISHED)
            ->where('is_featured', true)
            ->with(['area', 'landUse', 'ownershipType', 'priceRange'])
            ->orderBy('sort_order', 'asc')
            ->orderBy('published_at', 'desc')
            ->limit(6)
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

        return Inertia::render('Home', [
            'featuredOpportunities' => $featuredOpportunities,
        ]);
    }
}
