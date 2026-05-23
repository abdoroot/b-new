import { Link, usePage } from '@inertiajs/react';
import { ArrowRight, CheckCircle2, MessageCircle, Map, Radar, ShieldCheck } from 'lucide-react';

import FrontLayout from '../Layouts/FrontLayout';
import SectionHeader from '../Components/SectionHeader';
import OpportunityCard from '../Components/LandOpportunity/OpportunityCard';

const trustItems = [
    'Sharjah land focus',
    'Curated opportunities',
    'Investor advisory',
];

export default function Home({ featuredOpportunities = [] }) {
    const { siteSettings = {} } = usePage().props;
    const whatsappUrl = siteSettings.contact_whatsapp_url || 'https://wa.me/971XXXXXXXXX';

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
                                    We identify undervalued land opportunities in Sharjah before the market moves.
                                </h1>

                                <p className="max-w-2xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
                                    Curated Sharjah land opportunities for serious buyers, investors, and developers.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href="/land-opportunities"
                                    className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#0f766e] px-5 py-[13px] text-sm font-semibold text-white transition hover:bg-[#115e59] sm:w-auto"
                                >
                                    View Featured Opportunities
                                    <ArrowRight size={18} />
                                </Link>

                                <Link
                                    href="/advisory"
                                    className="inline-flex w-full items-center justify-center rounded-xl border border-amber-700/25 bg-white/70 px-5 py-[13px] text-sm font-semibold text-stone-900 transition hover:border-amber-700/40 hover:bg-white sm:w-auto"
                                >
                                    Explore Land Advisory
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 rounded-[2rem] bg-amber-700/10 blur-2xl" />
                            <div className="relative overflow-hidden rounded-[2rem] border border-amber-700/20 bg-[#f5efe2] p-2 shadow-xl shadow-stone-900/10">
                                <img
                                    src="/assets/images/hero-land.jpg"
                                    alt="Sharjah land opportunities"
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
        Trusted Sharjah Real Estate Experience
    </p>

    <p className="mt-1 text-xs text-stone-500">
        بدأنا بوضع الأساس العقاري منذ أكثر من 30 عاماً
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
                        eyebrow="Curated Sharjah land opportunities"
                        title="Current shortlisted land opportunities"
                        description="Selected opportunities framed around location, pricing, and investment context."
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
                            Explore All Land Opportunities
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </section>

                <section className="container-shell pb-12 sm:pb-14">
                    <div className="grid gap-8 rounded-[2rem] border border-amber-700/10 bg-white p-6 sm:gap-10 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-14">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                                Land Advisory
                            </p>

                            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-stone-950 sm:text-4xl">
                                We do not list everything.
                            </h2>

                            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 sm:mt-6 sm:leading-8">
                                Our approach focuses on identifying land opportunities supported by pricing context, area movement, infrastructure direction, and long-term positioning.
                            </p>

                            <div className="mt-7 sm:mt-8">
                                <Link
                                    href="/advisory"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-amber-700/20 bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:border-amber-700/40 hover:bg-amber-50 sm:w-auto"
                                >
                                    Explore Land Advisory
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="border-b border-amber-700/10 pb-5">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck size={16} className="text-amber-700" />

                                    <p className="text-sm font-semibold text-stone-950">
                                        Selective opportunity review
                                    </p>
                                </div>

                                <p className="mt-2 text-sm leading-7 text-stone-600">
                                    Opportunities are filtered based on positioning, surrounding movement, and pricing context.
                                </p>
                            </div>

                            <div className="border-b border-amber-700/10 pb-5">
                                <div className="flex items-center gap-2">
                                    <Radar size={16} className="text-amber-700" />

                                    <p className="text-sm font-semibold text-stone-950">
                                        Area growth monitoring
                                    </p>
                                </div>

                                <p className="mt-2 text-sm leading-7 text-stone-600">
                                    We monitor expansion zones, infrastructure signals, and strategic district activity across Sharjah.
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2">
                                    <Map size={16} className="text-amber-700" />

                                    <p className="text-sm font-semibold text-stone-950">
                                        Ownership and positioning clarity
                                    </p>
                                </div>

                                <p className="mt-2 text-sm leading-7 text-stone-600">
                                    Land opportunities are presented with clear ownership eligibility and investment positioning.
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
                    Land Selling Support
                </p>

                <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                    Own land in Sharjah and looking for the right buyer?
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-stone-400 sm:mt-6 sm:leading-8">
                    We help landowners position and present selected land opportunities to serious buyers, investors, and advisory-driven inquiries across Sharjah.
                </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-100 sm:w-auto"
                >
                    Discuss Your Land
                </Link>

                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-amber-400/20 bg-amber-500 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-amber-400 sm:w-auto"
                >
                    <MessageCircle size={18} />
                    WhatsApp Consultation
                </a>
            </div>
        </div>
    </div>
</section>
            </main>
        </FrontLayout>
    );
}