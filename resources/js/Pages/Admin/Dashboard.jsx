import AdminLayout from '@/Layouts/AdminLayout';
import { Users, FileText, Star, ShieldCheck, Mail } from 'lucide-react';
import { t } from '@/lib/translations';

export default function Dashboard({ stats }) {
    const cards = [
        { label: t('admin.dashboard.cards.total_leads'), value: stats.total_leads, icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
        { label: t('admin.dashboard.cards.new_leads'), value: stats.new_leads, icon: Mail, color: 'text-amber-600', bg: 'bg-amber-50' },
        { label: t('admin.dashboard.cards.contacted_leads'), value: stats.contacted_leads, icon: ShieldCheck, color: 'text-emerald-600', bg: 'bg-emerald-50' },
        { label: t('admin.dashboard.cards.published_ops'), value: stats.total_published_opportunities, icon: FileText, color: 'text-stone-600', bg: 'bg-stone-100' },
        { label: t('admin.dashboard.cards.featured_ops'), value: stats.featured_opportunities, icon: Star, color: 'text-amber-500', bg: 'bg-amber-50' },
    ];

    return (
        <AdminLayout>
            <div className="space-y-8">
                <div>
                    <h1 className="text-2xl font-bold text-stone-900 tracking-tight">{t('admin.dashboard.title')}</h1>
                    <p className="text-sm text-stone-500 mt-1">{t('admin.dashboard.description')}</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {cards.map((card) => {
                        const Icon = card.icon;
                        return (
                            <div key={card.label} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col items-center text-center">
                                <div className={`h-12 w-12 rounded-xl ${card.bg} ${card.color} flex items-center justify-center mb-4`}>
                                    <Icon size={24} />
                                </div>
                                <p className="text-sm font-medium text-stone-500 uppercase tracking-wider">{card.label}</p>
                                <p className="mt-2 text-3xl font-bold text-stone-900">{card.value}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </AdminLayout>
    );
}
