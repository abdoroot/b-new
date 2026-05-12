import PrimaryButton from '../PrimaryButton';

export default function WhatsAppCTA() {
    return (
        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
            <p className="label-muted text-stone-300">Fast advisory response</p>
            <h3 className="mt-2 text-xl font-semibold">Discuss your land criteria on WhatsApp</h3>
            <p className="mt-2 text-sm text-stone-300">Send area, budget, and land type to receive curated opportunities.</p>
            <PrimaryButton className="mt-4 bg-teal-600 hover:bg-teal-500">Chat on WhatsApp</PrimaryButton>
        </section>
    );
}
