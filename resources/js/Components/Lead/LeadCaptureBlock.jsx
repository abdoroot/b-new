import PrimaryButton from '../PrimaryButton';

export default function LeadCaptureBlock() {
    return (
        <section className="card-shell p-6 sm:p-8">
            <p className="label-muted">Request curated opportunities</p>
            <h3 className="mt-2 text-xl font-semibold text-stone-900">Share your land brief</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <input className="rounded-xl border border-stone-300 px-4 py-3 text-sm" placeholder="Area" />
                <input className="rounded-xl border border-stone-300 px-4 py-3 text-sm" placeholder="Budget" />
                <input className="rounded-xl border border-stone-300 px-4 py-3 text-sm" placeholder="Land type" />
            </div>
            <PrimaryButton className="mt-4 w-full sm:w-auto">Request curated matches</PrimaryButton>
        </section>
    );
}
