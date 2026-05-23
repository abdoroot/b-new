<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('leads', function (Blueprint $table) {
            $table->string('hubspot_contact_id')->nullable()->after('status');
            $table->string('hubspot_deal_id')->nullable()->after('hubspot_contact_id');
            $table->string('hubspot_sync_status')->nullable()->default('pending')->after('hubspot_deal_id');
            $table->text('hubspot_sync_error')->nullable()->after('hubspot_sync_status');
            $table->timestamp('hubspot_synced_at')->nullable()->after('hubspot_sync_error');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('leads', function (Blueprint $table) {
            $table->dropColumn([
                'hubspot_contact_id',
                'hubspot_deal_id',
                'hubspot_sync_status',
                'hubspot_sync_error',
                'hubspot_synced_at',
            ]);
        });
    }
};
