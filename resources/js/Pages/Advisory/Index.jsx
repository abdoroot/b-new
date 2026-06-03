import { ArrowRight, BriefcaseBusiness, Building2, Map } from 'lucide-react';
import { Link } from '@inertiajs/react';

import FrontLayout from '../../Layouts/FrontLayout';
import { t } from '../../lib/translations';

export default function AdvisoryIndex() {
    const process = [
        t('public.advisory.process.understand'),
        t('public.advisory.process.review'),
        t('public.advisory.process.coordinate'),
    ];
    const clients = [
        {
            icon: BriefcaseBusiness,
            title: t('public.advisory.clients.private_investors_title'),
            description: t('public.advisory.clients.private_investors_description'),
        },
        {
            icon: Building2,
            title: t('public.advisory.clients.business_buyers_title'),
            description: t('public.advisory.clients.business_buyers_description'),
        },
        {
            icon: Map,
            title: t('public.advisory.clients.land_allocations_title'),
            description: t('public.advisory.clients.land_allocations_description'),
        },
    ];

    return (
        <FrontLayout>
            <main className="bg-stone-50">
                <section className="bg-[#f5f1e8]">
                    <div className="container-shell py-12 sm:py-16">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                            {t('public.advisory.eyebrow')}
                        </p>

                        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-stone-950 sm:text-5xl">
                            {t('public.advisory.title')}
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600">
                            {t('public.advisory.description')}
                        </p>
                    </div>
                </section>

                <section className="container-shell py-12 sm:py-16">
                    <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                                {t('public.advisory.process_eyebrow')}
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
                                {t('public.advisory.serve_eyebrow')}
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
                                    {t('public.advisory.request_discussion')}
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
                                {t('public.advisory.why_eyebrow')}
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold leading-tight text-stone-950">
                                {t('public.advisory.why_title')}
                            </h2>

                            <p className="mt-6 text-base leading-8 text-stone-600">
                                {t('public.advisory.why_description')}
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </FrontLayout>
    );
}
