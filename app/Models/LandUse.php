<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LandUse extends Model
{
    use HasFactory;

    protected $fillable = [
        'name_en',
        'name_ar',
        'slug',
        'is_active',
        'sort_order',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function defaultAreas()
    {
        return $this->hasMany(Area::class, 'default_land_use_id');
    }

    public function landOpportunities()
    {
        return $this->hasMany(LandOpportunity::class);
    }
}
