<?php

namespace App\Http\Controllers\Admin\Reference;

use App\Http\Controllers\Controller;
use App\Models\PriceRange;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class PriceRangeController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/References/PriceRanges/Index', [
            'items' => PriceRange::orderBy('sort_order')->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/References/PriceRanges/Form');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'label_en' => 'required|string|max:255',
            'label_ar' => 'nullable|string|max:255',
            'slug' => 'required|string|max:255|unique:price_ranges,slug',
            'min_amount' => 'nullable|numeric',
            'max_amount' => 'nullable|numeric',
            'currency' => 'required|string|max:10',
            'is_active' => 'boolean',
            'sort_order' => 'integer',
        ]);

        PriceRange::create($validated);

        return redirect()->route('admin.references.price-ranges.index')->with('success', __('messages.price_range_created'));
    }

    public function edit(PriceRange $priceRange)
    {
        return Inertia::render('Admin/References/PriceRanges/Form', [
            'item' => $priceRange,
        ]);
    }

    public function update(Request $request, PriceRange $priceRange)
    {
        $validated = $request->validate([
            'label_en' => 'required|string|max:255',
            'label_ar' => 'nullable|string|max:255',
            'slug' => ['required', 'string', 'max:255', Rule::unique('price_ranges', 'slug')->ignore($priceRange->id)],
            'min_amount' => 'nullable|numeric',
            'max_amount' => 'nullable|numeric',
            'currency' => 'required|string|max:10',
            'is_active' => 'boolean',
            'sort_order' => 'integer',
        ]);

        $priceRange->update($validated);

        return redirect()->route('admin.references.price-ranges.index')->with('success', __('messages.price_range_updated'));
    }

    public function destroy(PriceRange $priceRange)
    {
        if ($priceRange->landOpportunities()->exists() || $priceRange->leads()->exists()) {
            return back()->with('error', __('messages.price_range_delete_blocked'));
        }

        $priceRange->delete();

        return redirect()->route('admin.references.price-ranges.index')->with('success', __('messages.price_range_deleted'));
    }
}
