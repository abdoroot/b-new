<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Lead;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LeadController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Leads/Index', [
            'leads' => Lead::query()
                ->with(['budgetRange', 'leadPurpose', 'preferredArea', 'landOpportunity'])
                ->latest()
                ->paginate(15),
        ]);
    }

    public function show(Lead $lead)
    {
        $lead->load(['budgetRange', 'leadPurpose', 'preferredArea', 'landOpportunity']);

        return Inertia::render('Admin/Leads/Show', [
            'lead' => $lead,
            'statuses' => array_keys(Lead::statuses()),
        ]);
    }

    public function updateStatus(Request $request, Lead $lead)
    {
        $validated = $request->validate([
            'status' => 'required|in:' . implode(',', array_keys(Lead::statuses())),
        ]);

        $lead->update([
            'status' => $validated['status'],
        ]);

        return back()->with('success', __('messages.lead_status_updated'));
    }

    public function destroy(Lead $lead)
    {
        $lead->delete();

        return redirect()->route('admin.leads.index')->with('success', __('messages.lead_deleted'));
    }
}
