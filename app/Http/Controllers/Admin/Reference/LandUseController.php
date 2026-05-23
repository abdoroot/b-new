<?php

namespace App\Http\Controllers\Admin\Reference;

use App\Http\Controllers\Controller;
use App\Models\LandUse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class LandUseController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/References/LandUses/Index', [
            'items' => LandUse::orderBy('sort_order')->orderBy('name_en')->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/References/LandUses/Form');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name_en' => 'required|string|max:255',
            'name_ar' => 'nullable|string|max:255',
            'slug' => 'required|string|max:255|unique:land_uses,slug',
            'is_active' => 'boolean',
            'sort_order' => 'integer',
        ]);

        LandUse::create($validated);

        return redirect()->route('admin.references.land-uses.index')->with('success', 'Land Use created successfully.');
    }

    public function edit(LandUse $landUse)
    {
        return Inertia::render('Admin/References/LandUses/Form', [
            'item' => $landUse,
        ]);
    }

    public function update(Request $request, LandUse $landUse)
    {
        $validated = $request->validate([
            'name_en' => 'required|string|max:255',
            'name_ar' => 'nullable|string|max:255',
            'slug' => ['required', 'string', 'max:255', Rule::unique('land_uses', 'slug')->ignore($landUse->id)],
            'is_active' => 'boolean',
            'sort_order' => 'integer',
        ]);

        $landUse->update($validated);

        return redirect()->route('admin.references.land-uses.index')->with('success', 'Land Use updated successfully.');
    }

    public function destroy(LandUse $landUse)
    {
        if ($landUse->landOpportunities()->exists() || $landUse->defaultAreas()->exists()) {
            return back()->with('error', 'Cannot delete land use as it is currently linked to land opportunities or areas.');
        }

        $landUse->delete();

        return redirect()->route('admin.references.land-uses.index')->with('success', 'Land Use deleted successfully.');
    }
}
