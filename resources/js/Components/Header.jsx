import { Link, usePage } from '@inertiajs/react';
import { Menu, MessageCircle } from 'lucide-react';
import PrimaryButton from './PrimaryButton';

const links = [
    { label: 'Home', href: '/' },
    { label: 'Land Opportunities', href: '/land-opportunities' },
    { label: 'Land Advisory', href: '/advisory' },
    { label: 'Contact', href: '/contact' },
];

export default function Header() {
    const { url } = usePage();

    return (
        <header className="sticky top-0 z-50 border-b border-amber-500/10 bg-neutral-950/90 backdrop-blur-xl">
            <div className="container-shell flex h-24 items-center justify-between gap-6">
                <Link href="/" className="flex shrink-0 items-center gap-4">
                    <img
                        src="/assets/images/logo.webp"
                        alt="Barakah Real Estate"
                        className="h-20 w-20 object-contain sm:h-20 sm:w-20"
                    />

                    <div className="hidden sm:block">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-200">
                            Sharjah Land Advisory
                        </p>
                        <p className="mt-1 text-sm font-medium text-stone-100">
                            Barakah Real Estate
                        </p>
                    </div>
                </Link>

                <nav className="hidden items-center gap-7 lg:flex">
                    {links.map((link) => {
                        const active = url === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative py-2 text-sm transition ${active
                                        ? 'text-amber-200'
                                        : 'text-stone-400 hover:text-stone-100'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="hidden lg:flex">
                    <PrimaryButton className="inline-flex items-center gap-2 border border-amber-400/30 bg-amber-500/10 text-amber-200 hover:bg-amber-500 hover:text-neutral-950">
                        <MessageCircle size={18} />
                        WhatsApp Consultation
                    </PrimaryButton>
                </div>

                <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-500/15 bg-neutral-900 text-stone-200 transition hover:border-amber-400/30 hover:text-amber-200 lg:hidden">
                    <Menu size={20} />
                </button>
            </div>
        </header>
    );
}