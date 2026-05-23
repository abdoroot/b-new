<?php

namespace App\Http\Controllers\Admin\Reference;

use App\Http\Controllers\Controller;
use App\Models\OwnershipType;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class OwnershipTypeController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/References/OwnershipTypes/Index', [
            'items' => OwnershipType::orderBy('sort_order')->orderBy('name_en')->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/References/OwnershipTypes/Form');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name_en' => 'required|string|max:255',
            'name_ar' => 'nullable|string|max:255',
            'slug' => 'required|string|max:255|unique:ownership_types,slug',
            'color' => 'nullable|string|max:255',
            'is_active' => 'boolean',
            'sort_order' => 'integer',
        ]);

        OwnershipType::create($validated);

        return redirect()->route('admin.references.ownership-types.index')->with('success', 'Ownership Type created successfully.');
    }

    public function edit(OwnershipType $ownershipType)
    {
        return Inertia::render('Admin/References/OwnershipTypes/Form', [
            'item' => $ownershipType,
        ]);
    }

    public function update(Request $request, OwnershipType $ownershipType)
    {
        $validated = $request->validate([
            'name_en' => 'required|string|max:255',
            'name_ar' => 'nullable|string|max:255',
            'slug' => ['required', 'string', 'max:255', Rule::unique('ownership_types', 'slug')->ignore($ownershipType->id)],
            'color' => 'nullable|string|max:255',
            'is_active' => 'boolean',
            'sort_order' => 'integer',
        ]);

        $ownershipType->update($validated);

        return redirect()->route('admin.references.ownership-types.index')->with('success', 'Ownership Type updated successfully.');
    }

    public function destroy(OwnershipType $ownershipType)
    {
        if ($ownershipType->landOpportunities()->exists()) {
            return back()->with('error', 'Cannot delete ownership type as it is currently linked to land opportunities.');
        }

        $ownershipType->delete();

        return redirect()->route('admin.references.ownership-types.index')->with('success', 'Ownership Type deleted successfully.');
    }
}
