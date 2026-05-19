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
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
