<?php

namespace App\Services\HubSpot;

use App\Models\Lead;
use Exception;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class HubSpotLeadService
{
    protected string $accessToken;
    protected string $baseUrl;
    protected int $timeout;
    protected bool $enabled;

    public function __construct()
    {
        $this->enabled = config('hubspot.enabled', false);
        $this->accessToken = config('hubspot.access_token') ?? '';
        $this->baseUrl = rtrim(config('hubspot.base_url', 'https://api.hubapi.com'), '/');
        $this->timeout = config('hubspot.timeout', 15);
    }

    /**
     * Create or update a contact in HubSpot.
     *
     * @param Lead $lead
     * @return string HubSpot Contact ID
     * @throws Exception
     */
    public function syncLead(Lead $lead): string
    {
        if (!$this->enabled) {
            return '';
        }

        if (empty($this->accessToken)) {
            throw new Exception('HubSpot Access Token is missing but integration is enabled.');
        }

        $properties = $this->mapLeadToProperties($lead);

        // Try to find contact by email if available
        $contactId = null;
        if ($lead->email) {
            $contactId = $this->findContactByEmail($lead->email);
        }

        if ($contactId) {
            return $this->updateContact($contactId, $properties);
        }

        return $this->createContact($properties);
    }

    protected function mapLeadToProperties(Lead $lead): array
    {
        return array_filter([
            'firstname' => $lead->name,
            'phone' => $lead->phone,
            'email' => $lead->email,
        ], fn($value) => !is_null($value) && $value !== '');
    }

    protected function findContactByEmail(string $email): ?string
    {
        $response = Http::withToken($this->accessToken)
            ->timeout($this->timeout)
            ->get("{$this->baseUrl}/crm/v3/objects/contacts/{$email}", [
                'idProperty' => 'email'
            ]);

        if ($response->successful()) {
            return $response->json('id');
        }

        return null;
    }

    protected function createContact(array $properties): string
    {
        $response = Http::withToken($this->accessToken)
            ->timeout($this->timeout)
            ->post("{$this->baseUrl}/crm/v3/objects/contacts", [
                'properties' => $properties
            ]);

        if (!$response->successful()) {
            $this->handleError($response, 'creating');
        }

        return $response->json('id');
    }

    protected function updateContact(string $contactId, array $properties): string
    {
        $response = Http::withToken($this->accessToken)
            ->timeout($this->timeout)
            ->patch("{$this->baseUrl}/crm/v3/objects/contacts/{$contactId}", [
                'properties' => $properties
            ]);

        if (!$response->successful()) {
            $this->handleError($response, 'updating');
        }

        return $contactId;
    }

    protected function handleError($response, string $action): void
    {
        $error = $response->json('message') ?? $response->body();
        Log::error("HubSpot API Error while {$action} contact: {$error}");
        throw new Exception("HubSpot API Error: {$error}");
    }
}
