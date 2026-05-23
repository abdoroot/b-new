<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LandOpportunityController;
use App\Http\Controllers\LeadController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Public Routes
Route::get('/', HomeController::class)->name('home');

Route::prefix('land-opportunities')->name('land-opportunities.')->group(function () {
    Route::get('/', [LandOpportunityController::class, 'index'])->name('index');
    Route::get('/{slug}', [LandOpportunityController::class, 'show'])->name('show');
});

Route::get('/advisory', fn () => inertia('Advisory/Index'))->name('advisory.index');

Route::get('/contact', [ContactController::class, 'index'])->name('contact.index');
Route::post('/leads', [LeadController::class, 'store'])->name('leads.store');

// Auth Routes (Breeze)
Route::get('/dashboard', function () {
    return redirect()->route('admin.dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Admin Area
    Route::prefix('admin')->name('admin.')->group(function () {
        Route::get('/dashboard', \App\Http\Controllers\Admin\DashboardController::class)->name('dashboard');
        
        Route::prefix('leads')->name('leads.')->group(function () {
            Route::get('/', [\App\Http\Controllers\Admin\LeadController::class, 'index'])->name('index');
            Route::get('/{lead}', [\App\Http\Controllers\Admin\LeadController::class, 'show'])->name('show');
            Route::patch('/{lead}/status', [\App\Http\Controllers\Admin\LeadController::class, 'updateStatus'])->name('update-status');
        });

        Route::resource('opportunities', \App\Http\Controllers\Admin\LandOpportunityController::class);

        Route::prefix('references')->name('references.')->group(function () {
            Route::resource('areas', \App\Http\Controllers\Admin\Reference\AreaController::class)->except(['show']);
            Route::resource('land-uses', \App\Http\Controllers\Admin\Reference\LandUseController::class)
                ->except(['show'])
                ->parameters(['land-uses' => 'land_use']);
            Route::resource('ownership-types', \App\Http\Controllers\Admin\Reference\OwnershipTypeController::class)->except(['show']);
            Route::resource('price-ranges', \App\Http\Controllers\Admin\Reference\PriceRangeController::class)->except(['show']);
            Route::resource('lead-purposes', \App\Http\Controllers\Admin\Reference\LeadPurposeController::class)->except(['show']);
        });

        Route::get('site-settings', [\App\Http\Controllers\Admin\SiteSettingController::class, 'index'])->name('site-settings.index');
        Route::patch('site-settings', [\App\Http\Controllers\Admin\SiteSettingController::class, 'update'])->name('site-settings.update');
    });
});

require __DIR__.'/auth.php';
