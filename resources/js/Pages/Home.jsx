import { Link } from '@inertiajs/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

import FrontLayout from '../Layouts/FrontLayout';
import PrimaryButton from '../Components/PrimaryButton';
import SectionHeader from '../Components/SectionHeader';
import OpportunityCard from '../Components/LandOpportunity/OpportunityCard';
import LeadCaptureBlock from '../Components/Lead/LeadCaptureBlock';
import { opportunityList } from '../data/mockData';

const trustItems = [
    'Sharjah land focus',
    'Curated opportunities',
    'Investor advisory',
];

const processSteps = [
    'Market movement tracking across Sharjah land clusters',
    'Comparable transaction screening and pricing gap checks',
    'Selective curation of land opportunities with clear upside triggers',
];

const reasons = [
    'Land-only focus with advisory-led selection',
    'Curated opportunities before mainstream demand catches up',
    'Clear investment context, not listing noise',
];

export default function Home() {
    return (
        <FrontLayout>
            <main className="">
                <section className="relative overflow-hidden bg-[#f5f1e8]">
                    <div className="container-shell grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
                        <div className="space-y-7">
                            <div className="space-y-5">
                                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-stone-950 sm:text-5xl lg:text-[54px]">
                                    We identify undervalued land opportunities in Sharjah before the market moves.
                                </h1>

                                <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                                    Curated Sharjah land opportunities for serious buyers, investors, and developers.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row">
                                <PrimaryButton className="inline-flex items-center justify-center gap-2 bg-neutral-950 text-amber-100 hover:bg-neutral-800">
                                    View Featured Opportunities
                                    <ArrowRight size={18} />
                                </PrimaryButton>

                                <Link
                                    href="/advisory"
                                    className="inline-flex items-center justify-center rounded-xl border border-amber-700/25 bg-white/70 px-5 py-3 text-sm font-semibold text-stone-900 transition hover:border-amber-700/40 hover:bg-white"
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
                                    className="h-[340px] w-full rounded-[1.5rem] object-cover sm:h-[410px]"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative -mt-6 z-10">
                    <div className="container-shell">
                        <div className="grid gap-2 rounded-3xl border border-amber-700/10 bg-white p-4 shadow-[0_10px_40px_rgba(0,0,0,0.06)] sm:grid-cols-3 sm:p-5">
                            {trustItems.map((item, index) => (
                                <div
                                    key={item}
                                    className={`flex items-center gap-3 px-4 py-3 ${index !== trustItems.length - 1
                                        ? 'sm:border-r sm:border-stone-100'
                                        : ''
                                        }`}
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
                </section>

                <section className="container-shell py-16 sm:py-20">
                    <SectionHeader
                        eyebrow="Curated Sharjah land opportunities"
                        title="Current shortlisted land opportunities"
                        description="Selected opportunities framed around location, pricing, and investment context."
                    />

                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {opportunityList.slice(0, 6).map((opportunity) => (
                            <OpportunityCard key={opportunity.slug} opportunity={opportunity} />
                        ))}
                    </div>

                    <div className="mt-12 flex justify-center">
                        <Link
                            href="/land-opportunities"
                            className="inline-flex items-center gap-2 rounded-lg border border-amber-700/20 bg-white px-7 py-3 text-sm font-semibold text-stone-900 transition hover:border-amber-700/40 hover:bg-amber-50"
                        >
                            Explore All Land Opportunities
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </section>

                <section className="container-shell pb-16 sm:pb-20">
                    <div className="grid gap-10 rounded-[2rem] border border-amber-700/10 bg-white p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-14">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                                Land Advisory
                            </p>

                            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-stone-950 sm:text-4xl">
                                We do not list everything.
                            </h2>

                            <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600">
                                Our approach focuses on identifying land opportunities supported by pricing context, area movement, infrastructure direction, and long-term positioning.
                            </p>

                            <div className="mt-8">
                                <Link
                                    href="/advisory"
                                    className="inline-flex items-center gap-2 rounded-lg border border-amber-700/20 bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:border-amber-700/40 hover:bg-amber-50"
                                >
                                    Explore Land Advisory
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="border-b border-amber-700/10 pb-5">
                                <p className="text-sm font-semibold text-stone-950">
                                    Selective opportunity review
                                </p>

                                <p className="mt-2 text-sm leading-7 text-stone-600">
                                    Opportunities are filtered based on positioning, surrounding movement, and pricing context.
                                </p>
                            </div>

                            <div className="border-b border-amber-700/10 pb-5">
                                <p className="text-sm font-semibold text-stone-950">
                                    Area growth monitoring
                                </p>

                                <p className="mt-2 text-sm leading-7 text-stone-600">
                                    We monitor expansion zones, infrastructure signals, and strategic district activity across Sharjah.
                                </p>
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-stone-950">
                                    Ownership and positioning clarity
                                </p>

                                <p className="mt-2 text-sm leading-7 text-stone-600">
                                    Land opportunities are presented with clear ownership eligibility and investment positioning.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container-shell py-16 sm:py-20">
                    <div className="overflow-hidden rounded-[2rem] border border-amber-500/10 bg-[#1f1d1a]">
                        <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-14">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                                    Curated Access
                                </p>

                                <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                                    Get access to curated Sharjah land opportunities.
                                </h2>

                                <p className="mt-6 max-w-2xl text-base leading-8 text-stone-400">
                                    Speak with our advisory team to explore current land opportunities, ownership eligibility, and strategic positioning across Sharjah.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-100"
                                >
                                    Request Opportunities
                                </Link>

                                <PrimaryButton className="inline-flex items-center justify-center gap-2 border border-amber-400/20 bg-amber-500 text-neutral-950 hover:bg-amber-400">
                                    <MessageCircle size={18} />
                                    WhatsApp Consultation
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </FrontLayout>
    );
}
