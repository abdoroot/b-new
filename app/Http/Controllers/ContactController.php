<?php

namespace App\Http\Controllers;

use App\Models\Area;
use App\Models\LeadPurpose;
use App\Models\PriceRange;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        $locale = App::currentLocale();

        return Inertia::render('Contact/Index', [
            'leadPurposes' => LeadPurpose::where('is_active', true)
                ->orderBy('sort_order')
                ->get(['id', 'label_en', 'label_ar'])
                ->map(fn (LeadPurpose $purpose) => [
                    'id' => $purpose->id,
                    'label' => $locale === 'ar' ? ($purpose->label_ar ?: $purpose->label_en) : $purpose->label_en,
                ]),
            'priceRanges' => PriceRange::where('is_active', true)
                ->orderBy('sort_order')
                ->get(['id', 'label_en', 'label_ar'])
                ->map(fn (PriceRange $range) => [
                    'id' => $range->id,
                    'label' => $locale === 'ar' ? ($range->label_ar ?: $range->label_en) : $range->label_en,
                ]),
            'areas' => Area::where('is_active', true)
                ->orderBy('name_en')
                ->get(['id', 'name_en', 'name_ar'])
                ->map(fn (Area $area) => [
                    'id' => $area->id,
                    'label' => $locale === 'ar' ? ($area->name_ar ?: $area->name_en) : $area->name_en,
                ]),
        ]);
    }
}
