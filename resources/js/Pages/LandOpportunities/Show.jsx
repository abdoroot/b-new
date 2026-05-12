import FrontLayout from '../../Layouts/FrontLayout';
import SectionHeader from '../../Components/SectionHeader';
import LeadCaptureBlock from '../../Components/Lead/LeadCaptureBlock';
import WhatsAppCTA from '../../Components/Lead/WhatsAppCTA';
import { opportunityList } from '../../data/mockData';

export default function LandOpportunitiesShow({ slug }) {
    const opportunity = opportunityList.find((item) => item.slug === slug) ?? opportunityList[0];

    return (
        <FrontLayout>
            <section className="section-shell">
                <div className="container-shell space-y-8">
                    <SectionHeader eyebrow="Land opportunity" title={opportunity.title} description="Curated investment summary for early assessment." />

                    <div className="card-shell grid gap-5 p-6 text-sm sm:grid-cols-2 lg:grid-cols-3">
                        <div><p className="label-muted">Location</p><p className="mt-1 font-medium text-stone-900">{opportunity.location}</p></div>
                        <div><p className="label-muted">Asking price</p><p className="mt-1 font-medium text-stone-900">{opportunity.askingPrice}</p></div>
                        <div><p className="label-muted">Market price</p><p className="mt-1 font-medium text-stone-900">{opportunity.marketPrice}</p></div>
                        <div><p className="label-muted">Discount</p><p className="mt-1 font-medium text-teal-700">{opportunity.discount}</p></div>
                        <div className="sm:col-span-2 lg:col-span-3"><p className="label-muted">Investment insight</p><p className="mt-1 text-stone-700">{opportunity.investmentInsight}</p></div>
                        <div className="sm:col-span-2 lg:col-span-3"><p className="label-muted">Area growth trigger</p><p className="mt-1 text-stone-700">{opportunity.areaGrowthTrigger}</p></div>
                    </div>

                    <LeadCaptureBlock />
                    <WhatsAppCTA />
                </div>
            </section>
        </FrontLayout>
    );
}
