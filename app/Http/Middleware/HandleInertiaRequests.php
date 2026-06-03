<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Lang;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $locale = App::currentLocale();

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'locale' => [
                'current' => $locale,
                'available' => ['en', 'ar'],
                'direction' => $locale === 'ar' ? 'rtl' : 'ltr',
            ],
            'siteSettings' => app(\App\Services\SiteSettingsService::class)->public(),
            'translations' => [
                'public' => Lang::get('public'),
                'forms' => Lang::get('forms'),
                'messages' => Lang::get('messages'),
                'admin' => Lang::get('admin'),
            ],
            'flash' => [
                'success' => $request->session()->get('success'),
                'error' => $request->session()->get('error'),
            ],
        ];
    }
}
