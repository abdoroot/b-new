import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function FrontLayout({ children }) {
    return (
        <div className="min-h-screen bg-stone-50 text-stone-900">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
