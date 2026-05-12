import FrontLayout from '../../Layouts/FrontLayout';
import SectionHeader from '../../Components/SectionHeader';
import WhatsAppCTA from '../../Components/Lead/WhatsAppCTA';

const process = [
    'Understand your land mandate: target area, budget, and land type.',
    'Screen and shortlist opportunities with clear pricing and growth rationale.',
    'Coordinate direct advisory discussion before site viewing and negotiation.',
];

const clients = [
    'Investors seeking strategic entry pricing',
    'Family offices allocating into Sharjah land',
    'Business buyers requiring long-term land positioning',
];

const sharjahReasons = [
    'Strong infrastructure and industrial expansion',
    'Relative pricing attractiveness versus nearby markets',
    'Growing investor attention to key land corridors',
];

export default function AdvisoryIndex() {
    return (
        <FrontLayout>
            <section className="section-shell">
                <div className="container-shell space-y-10">
                    <SectionHeader
                        eyebrow="Land advisory"
                        title="We do not list land. We identify opportunities."
                        description="Our role is to surface curated land opportunities with investment context, not listing volume."
                    />

                    <section className="space-y-4">
                        <h3 className="text-xl font-semibold text-stone-900">Process</h3>
                        <div className="grid gap-4 sm:grid-cols-3">
                            {process.map((item) => <div key={item} className="card-shell p-5 text-sm text-stone-700">{item}</div>)}
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-xl font-semibold text-stone-900">Who we serve</h3>
                        <div className="grid gap-4 sm:grid-cols-3">
                            {clients.map((item) => <div key={item} className="card-shell p-5 text-sm text-stone-700">{item}</div>)}
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-xl font-semibold text-stone-900">Why Sharjah land</h3>
                        <div className="grid gap-4 sm:grid-cols-3">
                            {sharjahReasons.map((item) => <div key={item} className="card-shell p-5 text-sm text-stone-700">{item}</div>)}
                        </div>
                    </section>

                    <WhatsAppCTA />
                </div>
            </section>
        </FrontLayout>
    );
}
