import { Link, usePage } from '@inertiajs/react';
import { LayoutDashboard, Users, LogOut, Menu, X, Home } from 'lucide-react';
import { useState } from 'react';

export default function AdminLayout({ children }) {
    const { auth } = usePage().props;
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navItems = [
        { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
        { label: 'Leads', href: '/admin/leads', icon: Users },
    ];

    return (
        <div className="min-h-screen bg-stone-50 flex">
            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-stone-900 text-stone-300 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto ${sidebarOpen ? 'translate-x-0' : '-translate-x-0 lg:translate-x-0'} ${!sidebarOpen && '-translate-x-full lg:translate-x-0'}`}>
                <div className="h-full flex flex-col">
                    <div className="h-20 flex items-center px-6 border-b border-stone-800">
                        <Link href="/admin/dashboard" className="flex items-center gap-3">
                            <img src="/assets/images/logo.webp" alt="Logo" className="h-10 w-10" />
                            <span className="font-semibold text-white tracking-tight">Admin Area</span>
                        </Link>
                    </div>

                    <nav className="flex-1 py-6 px-4 space-y-1">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const active = window.location.pathname === item.href || window.location.pathname.startsWith(item.href + '/');
                            
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${active ? 'bg-amber-500/10 text-amber-200' : 'hover:bg-stone-800 hover:text-white'}`}
                                >
                                    <Icon size={18} />
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="p-4 border-t border-stone-800 space-y-1">
                        <Link
                            href="/"
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium hover:bg-stone-800 hover:text-white transition"
                        >
                            <Home size={18} />
                            Public Site
                        </Link>
                        <Link
                            href="/logout"
                            method="post"
                            as="button"
                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium hover:bg-stone-800 hover:text-white transition text-left"
                        >
                            <LogOut size={18} />
                            Logout
                        </Link>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Header */}
                <header className="h-20 bg-white border-b border-stone-200 flex items-center justify-between px-6 lg:px-8">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="p-2 -ml-2 text-stone-500 lg:hidden"
                    >
                        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <div className="flex items-center gap-4 ml-auto">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-semibold text-stone-900">{auth.user.name}</p>
                            <p className="text-xs text-stone-500">{auth.user.email}</p>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 font-bold">
                            {auth.user.name[0]}
                        </div>
                    </div>
                </header>

                {/* Main */}
                <main className="flex-1 overflow-y-auto p-6 lg:p-8">
                    {children}
                </main>
            </div>

            {/* Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-stone-900/50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    );
}
