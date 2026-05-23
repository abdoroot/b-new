import { router, Link } from '@inertiajs/react';
import FrontLayout from '../../Layouts/FrontLayout';
import OpportunityCard from '../../Components/LandOpportunity/OpportunityCard';

const filterClass =
    'w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700 outline-none transition focus:border-amber-700/40 focus:ring-2 focus:ring-amber-700/10';

export default function LandOpportunitiesIndex({ opportunities = [], filterOptions = {}, filters = {} }) {
    const {
        areas = [],
        price_ranges = [],
        ownership_types = [],
        land_uses = []
    } = filterOptions;

    const handleFilterChange = (key, value) => {
        const newFilters = { ...filters, [key]: value };

        // Remove empty filters
        Object.keys(newFilters).forEach(k => {
            if (!newFilters[k]) delete newFilters[k];
        });

        router.get('/land-opportunities', newFilters, {
            preserveScroll: true,
            preserveState: true,
        });
    };

    const clearFilters = () => {
        router.get('/land-opportunities', {}, {
            preserveScroll: true,
            preserveState: true,
        });
    };

    const hasActiveFilters = Object.values(filters).some(value => !!value);

    return (
        <FrontLayout>
            <main className="bg-stone-50">
                <section className="bg-[#f5f1e8]">
                    <div className="container-shell py-12 sm:py-16">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                            Land Opportunities
                        </p>

                        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-stone-950 sm:text-5xl">
                            Curated Sharjah land opportunities.
                        </h1>

                        <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600">
                            Investment-focused shortlists filtered by area, price range, ownership eligibility, and land use.
                        </p>

                        <div className="mt-8 rounded-3xl border border-stone-200 bg-white p-4 shadow-sm sm:p-5">
                            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                                <select 
                                    className={filterClass} 
                                    value={filters.area || ''}
                                    onChange={(e) => handleFilterChange('area', e.target.value)}
                                >
                                    <option value="">All areas</option>
                                    {areas.map(area => (
                                        <option key={area.id} value={area.slug}>{area.name_en}</option>
                                    ))}
                                </select>

                                <select 
                                    className={filterClass} 
                                    value={filters.land_use || ''}
                                    onChange={(e) => handleFilterChange('land_use', e.target.value)}
                                >
                                    <option value="">All land uses</option>
                                    {land_uses.map(use => (
                                        <option key={use.id} value={use.slug}>{use.name_en}</option>
                                    ))}
                                </select>

                                <select 
                                    className={filterClass} 
                                    value={filters.price_range || ''}
                                    onChange={(e) => handleFilterChange('price_range', e.target.value)}
                                >
                                    <option value="">All price ranges</option>
                                    {price_ranges.map(range => (
                                        <option key={range.id} value={range.slug}>{range.label_en}</option>
                                    ))}
                                </select>

                                <select 
                                    className={filterClass} 
                                    value={filters.ownership_type || ''}
                                    onChange={(e) => handleFilterChange('ownership_type', e.target.value)}
                                >
                                    <option value="">All ownership types</option>
                                    {ownership_types.map(type => (
                                        <option key={type.id} value={type.slug}>{type.name_en}</option>
                                    ))}
                                </select>
                            </div>

                            {hasActiveFilters && (
                                <div className="mt-4 flex justify-end">
                                    <button 
                                        onClick={clearFilters}
                                        className="text-sm font-medium text-amber-700 hover:text-amber-800"
                                    >
                                        Clear filters
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                <section className="container-shell py-12 sm:py-16">
                    <div className="space-y-8">
                        {opportunities.length > 0 ? (
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {opportunities.map((opportunity) => (
                                    <OpportunityCard
                                        key={opportunity.slug}
                                        opportunity={opportunity}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="rounded-3xl border border-stone-200 bg-white py-20 text-center">
                                <p className="text-stone-500">No opportunities match your selected filters.</p>
                                <button 
                                    onClick={clearFilters}
                                    className="mt-4 text-sm font-semibold text-amber-700 hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}

                        <div className="rounded-3xl border border-amber-700/10 bg-white p-6 shadow-sm sm:flex sm:items-center sm:justify-between sm:gap-6">
                            <p className="text-sm leading-7 text-stone-700">
                                Need details on matching land opportunities? Share your brief and our advisory team will respond.
                            </p>

                            <div className="mt-4 sm:mt-0">
                                <Link 
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-xl bg-neutral-950 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:bg-neutral-800"
                                >
                                    Request details
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </FrontLayout>
    );
}
