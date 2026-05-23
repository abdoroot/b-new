<?php

namespace Database\Seeders;

use App\Models\Area;
use App\Models\LandOpportunity;
use App\Models\LandUse;
use App\Models\LeadPurpose;
use App\Models\OwnershipType;
use App\Models\PriceRange;
use App\Models\SiteSetting;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;

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

        $publishedAt = Carbon::now()->subDays(2);

        $opportunities = [
            [
                'title_en' => 'Townhouse Land Near Green Community Spine in Basateen Al-Bleida',
                'title_ar' => 'أرض تاون هاوس قرب محور مجتمعي أخضر في بساتين البليدة',
                'slug' => 'basateen-al-bleida-townhouse-community-spine',
                'area_slug' => 'al-belaida',
                'land_use_slug' => 'townhouse',
                'ownership_slug' => 'freehold-all-nationalities',
                'price_range_slug' => 'under-1m',
                'location_en' => 'Basateen Al-Bleida, with direct access to Maleha Road and convenient movement toward Emirates Road.',
                'location_ar' => 'بساتين البليدة، مع وصول مباشر إلى شارع مليحة وحركة مريحة باتجاه شارع الإمارات.',
                'short_description_en' => 'Townhouse land opportunity in a residential masterplan with community facilities and long-term family living appeal.',
                'short_description_ar' => 'فرصة أرض تاون هاوس ضمن مخطط سكني يضم خدمات مجتمعية وجاذبية للسكن العائلي طويل المدى.',
                'investment_insight_en' => 'A suitable entry point for buyers seeking smaller-format freehold residential land with flexible payment positioning.',
                'investment_insight_ar' => 'فرصة مناسبة للراغبين في تملك أرض سكنية بتملك حر ضمن فئة دخول أقل وأنظمة سداد مرنة.',
                'area_growth_trigger_en' => 'Maleha Road exposure and proximity to Emirates Road support future residential demand across the corridor.',
                'area_growth_trigger_ar' => 'الارتباط بشارع مليحة والقرب من شارع الإمارات يدعمان الطلب السكني المستقبلي في هذا المحور.',
                'is_featured' => true,
                'sort_order' => 10,
            ],
            [
                'title_en' => 'Villa Land Positioning in Basateen Al-Bleida',
                'title_ar' => 'أرض فلل بموقع سكني في بساتين البليدة',
                'slug' => 'basateen-al-bleida-villa-land-positioning',
                'area_slug' => 'al-belaida',
                'land_use_slug' => 'villa',
                'ownership_slug' => 'freehold-all-nationalities',
                'price_range_slug' => '1m-3m',
                'location_en' => 'Residential district positioning near Maleha Road and the wider Emirates Road connection.',
                'location_ar' => 'موقع سكني قريب من شارع مليحة ومرتبط بمحاور شارع الإمارات.',
                'short_description_en' => 'Villa land opportunity for buyers seeking independent residential positioning in an expanding Sharjah district.',
                'short_description_ar' => 'فرصة أرض فلل للمشترين الباحثين عن موقع سكني مستقل ضمن منطقة توسع في الشارقة.',
                'investment_insight_en' => 'Independent villa plots offer a stronger lifestyle and end-user profile compared with smaller townhouse-only options.',
                'investment_insight_ar' => 'قطع الفلل المستقلة تمنح جاذبية أعلى للسكن العائلي مقارنة بخيارات التاون هاوس الأصغر.',
                'area_growth_trigger_en' => 'The project’s road connection and residential masterplan structure support long-term end-user interest.',
                'area_growth_trigger_ar' => 'اتصال المشروع بالطرق وهيكل المخطط السكني يدعمان اهتمام المستخدم النهائي على المدى الطويل.',
                'is_featured' => true,
                'sort_order' => 20,
            ],
            [
                'title_en' => 'Residential Commercial Land in Wahat Al Bataeh',
                'title_ar' => 'أرض سكني تجاري في واحة البطائح',
                'slug' => 'wahat-al-bataeh-residential-commercial-land',
                'area_slug' => 'al-bataeh',
                'land_use_slug' => 'residential-commercial',
                'ownership_slug' => 'freehold-all-nationalities',
                'price_range_slug' => 'under-1m',
                'location_en' => 'Wahat Al Bataeh, connecting Al Dhaid Road and Khorfakkan Road with movement toward Emirates Road.',
                'location_ar' => 'واحة البطائح، تربط بين طريق الذيد وطريق خورفكان مع حركة باتجاه شارع الإمارات.',
                'short_description_en' => 'Residential-commercial G+2 land opportunity in a pre-launch community with mixed residential and service components.',
                'short_description_ar' => 'فرصة أرض سكني تجاري G+2 ضمن مجتمع في مرحلة ما قبل الطرح يضم مكونات سكنية وخدمية.',
                'investment_insight_en' => 'This format suits buyers seeking income-oriented land with potential residential demand and local retail/service utility.',
                'investment_insight_ar' => 'هذا النوع مناسب للمشترين الباحثين عن أرض ذات طابع دخل مع طلب سكني محتمل وخدمات محلية.',
                'area_growth_trigger_en' => 'Commercial strips, mosque areas, parks, and service zones strengthen the usability of the surrounding community.',
                'area_growth_trigger_ar' => 'وجود محلات ومساجد وحدائق ومناطق خدمات يعزز قابلية الاستخدام داخل المجتمع المحيط.',
                'is_featured' => true,
                'sort_order' => 30,
            ],
            [
                'title_en' => 'Townhouse Land Near Community Facilities in Wahat Al Bataeh',
                'title_ar' => 'أرض تاون هاوس قرب الخدمات المجتمعية في واحة البطائح',
                'slug' => 'wahat-al-bataeh-townhouse-community-facilities',
                'area_slug' => 'al-bataeh',
                'land_use_slug' => 'townhouse',
                'ownership_slug' => 'freehold-all-nationalities',
                'price_range_slug' => 'under-1m',
                'location_en' => 'Townhouse zone within Wahat Al Bataeh, supported by parks, mosque areas, and service plots.',
                'location_ar' => 'منطقة تاون هاوس ضمن واحة البطائح مدعومة بحدائق ومساجد ومناطق خدمات.',
                'short_description_en' => 'Compact townhouse land positioned for affordable residential entry within a planned Sharjah community.',
                'short_description_ar' => 'أرض تاون هاوس بحجم مناسب للدخول السكني ضمن مجتمع مخطط في الشارقة.',
                'investment_insight_en' => 'Smaller townhouse plots provide accessible pricing and stronger liquidity compared with larger residential land formats.',
                'investment_insight_ar' => 'قطع التاون هاوس الأصغر توفر سعر دخول أسهل وسيولة أعلى مقارنة بالقطع السكنية الأكبر.',
                'area_growth_trigger_en' => 'The mix of parks, services, and internal community roads supports end-user appeal and future absorption.',
                'area_growth_trigger_ar' => 'مزيج الحدائق والخدمات والطرق الداخلية يدعم جاذبية المستخدم النهائي والاستيعاب المستقبلي.',
                'is_featured' => true,
                'sort_order' => 40,
            ],
            [
                'title_en' => 'Residential Investment Land in Wahat Al Bataeh',
                'title_ar' => 'أرض سكني استثماري في واحة البطائح',
                'slug' => 'wahat-al-bataeh-residential-investment-land',
                'area_slug' => 'al-bataeh',
                'land_use_slug' => 'residential-investment',
                'ownership_slug' => 'freehold-all-nationalities',
                'price_range_slug' => '1m-3m',
                'location_en' => 'Residential investment zone within Wahat Al Bataeh with planned community facilities nearby.',
                'location_ar' => 'منطقة سكني استثماري في واحة البطائح بالقرب من مرافق مجتمعية مخططة.',
                'short_description_en' => 'Residential investment G+2 land positioned for buyers looking beyond single-family residential use.',
                'short_description_ar' => 'أرض سكني استثماري G+2 للمشترين الباحثين عن استخدام يتجاوز السكن الفردي.',
                'investment_insight_en' => 'The plot type offers stronger rental or multi-unit positioning than standard villa or townhouse land.',
                'investment_insight_ar' => 'هذا النوع يمنح قابلية أفضل للتأجير أو الاستخدام متعدد الوحدات مقارنة بأرض الفيلا أو التاون هاوس.',
                'area_growth_trigger_en' => 'The project’s planned residential density and community facilities create a stronger case for investment-oriented ownership.',
                'area_growth_trigger_ar' => 'الكثافة السكنية المخططة والخدمات المجتمعية تعزز منطق التملك الاستثماري.',
                'is_featured' => false,
                'sort_order' => 50,
            ],
            [
                'title_en' => 'Pre-Launch Villa Plot in Wahat Al Bataeh',
                'title_ar' => 'أرض فيلا قبل الطرح الرسمي في واحة البطائح',
                'slug' => 'wahat-al-bataeh-pre-launch-villa-plot',
                'area_slug' => 'al-bataeh',
                'land_use_slug' => 'villa',
                'ownership_slug' => 'freehold-all-nationalities',
                'price_range_slug' => 'under-1m',
                'location_en' => 'Villa plot opportunity in Wahat Al Bataeh before the wider official launch.',
                'location_ar' => 'فرصة أرض فيلا في واحة البطائح قبل الطرح الرسمي الأوسع.',
                'short_description_en' => 'Early-access villa land opportunity with limited pre-launch pricing positioning.',
                'short_description_ar' => 'فرصة أرض فيلا بدخول مبكر وتسعير محدود قبل الطرح الرسمي.',
                'investment_insight_en' => 'Pre-launch access can offer stronger entry pricing for buyers comfortable acting before full public release.',
                'investment_insight_ar' => 'الدخول قبل الطرح قد يوفر سعراً أفضل للمشترين المستعدين لاتخاذ القرار قبل الإطلاق العام.',
                'area_growth_trigger_en' => 'The location benefits from road connectivity between Al Dhaid Road, Khorfakkan Road, and Emirates Road directions.',
                'area_growth_trigger_ar' => 'الموقع يستفيد من الربط بين طريق الذيد وطريق خورفكان واتجاه شارع الإمارات.',
                'is_featured' => false,
                'sort_order' => 60,
            ],
            [
                'title_en' => 'Industrial Warehouse Land in Al Saja’a Al Namuzajiyah',
                'title_ar' => 'أرض صناعية للمستودعات في الصجعة النموذجية',
                'slug' => 'al-sajaa-al-namuzajiyah-industrial-warehouse-land',
                'area_slug' => 'al-sajaa',
                'land_use_slug' => 'industrial',
                'ownership_slug' => 'freehold-all-nationalities',
                'price_range_slug' => '1m-3m',
                'location_en' => 'Al Saja’a industrial corridor with access toward Emirates Road and surrounding industrial movement.',
                'location_ar' => 'محور صناعي في الصجعة مع وصول باتجاه شارع الإمارات وحركة صناعية محيطة.',
                'short_description_en' => 'Industrial land suited for warehouses, factories, and operational users seeking freehold positioning in Al Saja’a.',
                'short_description_ar' => 'أرض صناعية مناسبة للمستودعات والمصانع والمستخدمين التشغيليين الباحثين عن تملك حر في الصجعة.',
                'investment_insight_en' => 'The opportunity matches demand from industrial users who require road access, operational flexibility, and future utility capacity.',
                'investment_insight_ar' => 'الفرصة تناسب طلب المستخدمين الصناعيين الباحثين عن وصول للطرق ومرونة تشغيلية وإمكانية أحمال كهربائية مستقبلية.',
                'area_growth_trigger_en' => 'Al Saja’a continues to benefit from industrial expansion, logistics demand, and connectivity to key Sharjah corridors.',
                'area_growth_trigger_ar' => 'تستفيد الصجعة من التوسع الصناعي والطلب اللوجستي والارتباط بمحاور الشارقة الرئيسية.',
                'is_featured' => true,
                'sort_order' => 70,
            ],
            [
                'title_en' => 'Commercial Industrial Plot in Al Saja’a Al Namuzajiyah',
                'title_ar' => 'أرض تجاري صناعي في الصجعة النموذجية',
                'slug' => 'al-sajaa-al-namuzajiyah-commercial-industrial-plot',
                'area_slug' => 'al-sajaa',
                'land_use_slug' => 'commercial-industrial',
                'ownership_slug' => 'freehold-all-nationalities',
                'price_range_slug' => '3m-5m',
                'location_en' => 'Commercial-industrial positioning in Al Saja’a with access to wide internal roads and Emirates Road direction.',
                'location_ar' => 'موقع تجاري صناعي في الصجعة مع وصول إلى طرق داخلية واسعة واتجاه شارع الإمارات.',
                'short_description_en' => 'Commercial-industrial land opportunity for buyers seeking broader activity flexibility than pure industrial plots.',
                'short_description_ar' => 'فرصة أرض تجاري صناعي للمشترين الباحثين عن مرونة استخدام أكبر من الأرض الصناعية الصرفة.',
                'investment_insight_en' => 'Commercial-industrial zoning supports a wider range of end users, improving potential resale and leasing appeal.',
                'investment_insight_ar' => 'الاستخدام التجاري الصناعي يدعم نطاقاً أوسع من المستخدمين، مما يعزز جاذبية إعادة البيع أو التأجير.',
                'area_growth_trigger_en' => 'Wide-road planning and direct industrial district movement improve visibility and operational access.',
                'area_growth_trigger_ar' => 'تخطيط الطرق الواسعة والحركة المباشرة داخل المنطقة الصناعية يعززان الظهور وسهولة التشغيل.',
                'is_featured' => false,
                'sort_order' => 80,
            ],
            [
                'title_en' => 'Al Saja’a Center Commercial Industrial Land Near Main Access',
                'title_ar' => 'أرض تجارية صناعية في مركز الصجعة قرب المدخل الرئيسي',
                'slug' => 'al-sajaa-center-commercial-industrial-main-access',
                'area_slug' => 'al-sajaa',
                'land_use_slug' => 'commercial-industrial',
                'ownership_slug' => 'freehold-all-nationalities',
                'price_range_slug' => '1m-3m',
                'location_en' => 'Al Saja’a Center, positioned with direct movement toward Emirates Road and nearby utility/commercial surroundings.',
                'location_ar' => 'مركز الصجعة، بموقع يتيح حركة مباشرة باتجاه شارع الإمارات وبالقرب من محيط خدمي وتجاري.',
                'short_description_en' => 'Commercial-industrial land in Al Saja’a Center for buyers seeking visible road-oriented positioning.',
                'short_description_ar' => 'أرض تجارية صناعية في مركز الصجعة للمشترين الباحثين عن موقع واضح مرتبط بالطرق.',
                'investment_insight_en' => 'The land benefits from a clear commercial-industrial identity and better visibility compared with deeper internal industrial plots.',
                'investment_insight_ar' => 'تستفيد الأرض من هوية تجارية صناعية واضحة وظهور أفضل مقارنة بالقطع الصناعية الداخلية.',
                'area_growth_trigger_en' => 'Direct Emirates Road direction, surrounding commercial-industrial planning, and nearby service points strengthen the site profile.',
                'area_growth_trigger_ar' => 'اتجاه شارع الإمارات المباشر والتخطيط التجاري الصناعي المحيط ونقاط الخدمة القريبة تعزز قوة الموقع.',
                'is_featured' => true,
                'sort_order' => 90,
            ],
            [
                'title_en' => 'Al Saja’a Center Warehouse Land with Industrial Positioning',
                'title_ar' => 'أرض مستودعات في مركز الصجعة بموقع صناعي',
                'slug' => 'al-sajaa-center-warehouse-industrial-positioning',
                'area_slug' => 'al-sajaa',
                'land_use_slug' => 'industrial',
                'ownership_slug' => 'freehold-all-nationalities',
                'price_range_slug' => '1m-3m',
                'location_en' => 'Industrial warehouse zone in Al Saja’a Center with wide-road movement and practical access.',
                'location_ar' => 'منطقة مستودعات صناعية في مركز الصجعة مع حركة طرق واسعة ووصول عملي.',
                'short_description_en' => 'Warehouse-focused industrial land opportunity for operational buyers and logistics-oriented investors.',
                'short_description_ar' => 'فرصة أرض صناعية مخصصة للمستودعات للمستخدمين التشغيليين والمستثمرين في الأنشطة اللوجستية.',
                'investment_insight_en' => 'Warehouse land is supported by demand from storage, distribution, light industrial, and trade-related operators.',
                'investment_insight_ar' => 'أراضي المستودعات مدعومة بطلب أنشطة التخزين والتوزيع والصناعات الخفيفة والتجارة.',
                'area_growth_trigger_en' => 'Al Saja’a’s industrial concentration and Emirates Road access continue to support logistics and warehouse demand.',
                'area_growth_trigger_ar' => 'التركز الصناعي في الصجعة والوصول إلى شارع الإمارات يدعمان الطلب على الخدمات اللوجستية والمستودعات.',
                'is_featured' => false,
                'sort_order' => 100,
            ],
        ];

        foreach ($opportunities as $item) {
            LandOpportunity::updateOrCreate(
                ['slug' => $item['slug']],
                [
                    'title_en' => $item['title_en'],
                    'title_ar' => $item['title_ar'],
                    'area_id' => $areas[$item['area_slug']]->id,
                    'land_use_id' => $landUses[$item['land_use_slug']]->id,
                    'ownership_type_id' => $ownershipTypes[$item['ownership_slug']]->id,
                    'price_range_id' => $priceRanges[$item['price_range_slug']]->id,
                    'location_en' => $item['location_en'],
                    'location_ar' => $item['location_ar'],
                    'short_description_en' => $item['short_description_en'],
                    'short_description_ar' => $item['short_description_ar'],
                    'investment_insight_en' => $item['investment_insight_en'],
                    'investment_insight_ar' => $item['investment_insight_ar'],
                    'area_growth_trigger_en' => $item['area_growth_trigger_en'],
                    'area_growth_trigger_ar' => $item['area_growth_trigger_ar'],
                    'is_featured' => $item['is_featured'],
                    'status' => LandOpportunity::STATUS_PUBLISHED,
                    'sort_order' => $item['sort_order'],
                    'published_at' => $publishedAt->copy()->addMinutes($item['sort_order']),
                ]
            );
        }

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