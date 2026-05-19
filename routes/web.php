<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LandOpportunityController;
use App\Http\Controllers\LeadController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');

Route::prefix('land-opportunities')->name('land-opportunities.')->group(function () {
    Route::get('/', [LandOpportunityController::class, 'index'])->name('index');
    Route::get('/{slug}', [LandOpportunityController::class, 'show'])->name('show');
});

Route::get('/advisory', fn () => inertia('Advisory/Index'))->name('advisory.index');

Route::get('/contact', [ContactController::class, 'index'])->name('contact.index');
Route::post('/leads', [LeadController::class, 'store'])->name('leads.store');
