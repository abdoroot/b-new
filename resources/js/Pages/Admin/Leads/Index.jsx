import AdminLayout from '@/Layouts/AdminLayout';
import { Link, useForm } from '@inertiajs/react';
import { Eye, Clock, Trash2 } from 'lucide-react';

export default function Index({ leads }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this lead?')) {
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
                        <h1 className="text-2xl font-bold text-stone-900 tracking-tight">Leads Management</h1>
                        <p className="text-sm text-stone-500 mt-1">Manage incoming inquiries and consultation requests.</p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-stone-50 border-b border-stone-200">
                                    <th className="px-6 py-4 text-xs font-semibold text-stone-500 uppercase tracking-wider">Lead</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-stone-500 uppercase tracking-wider">Purpose / Area</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-stone-500 uppercase tracking-wider">Budget</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-stone-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-stone-500 uppercase tracking-wider">Created</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-stone-500 uppercase tracking-wider text-right">Action</th>
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
                                            <div className="text-sm text-stone-700">{lead.lead_purpose?.label_en || 'General Inquiry'}</div>
                                            <div className="text-xs text-stone-500">{lead.preferred_area?.name_en || lead.preferred_area || 'Not specified'}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600">
                                            {lead.budget_range?.label_en || 'N/A'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(lead.status)}`}>
                                                {lead.status}
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
