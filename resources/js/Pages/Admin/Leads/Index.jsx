import AdminLayout from '@/Layouts/AdminLayout';
import { Link, useForm } from '@inertiajs/react';
import { Eye, Clock, Trash2 } from 'lucide-react';
import { t } from '@/lib/translations';

export default function Index({ leads }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm(t('admin.leads.delete_confirm'))) {
            destroy(route('admin.leads.destroy', id));
        }
    };

    const getStatusColor = (status) => {
        const colors = {
            new: 'bg-amber-100 text-amber-700',
            contacted: 'bg-blue-100 text-blue-700',
            qualified: 'bg-emerald-100 text-emerald-700',
            closed: 'bg-stone-100 text-stone-700',
            ignored: 'bg-red-100 text-red-700',
        };
        return colors[status] || 'bg-stone-100 text-stone-700';
    };

    return (
        <AdminLayout>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-stone-900 tracking-tight">{t('admin.leads.title')}</h1>
                        <p className="text-sm text-stone-500 mt-1">{t('admin.leads.description')}</p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-stone-50 border-b border-stone-200">
                                    <th className="px-6 py-4 text-xs font-semibold text-stone-500 uppercase tracking-wider">{t('admin.leads.table.lead')}</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-stone-500 uppercase tracking-wider">{t('admin.leads.table.purpose_area')}</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-stone-500 uppercase tracking-wider">{t('admin.leads.table.budget')}</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-stone-500 uppercase tracking-wider">{t('admin.leads.table.status')}</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-stone-500 uppercase tracking-wider">{t('admin.leads.table.created')}</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-stone-500 uppercase tracking-wider text-right">{t('admin.leads.table.action')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100">
                                {leads.data.map((lead) => (
                                    <tr key={lead.id} className="hover:bg-stone-50 transition">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="font-semibold text-stone-900">{lead.name}</div>
                                            <div className="text-xs text-stone-500">{lead.phone}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-stone-700">{lead.lead_purpose?.label_en || t('admin.leads.general_inquiry')}</div>
                                            <div className="text-xs text-stone-500">{lead.preferred_area?.name_en || lead.preferred_area || t('admin.leads.not_specified')}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600">
                                            {lead.budget_range?.label_en || t('admin.leads.na')}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(lead.status)}`}>
                                                {t(`admin.statuses.lead.${lead.status}`)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-500 flex items-center gap-1.5">
                                            <Clock size={14} />
                                            {new Date(lead.created_at).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
                                            <Link
                                                href={`/admin/leads/${lead.id}`}
                                                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-stone-100 text-stone-600 hover:bg-amber-100 hover:text-amber-700 transition"
                                            >
                                                <Eye size={18} />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(lead.id)}
                                                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-stone-100 text-stone-400 hover:bg-red-50 hover:text-red-600 transition"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    {leads.links && leads.links.length > 3 && (
                        <div className="px-6 py-4 border-t border-stone-100 flex items-center justify-center gap-2">
                            {leads.links.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.url || '#'}
                                    disabled={!link.url}
                                    className={`px-3 py-1 text-sm rounded-lg border transition ${link.active ? 'bg-stone-900 text-white border-stone-900' : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'}`}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}
