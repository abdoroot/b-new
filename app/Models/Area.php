<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Area extends Model
{
    use HasFactory;

    protected $fillable = [
        'name_en',
        'name_ar',
        'slug',
        'default_land_use_id',
        'city',
        'is_active',
        'sort_order',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function defaultLandUse()
    {
        return $this->belongsTo(LandUse::class, 'default_land_use_id');
    }

    public function landOpportunities()
    {
        return $this->hasMany(LandOpportunity::class);
    }

    public function leads()
    {
        return $this->hasMany(Lead::class, 'preferred_area_id');
    }
}
