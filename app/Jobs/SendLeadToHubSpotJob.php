<?php

namespace App\Jobs;

use App\Models\Lead;
use App\Services\HubSpot\HubSpotLeadService;
use Exception;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class SendLeadToHubSpotJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected int $leadId;

    /**
     * Create a new job instance.
     */
    public function __construct(int $leadId)
    {
        $this->leadId = $leadId;
    }

    /**
     * Execute the job.
     */
    public function handle(HubSpotLeadService $hubSpotService): void
    {
        $lead = Lead::with(['budgetRange', 'leadPurpose', 'preferredArea', 'landOpportunity'])->find($this->leadId);

        if (!$lead) {
            Log::warning("HubSpot Job: Lead not found with ID {$this->leadId}");
            return;
        }

        $lead->update([
            'hubspot_sync_status' => 'syncing',
        ]);

        try {
            $contactId = $hubSpotService->syncLead($lead);

            $lead->update([
                'hubspot_contact_id' => $contactId,
                'hubspot_sync_status' => 'synced',
                'hubspot_sync_error' => null,
                'hubspot_synced_at' => now(),
            ]);
        } catch (Exception $e) {
            Log::error("HubSpot Sync Failed for Lead #{$lead->id}: " . $e->getMessage());

            $lead->update([
                'hubspot_sync_status' => 'failed',
                'hubspot_sync_error' => $e->getMessage(),
            ]);
        }
    }
}
