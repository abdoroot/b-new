import { Link, usePage } from '@inertiajs/react';
import { LayoutDashboard, Users, LogOut, Menu, X, Home, Map } from 'lucide-react';
import { useState } from 'react';

export default function AdminLayout({ children }) {
    const { auth } = usePage().props;
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navItems = [
        { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
        { label: 'Opportunities', href: '/admin/opportunities', icon: Map },
        { label: 'Leads', href: '/admin/leads', icon: Users },
    ];

    const user = auth?.user || { name: 'Admin', email: '' };

    return (
        <div className="min-h-screen bg-stone-50 flex overflow-hidden text-stone-900">
            {/* Sidebar for mobile */}
            <div
                className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
                    sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
                <div className="fixed inset-0 bg-stone-900/50" onClick={() => setSidebarOpen(false)} />
                
                <aside
                    className={`fixed inset-y-0 left-0 w-64 bg-stone-900 text-stone-300 transform transition-transform duration-300 ease-in-out ${
                        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    <SidebarContent navItems={navItems} user={user} onClose={() => setSidebarOpen(false)} />
                </aside>
            </div>

            {/* Sidebar for desktop */}
            <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:bg-stone-900 lg:text-stone-300 shrink-0">
                <SidebarContent navItems={navItems} user={user} />
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
                {/* Header */}
                <header className="h-20 bg-white border-b border-stone-200 flex items-center justify-between px-6 lg:px-8 shrink-0">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="p-2 -ml-2 text-stone-500 lg:hidden"
                    >
                        <Menu size={24} />
                    </button>

                    <div className="flex items-center gap-4 ml-auto">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-semibold text-stone-900">{user.name}</p>
                            <p className="text-xs text-stone-500">{user.email}</p>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 font-bold uppercase">
                            {user.name?.[0] || 'A'}
                        </div>
                    </div>
                </header>

                {/* Main */}
                <main className="flex-1 overflow-y-auto p-6 lg:p-8 bg-stone-50">
                    {children}
                </main>
            </div>
        </div>
    );
}

function SidebarContent({ navItems, user, onClose }) {
    return (
        <div className="h-full flex flex-col">
            <div className="h-20 flex items-center px-6 border-b border-stone-800">
                <Link href="/admin/dashboard" className="flex items-center gap-3" onClick={onClose}>
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
                            onClick={onClose}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${
                                active ? 'bg-amber-500/10 text-amber-200' : 'hover:bg-stone-800 hover:text-white'
                            }`}
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
    );
}
