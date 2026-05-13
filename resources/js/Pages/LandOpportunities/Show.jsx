import { Link } from '@inertiajs/react';
import { ArrowRight, MapPin, ShieldCheck } from 'lucide-react';
import FrontLayout from '../../Layouts/FrontLayout';
import LeadCaptureBlock from '../../Components/Lead/LeadCaptureBlock';
import WhatsAppCTA from '../../Components/Lead/WhatsAppCTA';
import { opportunityList } from '../../data/mockData';

const ownershipLabels = {
    allNationalities: {
        label: 'Freehold • All Nationalities',
        classes: 'text-[#0F8A5F]',
        dot: 'bg-[#0F8A5F]',
    },
    gccNationals: {
        label: 'UAE & GCC Nationals',
        classes: 'text-[#8A6A2F]',
        dot: 'bg-[#B38E44]',
    },
    restricted: {
        label: 'Restricted Ownership',
        classes: 'text-slate-600',
        dot: 'bg-slate-500',
    },
};

export default function LandOpportunitiesShow({ slug }) {
    const opportunity = opportunityList.find((item) => item.slug === slug) ?? opportunityList[0];
    const ownership = ownershipLabels[opportunity.ownershipType || 'allNationalities'];

    return (
        <FrontLayout>
            <main className="bg-stone-50">
                <section className="bg-[#f5f1e8]">
                    <div className="container-shell py-12 sm:py-16">
                        <Link
                            href="/land-opportunities"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-800 hover:text-amber-900"
                        >
                            <ArrowRight size={16} className="rotate-180" />
                            Back to opportunities
                        </Link>

                        <div className="mt-8 max-w-4xl">
                            <div className="flex flex-wrap items-center gap-4">
                                <span className="inline-flex items-center gap-2 text-sm font-semibold text-amber-800">
                                    <MapPin size={16} />
                                    {opportunity.area}
                                </span>
                            </div>

                            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-stone-950 sm:text-5xl">
                                {opportunity.title}
                            </h1>

                            <div className="mt-5">
                                <span
                                    className={`inline-flex items-center gap-2 rounded-full border border-current/10 bg-white/70 px-4 py-2 text-sm font-semibold ${ownership.classes}`}
                                >
                                    <span className={`h-2 w-2 rounded-full ${ownership.dot}`} />
                                    {ownership.label}
                                </span>
                            </div>

                            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600">
                                Curated land opportunity prepared for early assessment, ownership eligibility, and investment positioning.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="container-shell -mt-6">
                    <div className="grid overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm lg:grid-cols-3">
                        <div className="border-b border-stone-100 p-6 lg:border-b-0 lg:border-r">
                            <p className="text-[11px] font-medium tracking-[0.08em] text-stone-500">
                                Location
                            </p>
                            <p className="mt-2 text-sm font-semibold text-stone-950">
                                {opportunity.location}
                            </p>
                        </div>

                        <div className="border-b border-stone-100 p-6 lg:border-b-0 lg:border-r">
                            <p className="text-[11px] font-medium tracking-[0.08em] text-stone-500">
                                Asking price
                            </p>
                            <p className="mt-2 text-sm font-semibold text-stone-950">
                                {opportunity.askingPrice}
                            </p>
                        </div>

                        <div className="p-6">
                            <p className="text-[11px] font-medium tracking-[0.08em] text-stone-500">
                                Land use
                            </p>
                            <p className="mt-2 text-sm font-semibold text-stone-950">
                                {opportunity.landType}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="container-shell py-12 sm:py-16">
                    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                        <div className="space-y-8">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                                    Investment insight
                                </p>
                                <p className="mt-4 text-lg leading-9 text-stone-700">
                                    {opportunity.investmentInsight}
                                </p>
                            </div>

                            <div className="border-t border-stone-200 pt-8">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                                    Area growth trigger
                                </p>
                                <p className="mt-4 text-lg leading-9 text-stone-700">
                                    {opportunity.areaGrowthTrigger}
                                </p>
                            </div>
                        </div>

                        <div className="rounded-[2rem] border border-amber-700/10 bg-white p-6 shadow-sm sm:p-8">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                                Interested in this opportunity?
                            </p>

                            <h2 className="mt-4 text-2xl font-semibold leading-tight text-stone-950">
                                Request the full details from our advisory team.
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-stone-600">
                                Share your budget and purpose, and we will help you assess this land opportunity or suggest suitable alternatives.
                            </p>

                            <div className="mt-7">
                                <Link
                                    href="/contact"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-950 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:bg-neutral-800"
                                >
                                    Request details
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </FrontLayout>
    );
}