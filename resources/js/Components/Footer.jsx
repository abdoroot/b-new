import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import PrimaryButton from './PrimaryButton';

const quickNavigation = [
    { label: 'Home', href: '/' },
    { label: 'Land Opportunities', href: '/land-opportunities' },
    { label: 'Land Advisory', href: '/advisory' },
    { label: 'Contact', href: '/contact' },
];

const landLinks = [
    { label: 'Industrial Land Opportunities', href: '/land-opportunities' },
    { label: 'Commercial Land Opportunities', href: '/land-opportunities' },
    { label: 'Mixed-Use Land Opportunities', href: '/land-opportunities' },
];

const socialLinks = [];

const contactDetails = {
    address: 'Rolla, Mall Office 415, Sharjah, UAE',
    phone: '065 556 777',
    email: 'info@barakahre.com',
};

export default function Footer() {
    return (
        <footer className="mt-16 border-t border-amber-500/20 bg-neutral-950 text-stone-300">
            <div className="container-shell py-14 sm:py-16 lg:py-20">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
                    <div className="space-y-5 lg:col-span-4">
                        <div className="rounded-2xl border border-amber-500/20 bg-neutral-900/70 p-5 sm:p-6">
                            <div className="flex items-center gap-4">
                                <img src="/assets/images/30-albarahah.jpg" alt="Barakah" className="h-16 w-16 rounded-sm sm:h-20 sm:w-20" />
                                <div>
                                    <p className="text-xs font-semibold tracking-[0.16em] text-amber-200 uppercase">Sharjah Land Advisory</p>
                                    <p className="mt-1 text-lg font-semibold text-stone-100">Barakah Real Estate</p>
                                </div>
                            </div>
                            <p className="mt-4 text-sm leading-6 text-stone-400">
                                Curated Sharjah land opportunities backed by disciplined pricing review, area context, and investor-focused advisory.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <p className="text-sm font-semibold text-amber-200">Quick Navigation</p>
                        <ul className="mt-4 space-y-2 text-sm">
                            {quickNavigation.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-stone-400 hover:text-amber-200">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <p className="text-sm font-semibold text-amber-200">Land Opportunities</p>
                        <ul className="mt-4 space-y-2 text-sm">
                            {landLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-stone-400 hover:text-amber-200">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4 lg:col-span-3">
                        <div>
                            <p className="text-sm font-semibold text-amber-200">Contact</p>
                            <div className="mt-4 space-y-3 text-sm text-stone-400">
                                <p className="flex items-start gap-2"><MapPin size={19} className="mt-0.5 text-amber-300" /><span>{contactDetails.address}</span></p>
                                <p className="flex items-center gap-2"><Phone size={19} className="text-amber-300" /><span>{contactDetails.phone}</span></p>
                                <p className="flex items-center gap-2"><Mail size={19} className="text-amber-300" /><span>{contactDetails.email}</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-4 border-t border-amber-500/15 pt-6 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>© 2026 Barakah Real Estate. All rights reserved.</p>
                    {socialLinks.length > 0 ? (
                        <div className="flex items-center gap-4">
                            {socialLinks.map((link) => (
                                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="hover:text-amber-200">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    ) : null}
                </div>
            </div>
        </footer>
    );
}
