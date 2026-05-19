import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-neutral-950 pt-6 sm:justify-center sm:pt-0">
            <div className="mb-10">
                <Link href="/">
                    <ApplicationLogo className="h-32 w-32 object-contain" />
                </Link>
            </div>

            <div className="w-full overflow-hidden border border-amber-500/10 bg-neutral-900/50 px-8 py-10 shadow-2xl backdrop-blur-xl sm:max-w-md sm:rounded-2xl">
                {children}
            </div>

            <div className="mt-8 text-center">
                <p className="text-sm text-stone-500">
                    © {new Date().getFullYear()} Al Barakah Real Estate. All rights reserved.
                </p>
            </div>
        </div>
    );
}
