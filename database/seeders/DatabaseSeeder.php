<?php

namespace Database\Seeders;

use App\Models\Area;
use App\Models\LandOpportunity;
use App\Models\LandUse;
use App\Models\OwnershipType;
use App\Models\PriceRange;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Land Uses
        $landUses = [
            'Commercial',
            'Industrial',
            'Residential Commercial',
            'Residential Investment',
            'Townhouse',
            'Mixed-use',
        ];

        foreach ($landUses as $name) {
            LandUse::updateOrCreate(
                ['slug' => Str::slug($name)],
                ['name_en' => $name, 'is_active' => true]
            );
        }

        // 2. Ownership Types
        $ownershipTypes = [
            [
                'name_en' => 'Freehold – All Nationalities',
                'slug' => 'all-nationalities',
                'color' => '#0F8A5F',
            ],
            [
                'name_en' => 'UAE & GCC Nationals',
                'slug' => 'gcc-nationals',
                'color' => '#B38E44',
            ],
            [
                'name_en' => 'Restricted Ownership',
                'slug' => 'restricted',
                'color' => '#64748B',
            ],
        ];

        foreach ($ownershipTypes as $type) {
            OwnershipType::updateOrCreate(
                ['slug' => $type['slug']],
                [
                    'name_en' => $type['name_en'],
                    'color' => $type['color'],
                    'is_active' => true,
                ]
            );
        }

        // 3. Price Ranges
        $priceRanges = [
            [
                'label_en' => 'Under AED 1M',
                'min_amount' => 0,
                'max_amount' => 1000000,
                'sort_order' => 1,
            ],
            [
                'label_en' => 'AED 1M – 3M',
                'min_amount' => 1000000,
                'max_amount' => 3000000,
                'sort_order' => 2,
            ],
            [
                'label_en' => 'AED 3M – 5M',
                'min_amount' => 3000000,
                'max_amount' => 5000000,
                'sort_order' => 3,
            ],
            [
                'label_en' => 'Above AED 5M',
                'min_amount' => 5000000,
                'max_amount' => null,
                'sort_order' => 4,
            ],
        ];

        foreach ($priceRanges as $range) {
            PriceRange::updateOrCreate(
                ['label_en' => $range['label_en']],
                [
                    'min_amount' => $range['min_amount'],
                    'max_amount' => $range['max_amount'],
                    'sort_order' => $range['sort_order'],
                    'is_active' => true,
                ]
            );
        }

        // 4. Areas
        $areas = [
            'Al Saja’a',
            'Al Bataeh',
            'Al Belaida',
            'Muwaileh',
            'Al Rahmaniya',
            'Al Juraina',
        ];

        foreach ($areas as $name) {
            Area::updateOrCreate(
                ['slug' => Str::slug($name)],
                ['name_en' => $name, 'city' => 'Sharjah', 'is_active' => true]
            );
        }

        // 5. Land Opportunities
        $opps = [
            [
                'title_en' => 'Premium Industrial Plot in Al Saja’a',
                'slug' => 'premium-industrial-plot-al-sajaa',
                'area' => 'Al Saja’a',
                'use' => 'Industrial',
                'ownership' => 'all-nationalities',
                'price' => 'AED 1M – 3M',
                'location' => 'Sector 4, Al Saja’a Industrial',
                'desc' => 'Strategically located industrial plot with easy access to Emirates Road.',
                'insight' => 'High demand for logistics hubs in this area due to proximity to the airport.',
                'trigger' => 'Ongoing infrastructure expansion and new utility connections.',
            ],
            [
                'title_en' => 'Residential Investment Opportunity in Muwaileh',
                'slug' => 'residential-investment-muwaileh',
                'area' => 'Muwaileh',
                'use' => 'Residential Investment',
                'ownership' => 'gcc-nationals',
                'price' => 'Above AED 5M',
                'location' => 'Muwaileh Commercial District',
                'desc' => 'Ideal for building G+4 residential apartments catering to university staff.',
                'insight' => 'Consistently high rental yields due to proximity to University City.',
                'trigger' => 'Increasing student enrollment and limited new supply.',
            ],
            [
                'title_en' => 'Mixed-Use Development Land in Al Rahmaniya',
                'slug' => 'mixed-use-land-al-rahmaniya',
                'area' => 'Al Rahmaniya',
                'use' => 'Mixed-use',
                'ownership' => 'all-nationalities',
                'price' => 'AED 3M – 5M',
                'location' => 'Rahmaniya 3, Main Boulevard',
                'desc' => 'Prime corner plot suitable for retail and residential mix.',
                'insight' => 'Rapidly growing family-oriented community with high purchasing power.',
                'trigger' => 'Opening of new community malls and school expansions.',
            ],
            [
                'title_en' => 'Exclusive Townhouse Plot in Al Juraina',
                'slug' => 'townhouse-plot-al-juraina',
                'area' => 'Al Juraina',
                'use' => 'Townhouse',
                'ownership' => 'gcc-nationals',
                'price' => 'Above AED 5M',
                'location' => 'Juraina 2, Near Sheikh Mohammed bin Zayed Road',
                'desc' => 'Large plot in a prestigious neighborhood, perfect for a luxury townhouse cluster.',
                'insight' => 'Limited availability of land in this established luxury enclave.',
                'trigger' => 'Continued demand for high-end residential privacy.',
            ],
            [
                'title_en' => 'Commercial Land for Retail in Al Bataeh',
                'slug' => 'commercial-retail-al-bataeh',
                'area' => 'Al Bataeh',
                'use' => 'Commercial',
                'ownership' => 'all-nationalities',
                'price' => 'Under AED 1M',
                'location' => 'Bataeh Central',
                'desc' => 'Affordable commercial plot ideal for local service providers or small retail outlets.',
                'insight' => 'Emerging hub with significant government investment in infrastructure.',
                'trigger' => 'Direct connection to the new Sharjah-Khorfakkan road.',
            ],
            [
                'title_en' => 'Industrial Expansion Plot in Al Belaida',
                'slug' => 'industrial-plot-al-belaida',
                'area' => 'Al Belaida',
                'use' => 'Industrial',
                'ownership' => 'restricted',
                'price' => 'AED 1M – 3M',
                'location' => 'Belaida Phase 2',
                'desc' => 'Perfect for manufacturing or warehousing facilities.',
                'insight' => 'Lower entry price compared to central industrial zones.',
                'trigger' => 'Development of new specialized industrial clusters.',
            ],
        ];

        foreach ($opps as $index => $opp) {
            $area = Area::where('name_en', $opp['area'])->first();
            $use = LandUse::where('name_en', $opp['use'])->first();
            $type = OwnershipType::where('slug', $opp['ownership'])->first();
            $price = PriceRange::where('label_en', $opp['price'])->first();

            LandOpportunity::updateOrCreate(
                ['slug' => $opp['slug']],
                [
                    'title_en' => $opp['title_en'],
                    'area_id' => $area?->id,
                    'land_use_id' => $use?->id,
                    'ownership_type_id' => $type?->id,
                    'price_range_id' => $price?->id,
                    'location_en' => $opp['location'],
                    'short_description_en' => $opp['desc'],
                    'investment_insight_en' => $opp['insight'],
                    'area_growth_trigger_en' => $opp['trigger'],
                    'is_featured' => true,
                    'status' => LandOpportunity::STATUS_PUBLISHED,
                    'published_at' => now(),
                    'sort_order' => $index,
                ]
            );
        }
    }
}
