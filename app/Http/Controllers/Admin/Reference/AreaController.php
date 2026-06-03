<?php

namespace App\Http\Controllers\Admin\Reference;

use App\Http\Controllers\Controller;
use App\Models\Area;
use App\Models\LandUse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class AreaController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/References/Areas/Index', [
            'items' => Area::with('defaultLandUse')->orderBy('sort_order')->orderBy('name_en')->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/References/Areas/Form', [
            'landUses' => LandUse::orderBy('name_en')->get(['id', 'name_en']),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name_en' => 'required|string|max:255',
            'name_ar' => 'nullable|string|max:255',
            'slug' => 'required|string|max:255|unique:areas,slug',
            'default_land_use_id' => 'nullable|exists:land_uses,id',
            'city' => 'nullable|string|max:255',
            'is_active' => 'boolean',
            'sort_order' => 'integer',
        ]);

        if (empty($validated['city'])) {
            $validated['city'] = 'Sharjah';
        }

        Area::create($validated);

        return redirect()->route('admin.references.areas.index')->with('success', __('messages.area_created'));
    }

    public function edit(Area $area)
    {
        return Inertia::render('Admin/References/Areas/Form', [
            'item' => $area,
            'landUses' => LandUse::orderBy('name_en')->get(['id', 'name_en']),
        ]);
    }

    public function update(Request $request, Area $area)
    {
        $validated = $request->validate([
            'name_en' => 'required|string|max:255',
            'name_ar' => 'nullable|string|max:255',
            'slug' => ['required', 'string', 'max:255', Rule::unique('areas', 'slug')->ignore($area->id)],
            'default_land_use_id' => 'nullable|exists:land_uses,id',
            'city' => 'nullable|string|max:255',
            'is_active' => 'boolean',
            'sort_order' => 'integer',
        ]);

        $area->update($validated);

        return redirect()->route('admin.references.areas.index')->with('success', __('messages.area_updated'));
    }

    public function destroy(Area $area)
    {
        if ($area->landOpportunities()->exists() || $area->leads()->exists()) {
            return back()->with('error', __('messages.area_delete_blocked'));
        }

        $area->delete();

        return redirect()->route('admin.references.areas.index')->with('success', __('messages.area_deleted'));
    }
}
