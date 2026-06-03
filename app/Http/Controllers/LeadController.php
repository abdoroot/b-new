<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use App\Jobs\SendLeadToHubSpotJob;
use Illuminate\Http\Request;

class LeadController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
            'email' => 'nullable|email|max:255',
            'budget_range_id' => 'nullable|exists:price_ranges,id',
            'lead_purpose_id' => 'nullable|exists:lead_purposes,id',
            'preferred_area_id' => 'nullable|exists:areas,id',
            'message' => 'required|string',
        ]);

        $lead = Lead::create([
            'name' => $validated['name'],
            'phone' => $validated['phone'],
            'email' => $validated['email'] ?? null,
            'budget_range_id' => $validated['budget_range_id'] ?? null,
            'lead_purpose_id' => $validated['lead_purpose_id'] ?? null,
            'preferred_area_id' => $validated['preferred_area_id'] ?? null,
            'message' => $validated['message'] ?? null,
            'source' => 'website_contact_form',
            'status' => 'new',
            'hubspot_sync_status' => config('hubspot.enabled') ? 'pending' : 'disabled',
        ]);

        if (config('hubspot.enabled')) {
            SendLeadToHubSpotJob::dispatch($lead->id);
        }

        return back()->with('success', __('messages.lead_request_sent'));
    }
}
