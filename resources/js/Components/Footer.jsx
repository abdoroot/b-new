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

const socialLinks = [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Facebook', href: '#' },
];

export default function Footer() {
    return (
        <footer className="mt-16 border-t border-amber-500/20 bg-neutral-950 text-stone-300">
            <div className="container-shell py-14 sm:py-16">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
                    <div className="space-y-4 lg:col-span-2">
                        <div className="flex items-center gap-3">
                            <img src="https://barakahre.com/evoreq/assets/dashboard/images/30-albarahah.jpg" alt="Barakah" className="h-11 w-11 rounded-full object-cover" />
                            <p className="text-sm font-semibold tracking-[0.14em] text-amber-200 uppercase">Sharjah Land Advisory</p>
                        </div>
                        <p className="max-w-md text-sm leading-6 text-stone-400">
                            We identify undervalued land opportunities in Sharjah before the market moves.
                        </p>
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-amber-200">Quick Navigation</p>
                        <ul className="mt-4 space-y-2 text-sm">
                            {quickNavigation.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-stone-400 hover:text-amber-200">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-amber-200">Land Opportunities</p>
                        <ul className="mt-4 space-y-2 text-sm">
                            {landLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-stone-400 hover:text-amber-200">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <p className="text-sm font-semibold text-amber-200">Contact</p>
                            <div className="mt-4 space-y-2 text-sm text-stone-400">
                                <p>Address: المبني - اسم الشارع - المدينة - الدولة</p>
                                <p>Phone: +(xxx) 0xxxxxxx</p>
                                <p>Email: info@sitename.com</p>
                            </div>
                        </div>
                        <div>
                            <PrimaryButton className="w-full bg-amber-500 text-neutral-950 hover:bg-amber-400">WhatsApp Consultation</PrimaryButton>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-4 border-t border-amber-500/15 pt-6 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>© 2026 Sharjah Land Advisory. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        {socialLinks.map((link) => (
                            <a key={link.label} href={link.href} className="hover:text-amber-200">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
