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
        Schema::create('land_opportunities', function (Blueprint $table) {
            $table->id();
            $table->string('title_en');
            $table->string('title_ar')->nullable();
            $table->string('slug')->unique();
            $table->foreignId('area_id')->nullable()->constrained('areas')->nullOnDelete();
            $table->foreignId('land_use_id')->nullable()->constrained('land_uses')->nullOnDelete();
            $table->foreignId('ownership_type_id')->nullable()->constrained('ownership_types')->nullOnDelete();
            $table->foreignId('price_range_id')->nullable()->constrained('price_ranges')->nullOnDelete();
            $table->string('location_en')->nullable();
            $table->string('location_ar')->nullable();
            $table->text('short_description_en')->nullable();
            $table->text('short_description_ar')->nullable();
            $table->text('investment_insight_en')->nullable();
            $table->text('investment_insight_ar')->nullable();
            $table->text('area_growth_trigger_en')->nullable();
            $table->text('area_growth_trigger_ar')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->enum('status', ['draft', 'published', 'archived'])->default('draft');
            $table->integer('sort_order')->default(0);
            $table->timestamp('published_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('land_opportunities');
    }
};
