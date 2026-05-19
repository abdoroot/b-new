<?php

namespace App\Http\Controllers;

use App\Models\Area;
use App\Models\LeadPurpose;
use App\Models\PriceRange;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('Contact/Index', [
            'leadPurposes' => LeadPurpose::where('is_active', true)
                ->orderBy('sort_order')
                ->get(['id', 'label_en']),
            'priceRanges' => PriceRange::where('is_active', true)
                ->orderBy('sort_order')
                ->get(['id', 'label_en']),
            'areas' => Area::where('is_active', true)
                ->orderBy('name_en')
                ->get(['id', 'name_en']),
        ]);
    }
}
