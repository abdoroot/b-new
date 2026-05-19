<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\LandOpportunity;
use App\Models\Lead;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'total_leads' => Lead::count(),
                'new_leads' => Lead::where('status', Lead::STATUS_NEW)->count(),
                'contacted_leads' => Lead::where('status', Lead::STATUS_CONTACTED)->count(),
                'total_published_opportunities' => LandOpportunity::where('status', LandOpportunity::STATUS_PUBLISHED)->count(),
                'featured_opportunities' => LandOpportunity::where('is_featured', true)->count(),
            ],
        ]);
    }
}
