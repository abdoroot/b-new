import FrontLayout from '../Layouts/FrontLayout';
import PrimaryButton from '../Components/PrimaryButton';
import SectionHeader from '../Components/SectionHeader';
import OpportunityCard from '../Components/LandOpportunity/OpportunityCard';
import LeadCaptureBlock from '../Components/Lead/LeadCaptureBlock';
import { opportunityList } from '../data/mockData';

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
            <section className="section-shell">
                <div className="container-shell space-y-16">
                    <section className="space-y-6">
                        <p className="label-muted">Sharjah land advisory</p>
                        <h1 className="title-premium max-w-4xl">We identify undervalued land opportunities in Sharjah before the market moves.</h1>
                        <p className="copy-muted max-w-2xl">A curated, investment-focused platform for investors seeking strategic land positioning.</p>
                        <PrimaryButton>Request land opportunities</PrimaryButton>
                    </section>

                    <section className="rounded-2xl border border-stone-200 bg-white p-5 text-sm text-stone-700 sm:p-6">
                        This is not a generic real estate portal. We focus only on curated land opportunities in Sharjah.
                    </section>

                    <section className="space-y-6">
                        <SectionHeader
                            eyebrow="How we identify opportunities"
                            title="A disciplined land-first selection framework"
                            description="We screen for timing, pricing gaps, and area-level growth triggers before presenting opportunities."
                        />
                        <div className="grid gap-4 sm:grid-cols-3">
                            {processSteps.map((step) => (
                                <div key={step} className="card-shell p-5 text-sm text-stone-700">{step}</div>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-6">
                        <SectionHeader eyebrow="Curated Sharjah land opportunities" title="Current shortlisted land opportunities" />
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {opportunityList.map((opportunity) => <OpportunityCard key={opportunity.slug} opportunity={opportunity} />)}
                        </div>
                    </section>

                    <section className="space-y-6">
                        <SectionHeader eyebrow="Why clients choose us" title="Focused advisory for land investors" />
                        <div className="grid gap-4 sm:grid-cols-3">
                            {reasons.map((reason) => (
                                <div key={reason} className="card-shell p-5 text-sm text-stone-700">{reason}</div>
                            ))}
                        </div>
                    </section>

                    <LeadCaptureBlock />
                </div>
            </section>
        </FrontLayout>
    );
}
