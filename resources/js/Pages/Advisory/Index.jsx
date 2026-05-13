import { ArrowRight, BriefcaseBusiness, Building2, Map } from 'lucide-react';
import { Link } from '@inertiajs/react';

import FrontLayout from '../../Layouts/FrontLayout';

const process = [
    'Understand your target area, pricing range, and acquisition purpose.',
    'Review and shortlist land opportunities with ownership and positioning clarity.',
    'Coordinate advisory discussion before viewing, negotiation, and next steps.',
];

const clients = [
    {
        icon: BriefcaseBusiness,
        title: 'Private investors',
        description:
            'Investors seeking strategic land positioning and long-term value exposure.',
    },
    {
        icon: Building2,
        title: 'Business buyers',
        description:
            'Commercial and industrial buyers evaluating future operational positioning.',
    },
    {
        icon: Map,
        title: 'Land-focused allocations',
        description:
            'Buyers prioritizing selective Sharjah land opportunities over broad listings.',
    },
];

export default function AdvisoryIndex() {
    return (
        <FrontLayout>
            <main className="bg-stone-50">
                <section className="bg-[#f5f1e8]">
                    <div className="container-shell py-12 sm:py-16">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                            Land Advisory
                        </p>

                        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-stone-950 sm:text-5xl">
                            We do not list land. We identify opportunities.
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600">
                            Our approach focuses on curated Sharjah land opportunities supported by ownership clarity, pricing context, infrastructure direction, and long-term positioning.
                        </p>
                    </div>
                </section>

                <section className="container-shell py-12 sm:py-16">
                    <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                                Advisory process
                            </p>

                            <div className="mt-8 space-y-6">
                                {process.map((item, index) => (
                                    <div
                                        key={item}
                                        className="flex gap-5 border-b border-stone-200 pb-6 last:border-0"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-sm font-semibold text-amber-700">
                                            0{index + 1}
                                        </div>

                                        <p className="pt-1 text-base leading-8 text-stone-700">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                                Who we serve
                            </p>

                            <div className="mt-8 space-y-6">
                                {clients.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.title}
                                            className="flex gap-4 border-b border-stone-100 pb-6 last:border-0"
                                        >
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-700">
                                                <Icon size={18} />
                                            </div>

                                            <div>
                                                <p className="text-sm font-semibold text-stone-950">
                                                    {item.title}
                                                </p>

                                                <p className="mt-2 text-sm leading-7 text-stone-600">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-8">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-xl bg-neutral-950 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:bg-neutral-800"
                                >
                                    Request advisory discussion
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container-shell pb-12 sm:pb-16">
                    <div className="rounded-[2rem] border border-amber-700/10 bg-white p-8 shadow-sm sm:p-10">
                        <div className="max-w-3xl">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                                Why Sharjah land
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold leading-tight text-stone-950">
                                Sharjah continues to attract long-term land positioning interest.
                            </h2>

                            <p className="mt-6 text-base leading-8 text-stone-600">
                                Infrastructure expansion, industrial growth corridors, and relative pricing positioning continue to drive investor attention toward selected land areas across Sharjah.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </FrontLayout>
    );
}