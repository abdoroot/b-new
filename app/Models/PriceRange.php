<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PriceRange extends Model
{
    use HasFactory;

    protected $fillable = [
        'label_en',
        'label_ar',
        'min_amount',
        'max_amount',
        'currency',
        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'min_amount' => 'decimal:2',
        'max_amount' => 'decimal:2',
        'is_active' => 'boolean',
    ];

    public function landOpportunities()
    {
        return $this->hasMany(LandOpportunity::class);
    }

    public function leads()
    {
        return $this->hasMany(Lead::class, 'budget_range_id');
    }
}
