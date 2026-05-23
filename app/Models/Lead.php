<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    use HasFactory;

    const STATUS_NEW = 'new';
    const STATUS_CONTACTED = 'contacted';
    const STATUS_QUALIFIED = 'qualified';
    const STATUS_CLOSED = 'closed';
    const STATUS_IGNORED = 'ignored';

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
        'hubspot_contact_id',
        'hubspot_deal_id',
        'hubspot_sync_status',
        'hubspot_sync_error',
        'hubspot_synced_at',
    ];

    protected $casts = [
        'hubspot_synced_at' => 'datetime',
    ];

    public static function statuses(): array
    {
        return [
            self::STATUS_NEW => 'New',
            self::STATUS_CONTACTED => 'Contacted',
            self::STATUS_QUALIFIED => 'Qualified',
            self::STATUS_CLOSED => 'Closed',
            self::STATUS_IGNORED => 'Ignored',
        ];
    }

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
