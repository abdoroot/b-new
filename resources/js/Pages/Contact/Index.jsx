import FrontLayout from '../../Layouts/FrontLayout';
import SectionHeader from '../../Components/SectionHeader';
import PrimaryButton from '../../Components/PrimaryButton';

export default function ContactIndex() {
    return (
        <FrontLayout>
            <section className="section-shell">
                <div className="container-shell space-y-8">
                    <SectionHeader
                        eyebrow="Contact"
                        title="Request curated Sharjah land opportunities"
                        description="Frontend form UI only. No backend submission is connected in this stage."
                    />

                    <form className="card-shell grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
                        <input className="rounded-xl border border-stone-300 px-4 py-3 text-sm" placeholder="Name" />
                        <input className="rounded-xl border border-stone-300 px-4 py-3 text-sm" placeholder="Phone" />
                        <input className="rounded-xl border border-stone-300 px-4 py-3 text-sm" placeholder="Budget" />
                        <input className="rounded-xl border border-stone-300 px-4 py-3 text-sm" placeholder="Purpose" />
                        <textarea className="rounded-xl border border-stone-300 px-4 py-3 text-sm sm:col-span-2" rows="5" placeholder="Message" />
                        <div className="sm:col-span-2">
                            <PrimaryButton>Send request</PrimaryButton>
                        </div>
                    </form>
                </div>
            </section>
        </FrontLayout>
    );
}
