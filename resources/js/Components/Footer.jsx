import { usePage } from '@inertiajs/react';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { t } from '../lib/translations';

const quickNavigation = [
    { key: 'public.nav.home', href: '/' },
    { key: 'public.nav.land_opportunities', href: '/land-opportunities' },
    { key: 'public.nav.land_advisory', href: '/advisory' },
    { key: 'public.nav.contact', href: '/contact' },
];

const landLinks = [
    { key: 'public.footer.industrial_land', href: '/land-opportunities' },
    { key: 'public.footer.commercial_land', href: '/land-opportunities' },
    { key: 'public.footer.mixed_use_land', href: '/land-opportunities' },
];

export default function Footer() {
    const { siteSettings = {} } = usePage().props;

    const contactDetails = {
        address: siteSettings.contact_address || 'Rolla, Mall Office 415, Sharjah, UAE',
        phone: siteSettings.contact_phone || '065 556 777',
        email: siteSettings.contact_email || 'info@barakahre.com',
    };

    const whatsappUrl = siteSettings.contact_whatsapp_url || "https://wa.me/971XXXXXXXXX";

    return (
        <footer className="mt-16 border-t border-amber-500/20 bg-neutral-950 text-stone-300">
            <div className="container-shell py-14 sm:py-16 lg:py-20">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:items-start">
                    <div className="lg:col-span-4">
                        <div className="rounded-2xl border border-amber-500/20 bg-neutral-900/70 p-5 transition duration-300 hover:border-amber-400/35 sm:p-6">
                            <div className="flex items-center gap-4">
                                <img
                                    src="/assets/images/30-albarahah.jpg"
                                    alt={siteSettings.company_name || "Al Barakah Real Estate"}
                                    className="h-20 w-20 rounded-sm object-contain sm:h-24 sm:w-24"
                                />
                                <div>
                                    <p className="text-xs font-semibold tracking-[0.16em] text-amber-200 uppercase">
                                        {siteSettings.site_positioning || "Sharjah Land Advisory"}
                                    </p>
                                    <p className="mt-1 text-lg font-semibold text-stone-100">
                                        {siteSettings.company_name || "Al Barakah Real Estate"}
                                    </p>
                                </div>
                            </div>

                            <p className="mt-4 text-sm leading-6 text-stone-400">
                                {t('public.footer.description')}
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <p className="text-sm font-semibold text-amber-200">{t('public.footer.quick_navigation')}</p>
                        <ul className="mt-4 space-y-2 text-sm">
                            {quickNavigation.map((link) => (
                                <li key={link.key}>
                                    <a
                                        href={link.href}
                                        className="text-stone-400 transition hover:text-amber-200"
                                    >
                                        {t(link.key)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <p className="text-sm font-semibold text-amber-200">{t('public.footer.land_opportunities')}</p>
                        <ul className="mt-4 space-y-2 text-sm">
                            {landLinks.map((link) => (
                                <li key={link.key}>
                                    <a
                                        href={link.href}
                                        className="text-stone-400 transition hover:text-amber-200"
                                    >
                                        {t(link.key)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-5 lg:col-span-3">
                        <div>
                            <p className="text-sm font-semibold text-amber-200">{t('public.footer.contact')}</p>
                            <div className="mt-4 space-y-3 text-sm text-stone-400">
                                <p className="flex items-start gap-2">
                                    <MapPin size={19} className="mt-0.5 shrink-0 text-amber-300" />
                                    <span>{contactDetails.address}</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <Phone size={19} className="shrink-0 text-amber-300" />
                                    <span>{contactDetails.phone}</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <Mail size={19} className="shrink-0 text-amber-300" />
                                    <span>{contactDetails.email}</span>
                                </p>
                            </div>
                        </div>

                        <div className="hidden lg:block">
                            <a 
                                href={whatsappUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-amber-400/30 bg-amber-500/10 text-sm font-semibold text-amber-200 transition hover:bg-amber-500/20"
                            >
                                <MessageCircle size={18} />
                                {t('public.nav.whatsapp_consultation')}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-amber-500/15 pt-6">
                    <p className="text-sm text-stone-500">
                        © 2026 {siteSettings.company_name || "Al Barakah Real Estate"}. {t('public.footer.rights')}
                    </p>
                </div>
            </div>
        </footer>
    );
}
