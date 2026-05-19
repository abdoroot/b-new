<?php

namespace App\Services;

use App\Models\SiteSetting;
use Illuminate\Support\Facades\Cache;

class SiteSettingsService
{
    private const CACHE_KEY_PUBLIC = 'site_settings.public';
    private const TTL = 3600;

    /**
     * Get all public settings as a key-value array.
     */
    public function public(): array
    {
        return Cache::remember(self::CACHE_KEY_PUBLIC, self::TTL, function () {
            return SiteSetting::where('is_public', true)
                ->pluck('value', 'key')
                ->toArray();
        });
    }

    /**
     * Get a specific setting by key.
     */
    public function get(string $key, mixed $default = null): mixed
    {
        $settings = $this->public();
        
        if (array_key_exists($key, $settings)) {
            return $settings[$key];
        }

        // If not in public, try to find it (could be private)
        return SiteSetting::where('key', $key)->value('value') ?? $default;
    }

    /**
     * Clear the settings cache.
     */
    public function clearCache(): void
    {
        Cache::forget(self::CACHE_KEY_PUBLIC);
    }
}
