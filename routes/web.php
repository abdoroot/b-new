<?php

use Illuminate\Support\Facades\Route;

Route::get('/', fn () => inertia('Home'))->name('home');

Route::prefix('land-opportunities')->name('land-opportunities.')->group(function () {
    Route::get('/', fn () => inertia('LandOpportunities/Index'))->name('index');
    Route::get('/{slug}', fn (string $slug) => inertia('LandOpportunities/Show', ['slug' => $slug]))->name('show');
});

Route::get('/advisory', fn () => inertia('Advisory/Index'))->name('advisory.index');
Route::get('/contact', fn () => inertia('Contact/Index'))->name('contact.index');
