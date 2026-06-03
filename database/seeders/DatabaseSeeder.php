<?php

namespace Database\Seeders;

use App\Models\Area;
use App\Models\LandUse;
use App\Models\LeadPurpose;
use App\Models\OwnershipType;
use App\Models\PriceRange;
use App\Models\SiteSetting;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $landUses = collect([
            [
                'name_en' => 'Commercial',
                'name_ar' => 'تجاري',
                'slug' => 'commercial',
                'sort_order' => 10,
            ],
            [
                'name_en' => 'Industrial',
                'name_ar' => 'صناعي',
                'slug' => 'industrial',
                'sort_order' => 20,
            ],
            [
                'name_en' => 'Commercial Industrial',
                'name_ar' => 'تجاري صناعي',
                'slug' => 'commercial-industrial',
                'sort_order' => 30,
            ],
            [
                'name_en' => 'Residential Commercial',
                'name_ar' => 'سكني تجاري',
                'slug' => 'residential-commercial',
                'sort_order' => 40,
            ],
            [
                'name_en' => 'Residential Investment',
                'name_ar' => 'سكني استثماري',
                'slug' => 'residential-investment',
                'sort_order' => 50,
            ],
            [
                'name_en' => 'Townhouse',
                'name_ar' => 'تاون هاوس',
                'slug' => 'townhouse',
                'sort_order' => 60,
            ],
            [
                'name_en' => 'Villa',
                'name_ar' => 'فلل',
                'slug' => 'villa',
                'sort_order' => 70,
            ],
            [
                'name_en' => 'Mixed-use',
                'name_ar' => 'متعدد الاستخدامات',
                'slug' => 'mixed-use',
                'sort_order' => 80,
            ],
        ])->mapWithKeys(function ($item) {
            $model = LandUse::updateOrCreate(
                ['slug' => $item['slug']],
                [
                    'name_en' => $item['name_en'],
                    'name_ar' => $item['name_ar'],
                    'is_active' => true,
                    'sort_order' => $item['sort_order'],
                ]
            );

            return [$item['slug'] => $model];
        });

        $ownershipTypes = collect([
            [
                'name_en' => 'Freehold – All Nationalities',
                'name_ar' => 'تملك حر – كل الجنسيات',
                'slug' => 'freehold-all-nationalities',
                'color' => '#0F8A5F',
                'sort_order' => 10,
            ],
            [
                'name_en' => 'UAE & GCC Nationals',
                'name_ar' => 'لمواطني الإمارات والخليج',
                'slug' => 'uae-gcc-nationals',
                'color' => '#B38E44',
                'sort_order' => 20,
            ],
            [
                'name_en' => 'Restricted Ownership',
                'name_ar' => 'تملك بشروط',
                'slug' => 'restricted-ownership',
                'color' => '#64748B',
                'sort_order' => 30,
            ],
        ])->mapWithKeys(function ($item) {
            $model = OwnershipType::updateOrCreate(
                ['slug' => $item['slug']],
                [
                    'name_en' => $item['name_en'],
                    'name_ar' => $item['name_ar'],
                    'color' => $item['color'],
                    'is_active' => true,
                    'sort_order' => $item['sort_order'],
                ]
            );

            return [$item['slug'] => $model];
        });

        $priceRanges = collect([
            [
                'label_en' => 'Under AED 1M',
                'label_ar' => 'أقل من مليون درهم',
                'slug' => 'under-1m',
                'min_amount' => null,
                'max_amount' => 1000000,
                'sort_order' => 10,
            ],
            [
                'label_en' => 'AED 1M – 3M',
                'label_ar' => 'من 1 إلى 3 مليون درهم',
                'slug' => '1m-3m',
                'min_amount' => 1000000,
                'max_amount' => 3000000,
                'sort_order' => 20,
            ],
            [
                'label_en' => 'AED 3M – 5M',
                'label_ar' => 'من 3 إلى 5 مليون درهم',
                'slug' => '3m-5m',
                'min_amount' => 3000000,
                'max_amount' => 5000000,
                'sort_order' => 30,
            ],
            [
                'label_en' => 'Above AED 5M',
                'label_ar' => 'أكثر من 5 مليون درهم',
                'slug' => 'above-5m',
                'min_amount' => 5000000,
                'max_amount' => null,
                'sort_order' => 40,
            ],
        ])->mapWithKeys(function ($item) {
            $model = PriceRange::updateOrCreate(
                ['slug' => $item['slug']],
                [
                    'label_en' => $item['label_en'],
                    'label_ar' => $item['label_ar'],
                    'min_amount' => $item['min_amount'],
                    'max_amount' => $item['max_amount'],
                    'currency' => 'AED',
                    'is_active' => true,
                    'sort_order' => $item['sort_order'],
                ]
            );

            return [$item['slug'] => $model];
        });

        $areas = collect([
            [
                'name_en' => 'Al Saja’a',
                'name_ar' => 'الصجعة',
                'slug' => 'al-sajaa',
                'default_land_use_slug' => 'industrial',
                'sort_order' => 10,
            ],
            [
                'name_en' => 'Al Bataeh',
                'name_ar' => 'البطائح',
                'slug' => 'al-bataeh',
                'default_land_use_slug' => 'townhouse',
                'sort_order' => 20,
            ],
            [
                'name_en' => 'Al Belaida',
                'name_ar' => 'البليدة',
                'slug' => 'al-belaida',
                'default_land_use_slug' => 'townhouse',
                'sort_order' => 30,
            ],
            [
                'name_en' => 'Muwaileh',
                'name_ar' => 'مويلح',
                'slug' => 'muwaileh',
                'default_land_use_slug' => 'commercial',
                'sort_order' => 40,
            ],
            [
                'name_en' => 'Al Rahmaniya',
                'name_ar' => 'الرحمانية',
                'slug' => 'al-rahmaniya',
                'default_land_use_slug' => 'residential-investment',
                'sort_order' => 50,
            ],
            [
                'name_en' => 'Al Juraina',
                'name_ar' => 'الجرينة',
                'slug' => 'al-juraina',
                'default_land_use_slug' => 'residential-investment',
                'sort_order' => 60,
            ],
        ])->mapWithKeys(function ($item) use ($landUses) {
            $model = Area::updateOrCreate(
                ['slug' => $item['slug']],
                [
                    'name_en' => $item['name_en'],
                    'name_ar' => $item['name_ar'],
                    'city' => 'Sharjah',
                    'default_land_use_id' => $landUses[$item['default_land_use_slug']]->id,
                    'is_active' => true,
                    'sort_order' => $item['sort_order'],
                ]
            );

            return [$item['slug'] => $model];
        });

        collect([
            [
                'label_en' => 'Buy land',
                'label_ar' => 'شراء أرض',
                'slug' => 'buy-land',
                'sort_order' => 10,
            ],
            [
                'label_en' => 'Sell land',
                'label_ar' => 'بيع أرض',
                'slug' => 'sell-land',
                'sort_order' => 20,
            ],
            [
                'label_en' => 'Investment advisory',
                'label_ar' => 'استشارة استثمارية',
                'slug' => 'investment-advisory',
                'sort_order' => 30,
            ],
            [
                'label_en' => 'Request shortlist',
                'label_ar' => 'طلب قائمة فرص',
                'slug' => 'request-shortlist',
                'sort_order' => 40,
            ],
        ])->each(function ($item) {
            LeadPurpose::updateOrCreate(
                ['slug' => $item['slug']],
                [
                    'label_en' => $item['label_en'],
                    'label_ar' => $item['label_ar'],
                    'is_active' => true,
                    'sort_order' => $item['sort_order'],
                ]
            );
        });

        collect([
            [
                'key' => 'company_name',
                'value' => 'Al Barakah Real Estate',
                'group' => 'general',
            ],
            [
                'key' => 'site_positioning',
                'value' => 'Sharjah Land Advisory',
                'group' => 'general',
            ],
            [
                'key' => 'contact_address',
                'value' => 'Rolla, Mall Office 415, Sharjah, UAE',
                'group' => 'contact',
            ],
            [
                'key' => 'contact_phone',
                'value' => '065 556 777',
                'group' => 'contact',
            ],
            [
                'key' => 'contact_email',
                'value' => 'info@barakahre.com',
                'group' => 'contact',
            ],
            [
                'key' => 'contact_whatsapp',
                'value' => '+971XXXXXXXXX',
                'group' => 'contact',
            ],
            [
                'key' => 'contact_whatsapp_url',
                'value' => 'https://wa.me/971XXXXXXXXX',
                'group' => 'contact',
            ],
        ])->each(function ($item) {
            SiteSetting::updateOrCreate(
                ['key' => $item['key']],
                [
                    'value' => $item['value'],
                    'group' => $item['group'],
                    'is_public' => true,
                ]
            );
        });
    }
}
