import FrontLayout from '../../Layouts/FrontLayout';
import SectionHeader from '../../Components/SectionHeader';
import OpportunityCard from '../../Components/LandOpportunity/OpportunityCard';
import PrimaryButton from '../../Components/PrimaryButton';
import { opportunityList } from '../../data/mockData';

export default function LandOpportunitiesIndex() {
    return (
        <FrontLayout>
            <section className="section-shell">
                <div className="container-shell space-y-8">
                    <SectionHeader
                        eyebrow="Land opportunities"
                        title="Curated Sharjah land opportunities"
                        description="Investment-focused shortlists filtered by area, budget, and land type."
                    />

                    <div className="card-shell grid gap-3 p-4 sm:grid-cols-3 sm:p-5">
                        <input className="rounded-xl border border-stone-300 px-4 py-3 text-sm" placeholder="Area" />
                        <input className="rounded-xl border border-stone-300 px-4 py-3 text-sm" placeholder="Budget" />
                        <input className="rounded-xl border border-stone-300 px-4 py-3 text-sm" placeholder="Land type" />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {opportunityList.map((opportunity) => <OpportunityCard key={opportunity.slug} opportunity={opportunity} />)}
                    </div>

                    <div className="card-shell p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
                        <p className="text-sm text-stone-700">Need details on matching land opportunities? Share your brief and our advisory team will respond.</p>
                        <PrimaryButton className="mt-4 sm:mt-0">Request details</PrimaryButton>
                    </div>
                </div>
            </section>
        </FrontLayout>
    );
}
