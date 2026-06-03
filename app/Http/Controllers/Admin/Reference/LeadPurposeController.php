<?php

namespace App\Http\Controllers\Admin\Reference;

use App\Http\Controllers\Controller;
use App\Models\LeadPurpose;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class LeadPurposeController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/References/LeadPurposes/Index', [
            'items' => LeadPurpose::orderBy('sort_order')->orderBy('label_en')->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/References/LeadPurposes/Form');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'label_en' => 'required|string|max:255',
            'label_ar' => 'nullable|string|max:255',
            'slug' => 'required|string|max:255|unique:lead_purposes,slug',
            'is_active' => 'boolean',
            'sort_order' => 'integer',
        ]);

        LeadPurpose::create($validated);

        return redirect()->route('admin.references.lead-purposes.index')->with('success', __('messages.lead_purpose_created'));
    }

    public function edit(LeadPurpose $leadPurpose)
    {
        return Inertia::render('Admin/References/LeadPurposes/Form', [
            'item' => $leadPurpose,
        ]);
    }

    public function update(Request $request, LeadPurpose $leadPurpose)
    {
        $validated = $request->validate([
            'label_en' => 'required|string|max:255',
            'label_ar' => 'nullable|string|max:255',
            'slug' => ['required', 'string', 'max:255', Rule::unique('lead_purposes', 'slug')->ignore($leadPurpose->id)],
            'is_active' => 'boolean',
            'sort_order' => 'integer',
        ]);

        $leadPurpose->update($validated);

        return redirect()->route('admin.references.lead-purposes.index')->with('success', __('messages.lead_purpose_updated'));
    }

    public function destroy(LeadPurpose $leadPurpose)
    {
        if ($leadPurpose->leads()->exists()) {
            return back()->with('error', __('messages.lead_purpose_delete_blocked'));
        }

        $leadPurpose->delete();

        return redirect()->route('admin.references.lead-purposes.index')->with('success', __('messages.lead_purpose_deleted'));
    }
}
