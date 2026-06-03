import { Link, usePage } from '@inertiajs/react';
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, Map, Radar, ShieldCheck } from 'lucide-react';

import FrontLayout from '../Layouts/FrontLayout';
import SectionHeader from '../Components/SectionHeader';
import OpportunityCard from '../Components/LandOpportunity/OpportunityCard';
import { t, useLocale } from '../lib/translations';

export default function Home({ featuredOpportunities = [] }) {
    const { siteSettings = {} } = usePage().props;
    const whatsappUrl = siteSettings.contact_whatsapp_url || 'https://wa.me/971XXXXXXXXX';
    const locale = useLocale();
    const ForwardIcon = locale.direction === 'rtl' ? ArrowLeft : ArrowRight;
    const trustItems = [
        t('public.home.trust_items.sharjah_land_focus'),
        t('public.home.trust_items.curated_opportunities'),
        t('public.home.trust_items.investor_advisory'),
    ];

    return (
        <FrontLayout>
            <main>
                <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,#faf7f1_0%,#f5f1e8_45%,#efe8dc_100%)]">
                    <div className="absolute inset-0 opacity-[0.035]">
    <div
        className="h-full w-full"
        style={{
            backgroundImage:
                'linear-gradient(rgba(0,0,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.4) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
        }}
    />
</div>
                    <div className="container-shell grid gap-8 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:py-24">
                        <div className="space-y-6 sm:space-y-7">
                            <div className="space-y-4 sm:space-y-5">
                                <h1 className="max-w-3xl text-[34px] font-semibold leading-[1.08] tracking-tight text-stone-950 sm:text-5xl lg:text-[54px]">
                                    {t('public.home.hero_title')}
                                </h1>

                                <p className="max-w-2xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
                                    {t('public.home.hero_description')}
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href="/land-opportunities"
                                    className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#0f766e] px-5 py-[13px] text-sm font-semibold text-white transition hover:bg-[#115e59] sm:w-auto"
                                >
                                    {t('public.home.view_featured')}
                                    <ForwardIcon size={18} />
                                </Link>

                                <Link
                                    href="/advisory"
                                    className="inline-flex w-full items-center justify-center rounded-xl border border-amber-700/25 bg-white/70 px-5 py-[13px] text-sm font-semibold text-stone-900 transition hover:border-amber-700/40 hover:bg-white sm:w-auto"
                                >
                                    {t('public.home.explore_advisory')}
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 rounded-[2rem] bg-amber-700/10 blur-2xl" />
                            <div className="relative overflow-hidden rounded-[2rem] border border-amber-700/20 bg-[#f5efe2] p-2 shadow-xl shadow-stone-900/10">
                                <img
                                    src="/assets/images/hero-land.jpg"
                                    alt={t('public.home.hero_image_alt')}
                                    className="h-[250px] w-full rounded-[1.5rem] object-cover sm:h-[360px] lg:h-[410px]"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative z-10 -mt-10">
    <div className="container-shell">
        <div className="grid gap-5 rounded-3xl border border-amber-700/10 bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.06)] sm:grid-cols-[auto_1fr] sm:items-center sm:p-6">
           <div className="flex flex-col items-center justify-center text-center sm:w-[250px] sm:items-start sm:text-left">
    <img
        src="/assets/images/30-albarahah-no-tail.png"
        alt="30 years of Al Barakah Real Estate"
        className="h-14 w-auto object-contain opacity-90 sm:h-16"
    />

    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-800">
        {t('public.home.trusted_experience')}
    </p>

    <p className="mt-1 text-xs text-stone-500">
        {t('public.home.trusted_experience_subtitle')}
    </p>
</div>

            <div className="grid gap-3 sm:grid-cols-3">
                {trustItems.map((item) => (
                    <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-stone-100 bg-stone-50/60 px-4 py-3"
                    >
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-amber-700">
                            <CheckCircle2 size={15} />
                        </div>

                        <span className="text-sm font-medium text-stone-800">
                            {item}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    </div>
</section>

                <section className="container-shell py-12 sm:py-14">
                    <SectionHeader
                        eyebrow={t('public.home.shortlisted_eyebrow')}
                        title={t('public.home.shortlisted_title')}
                        description={t('public.home.shortlisted_description')}
                    />

                    <div className="mt-6 grid gap-6 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
                        {featuredOpportunities.map((opportunity) => (
                            <OpportunityCard key={opportunity.slug} opportunity={opportunity} />
                        ))}
                    </div>

                    <div className="mt-10 flex justify-center sm:mt-12">
                        <Link
                            href="/land-opportunities"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-amber-700/20 bg-white px-7 py-3 text-sm font-semibold text-stone-900 transition hover:border-amber-700/40 hover:bg-amber-50 sm:w-auto"
                        >
                            {t('public.home.explore_all')}
                            <ForwardIcon size={16} />
                        </Link>
                    </div>
                </section>

                <section className="container-shell pb-12 sm:pb-14">
                    <div className="grid gap-8 rounded-[2rem] border border-amber-700/10 bg-white p-6 sm:gap-10 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-14">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                                {t('public.home.advisory_eyebrow')}
                            </p>

                            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-stone-950 sm:text-4xl">
                                {t('public.home.advisory_title')}
                            </h2>

                            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 sm:mt-6 sm:leading-8">
                                {t('public.home.advisory_description')}
                            </p>

                            <div className="mt-7 sm:mt-8">
                                <Link
                                    href="/advisory"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-amber-700/20 bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:border-amber-700/40 hover:bg-amber-50 sm:w-auto"
                                >
                                    {t('public.home.explore_advisory')}
                                    <ForwardIcon size={16} />
                                </Link>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="border-b border-amber-700/10 pb-5">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck size={16} className="text-amber-700" />

                                    <p className="text-sm font-semibold text-stone-950">
                                        {t('public.home.advisory_items.review_title')}
                                    </p>
                                </div>

                                <p className="mt-2 text-sm leading-7 text-stone-600">
                                    {t('public.home.advisory_items.review_description')}
                                </p>
                            </div>

                            <div className="border-b border-amber-700/10 pb-5">
                                <div className="flex items-center gap-2">
                                    <Radar size={16} className="text-amber-700" />

                                    <p className="text-sm font-semibold text-stone-950">
                                        {t('public.home.advisory_items.growth_title')}
                                    </p>
                                </div>

                                <p className="mt-2 text-sm leading-7 text-stone-600">
                                    {t('public.home.advisory_items.growth_description')}
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2">
                                    <Map size={16} className="text-amber-700" />

                                    <p className="text-sm font-semibold text-stone-950">
                                        {t('public.home.advisory_items.ownership_title')}
                                    </p>
                                </div>

                                <p className="mt-2 text-sm leading-7 text-stone-600">
                                    {t('public.home.advisory_items.ownership_description')}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container-shell py-10 sm:py-12">
    <div className="overflow-hidden rounded-[2rem] border border-amber-500/10 bg-[#1f1d1a]">
        <div className="grid gap-8 p-6 sm:gap-10 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-14">
            <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                    {t('public.home.selling_eyebrow')}
                </p>

                <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                    {t('public.home.selling_title')}
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-stone-400 sm:mt-6 sm:leading-8">
                    {t('public.home.selling_description')}
                </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-100 sm:w-auto"
                >
                    {t('public.home.discuss_land')}
                </Link>

                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-amber-400/20 bg-amber-500 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-amber-400 sm:w-auto"
                >
                    <MessageCircle size={18} />
                    {t('public.nav.whatsapp_consultation')}
                </a>
            </div>
        </div>
    </div>
</section>
            </main>
        </FrontLayout>
    );
}
