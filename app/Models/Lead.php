<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'phone',
        'email',
        'budget_range_id',
        'lead_purpose_id',
        'purpose',
        'preferred_area_id',
        'land_opportunity_id',
        'message',
        'source',
        'status',
    ];

    public function budgetRange()
    {
        return $this->belongsTo(PriceRange::class, 'budget_range_id');
    }

    public function leadPurpose()
    {
        return $this->belongsTo(LeadPurpose::class);
    }

    public function preferredArea()
    {
        return $this->belongsTo(Area::class, 'preferred_area_id');
    }

    public function landOpportunity()
    {
        return $this->belongsTo(LandOpportunity::class);
    }
}
