<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SiteSetting;
use App\Services\SiteSettingsService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SiteSettingController extends Controller
{
    public function index()
    {
        $settings = SiteSetting::orderBy('group')->orderBy('sort_order')->get();
        
        return Inertia::render('Admin/SiteSettings/Edit', [
            'settings' => $settings,
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'settings' => 'required|array',
            'settings.company_name' => 'nullable|string|max:255',
            'settings.site_positioning' => 'nullable|string|max:255',
            'settings.contact_address' => 'nullable|string|max:500',
            'settings.contact_phone' => 'nullable|string|max:80',
            'settings.contact_email' => 'nullable|email|max:255',
            'settings.contact_whatsapp' => 'nullable|string|max:80',
            'settings.contact_whatsapp_url' => 'nullable|url|max:500',
        ]);

        foreach ($validated['settings'] as $key => $value) {
            SiteSetting::updateOrCreate(
                ['key' => $key],
                ['value' => $value]
            );
        }

        app(SiteSettingsService::class)->clearCache();

        return back()->with('success', 'Site settings updated successfully.');
    }
}
