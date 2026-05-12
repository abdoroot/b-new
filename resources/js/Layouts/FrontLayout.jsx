import { MessageCircle } from 'lucide-react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function FrontLayout({ children }) {
    return (
        <div className="min-h-screen bg-stone-50 text-stone-900">
            <Header />
            <main>{children}</main>

            <a
                href="https://wa.me/971XXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/20 bg-[#1f1d1a] text-amber-100 shadow-[0_10px_30px_rgba(0,0,0,0.28)] transition duration-300 hover:scale-[1.04] hover:bg-[#2a2723] lg:hidden"
                aria-label="WhatsApp Consultation"
            >
                <MessageCircle size={22} />
            </a>

            <Footer />
        </div>
    );
}