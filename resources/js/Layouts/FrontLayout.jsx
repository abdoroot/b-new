import { usePage } from '@inertiajs/react';
import { MessageCircle } from 'lucide-react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { t, useLocale } from '../lib/translations';

export default function FrontLayout({ children }) {
    const { siteSettings = {} } = usePage().props;
    const locale = useLocale();

    return (
        <div className="min-h-screen bg-stone-50 text-stone-900">
            <Header />
            <main>{children}</main>

            <a
                href={siteSettings.contact_whatsapp_url || "https://wa.me/971XXXXXXXXX"}
                target="_blank"
                rel="noreferrer"
                className={`fixed bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/20 bg-[#1f1d1a] text-amber-100 shadow-[0_10px_30px_rgba(0,0,0,0.28)] transition duration-300 hover:scale-[1.04] hover:bg-[#2a2723] lg:hidden ${
                    locale.direction === 'rtl' ? 'right-5' : 'left-5'
                }`}
                aria-label={t('public.nav.whatsapp_consultation')}
            >
                <MessageCircle size={22} />
            </a>

            <Footer />
        </div>
    );
}
