import { usePage } from '@inertiajs/react';
import PrimaryButton from '../PrimaryButton';
import { t } from '../../lib/translations';

export default function WhatsAppCTA() {
    const { siteSettings = {} } = usePage().props;
    const whatsappUrl = siteSettings.contact_whatsapp_url || "https://wa.me/971XXXXXXXXX";

    return (
        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
            <p className="label-muted text-stone-300">{t('public.lead.fast_response')}</p>
            <h3 className="mt-2 text-xl font-semibold">{t('public.lead.whatsapp_title')}</h3>
            <p className="mt-2 text-sm text-stone-300">{t('public.lead.whatsapp_description')}</p>
            <a 
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex h-11 items-center justify-center rounded-xl bg-teal-600 px-5 text-sm font-semibold text-white transition hover:bg-teal-500"
            >
                {t('public.lead.chat_whatsapp')}
            </a>
        </section>
    );
}
