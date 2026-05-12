import { Link } from '@inertiajs/react';
import SecondaryButton from '../SecondaryButton';

export default function OpportunityCard({ opportunity }) {
    return (
        <article className="card-shell p-6">
            <p className="label-muted">{opportunity.area}</p>
            <h3 className="mt-2 text-lg font-semibold text-stone-900">{opportunity.title}</h3>
            <p className="mt-3 text-sm text-stone-600">{opportunity.landType}</p>
            <p className="mt-1 text-sm font-medium text-stone-900">{opportunity.budget}</p>
            <div className="mt-4 flex items-center justify-between gap-2">
                <span className="text-sm text-teal-700">Discount {opportunity.discount}</span>
                <Link href={`/land-opportunities/${opportunity.slug}`}>
                    <SecondaryButton className="px-4 py-2 text-xs">View details</SecondaryButton>
                </Link>
            </div>
        </article>
    );
}
