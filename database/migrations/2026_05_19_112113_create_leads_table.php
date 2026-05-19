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
        Schema::create('leads', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('phone');
            $table->string('email')->nullable();
            $table->foreignId('budget_range_id')->nullable()->constrained('price_ranges')->nullOnDelete();
            $table->string('purpose')->nullable();
            $table->foreignId('preferred_area_id')->nullable()->constrained('areas')->nullOnDelete();
            $table->foreignId('land_opportunity_id')->nullable()->constrained('land_opportunities')->nullOnDelete();
            $table->text('message')->nullable();
            $table->string('source')->nullable();
            $table->string('status')->default('new');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('leads');
    }
};
