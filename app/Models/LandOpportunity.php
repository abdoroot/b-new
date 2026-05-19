<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LandOpportunity extends Model
{
    use HasFactory;

    public const STATUS_DRAFT = 'draft';
    public const STATUS_PUBLISHED = 'published';
    public const STATUS_ARCHIVED = 'archived';

    protected $fillable = [
        'title_en',
        'title_ar',
        'slug',
        'area_id',
        'land_use_id',
        'ownership_type_id',
        'price_range_id',
        'location_en',
        'location_ar',
        'short_description_en',
        'short_description_ar',
        'investment_insight_en',
        'investment_insight_ar',
        'area_growth_trigger_en',
        'area_growth_trigger_ar',
        'is_featured',
        'status',
        'sort_order',
        'published_at',
    ];

    protected $casts = [
        'is_featured' => 'boolean',
        'published_at' => 'datetime',
    ];

    public function area()
    {
        return $this->belongsTo(Area::class);
    }

    public function landUse()
    {
        return $this->belongsTo(LandUse::class);
    }

    public function ownershipType()
    {
        return $this->belongsTo(OwnershipType::class);
    }

    public function priceRange()
    {
        return $this->belongsTo(PriceRange::class);
    }

    public function leads()
    {
        return $this->hasMany(Lead::class);
    }
}
