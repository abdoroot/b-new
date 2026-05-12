import { Link } from '@inertiajs/react';

const links = [
    { label: 'Home', href: '/' },
    { label: 'Land Opportunities', href: '/land-opportunities' },
    { label: 'Land Advisory', href: '/advisory' },
    { label: 'Contact', href: '/contact' },
];

export default function Header() {
    return (
        <header className="border-b border-stone-200 bg-white/95 backdrop-blur">
            <div className="container-shell flex h-16 items-center justify-between gap-4">
                <Link href="/" className="flex items-center gap-3">
                    <img src="/assets/images/logo.webp" alt="Barakah" className="h-10 w-10 rounded-full object-cover" />
                    <span className="text-xs font-semibold tracking-[0.14em] text-stone-900 uppercase sm:text-sm">Sharjah Land Advisory</span>
                </Link>
                <nav className="flex items-center gap-4 overflow-x-auto text-sm text-stone-600 sm:gap-6">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className="whitespace-nowrap hover:text-stone-900">
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
