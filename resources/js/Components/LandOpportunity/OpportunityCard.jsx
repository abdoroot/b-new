import { Link } from '@inertiajs/react';
import { ArrowUpRight, MapPin } from 'lucide-react';

export default function OpportunityCard({ opportunity }) {
    return (
        <article className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-700/25 hover:shadow-xl hover:shadow-stone-900/10">
            <div className="p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-amber-700">
                    <MapPin size={14} />
                    {opportunity.area_name || 'Sharjah'}
                </div>

                <h3 className="mt-3 text-lg font-semibold leading-snug text-stone-950">
                    {opportunity.title || 'Land Opportunity'}
                </h3>

                <p className="mt-4 text-sm leading-6 text-stone-600">
                    {opportunity.land_use_name || 'Land'}
                </p>

                <div className="mt-5 rounded-2xl border border-stone-100 bg-stone-50 px-4 py-3">
                    <div className="flex items-center justify-between gap-3">
                        <p className="text-[11px] font-medium tracking-[0.08em] text-stone-500">
                            Asking range
                        </p>

                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold" style={{ color: opportunity.ownership_color || '#B38E44' }}>
                            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: opportunity.ownership_color || '#B38E44' }} />
                            {opportunity.ownership_label || 'Ownership Eligibility'}
                        </span>
                    </div>

                    <p className="mt-2 text-base font-semibold text-stone-950">
                        {opportunity.price_range_label || 'Contact for details'}
                    </p>
                </div>

                <div className="mt-5 flex items-center justify-between gap-4">
                    <p className="text-sm font-medium text-stone-500">
                        Investment overview available
                    </p>

                    <Link
                        href={`/land-opportunities/${opportunity.slug}`}
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-900 text-amber-100 transition hover:bg-amber-700"
                        aria-label={`View details for ${opportunity.title}`}
                    >
                        <ArrowUpRight size={17} />
                    </Link>
                </div>
            </div>
        </article>
    );
}