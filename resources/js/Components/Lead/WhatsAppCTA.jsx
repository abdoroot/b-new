import { usePage } from '@inertiajs/react';
import PrimaryButton from '../PrimaryButton';

export default function WhatsAppCTA() {
    const { siteSettings = {} } = usePage().props;
    const whatsappUrl = siteSettings.contact_whatsapp_url || "https://wa.me/971XXXXXXXXX";

    return (
        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
            <p className="label-muted text-stone-300">Fast advisory response</p>
            <h3 className="mt-2 text-xl font-semibold">Discuss your land criteria on WhatsApp</h3>
            <p className="mt-2 text-sm text-stone-300">Send area, budget, and land type to receive curated opportunities.</p>
            <a 
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex h-11 items-center justify-center rounded-xl bg-teal-600 px-5 text-sm font-semibold text-white transition hover:bg-teal-500"
            >
                Chat on WhatsApp
            </a>
        </section>
    );
}
