import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Mail, Phone, MapPin, Calendar, Tag, MessageSquare, Clock, Trash2 } from 'lucide-react';
import PrimaryButton from '@/Components/PrimaryButton';
import DangerButton from '@/Components/DangerButton';

export default function Show({ lead, statuses }) {
    const { data, setData, patch, processing, delete: destroy } = useForm({
        status: lead.status,
    });

    const handleStatusChange = (e) => {
        const newStatus = e.target.value;
        setData('status', newStatus);
        patch(route('admin.leads.update-status', lead.id), {
            preserveScroll: true,
        });
    };

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this lead?')) {
            destroy(route('admin.leads.destroy', lead.id));
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
            <Head title={`Lead: ${lead.name}`} />
            
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <Link
                        href="/admin/leads"
                        className="p-2 bg-white border border-stone-200 text-stone-500 rounded-xl hover:text-stone-900 transition shadow-sm"
                    >
                        <ArrowLeft size={20} />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-stone-900">Lead Details</h1>
                        <p className="text-stone-500">Review and manage inquiry from {lead.name}</p>
                    </div>
                    
                    <div className="ml-auto flex items-center gap-3">
                        <select
                            value={data.status}
                            onChange={handleStatusChange}
                            disabled={processing}
                            className={`rounded-xl border-stone-200 text-sm font-semibold focus:border-amber-500 focus:ring-amber-500 shadow-sm transition ${getStatusColor(data.status)}`}
                        >
                            {Object.entries(statuses).map(([key, label]) => (
                                <option key={key} value={key} className="bg-white text-stone-900">{label}</option>
                            ))}
                        </select>

                        <button
                            onClick={handleDelete}
                            disabled={processing}
                            className="p-2.5 bg-white border border-stone-200 text-stone-400 rounded-xl hover:text-red-600 hover:border-red-100 hover:bg-red-50 transition shadow-sm disabled:opacity-50"
                            title="Delete Lead"
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-stone-200">
                            <h2 className="text-lg font-semibold text-stone-900 mb-6 flex items-center gap-2">
                                <MessageSquare size={20} className="text-amber-600" />
                                Inquiry Message
                            </h2>
                            <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 italic text-stone-700 whitespace-pre-wrap leading-relaxed">
                                {lead.message || "No additional message provided."}
                            </div>
                        </div>

                        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-stone-200">
                            <h2 className="text-lg font-semibold text-stone-900 mb-6 flex items-center gap-2">
                                <Tag size={20} className="text-amber-600" />
                                Requirements
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Purpose</p>
                                    <p className="text-stone-900 font-medium">{lead.lead_purpose?.label_en || 'General Inquiry'}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Preferred Area</p>
                                    <p className="text-stone-900 font-medium">{lead.preferred_area?.name_en || 'Anywhere'}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Budget Range</p>
                                    <p className="text-stone-900 font-medium">{lead.budget_range?.label_en || 'Not specified'}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Source</p>
                                    <p className="text-stone-900 font-medium capitalize">{lead.source?.replace(/_/g, ' ') || 'Website'}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                            <h2 className="text-lg font-semibold text-stone-900 mb-6">Contact Info</h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-stone-600">
                                    <div className="p-2 bg-stone-100 rounded-lg">
                                        <Phone size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-stone-400 font-medium">Phone</p>
                                        <a href={`tel:${lead.phone}`} className="text-sm font-semibold text-stone-900 hover:text-amber-600 transition">
                                            {lead.phone}
                                        </a>
                                    </div>
                                </div>
                                {lead.email && (
                                    <div className="flex items-center gap-3 text-stone-600">
                                        <div className="p-2 bg-stone-100 rounded-lg">
                                            <Mail size={18} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-stone-400 font-medium">Email</p>
                                            <a href={`mailto:${lead.email}`} className="text-sm font-semibold text-stone-900 hover:text-amber-600 transition">
                                                {lead.email}
                                            </a>
                                        </div>
                                    </div>
                                )}
                                <div className="flex items-center gap-3 text-stone-600">
                                    <div className="p-2 bg-stone-100 rounded-lg">
                                        <Clock size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-stone-400 font-medium">Received At</p>
                                        <p className="text-sm font-semibold text-stone-900">
                                            {new Date(lead.created_at).toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {lead.land_opportunity && (
                            <div className="bg-amber-50 p-6 rounded-2xl shadow-sm border border-amber-100">
                                <h2 className="text-lg font-semibold text-stone-900 mb-4 flex items-center gap-2">
                                    <MapPin size={20} className="text-amber-700" />
                                    Specific Opportunity
                                </h2>
                                <p className="text-sm text-stone-700 mb-4">{lead.land_opportunity.title_en}</p>
                                <Link
                                    href={`/admin/opportunities/${lead.land_opportunity_id}/edit`}
                                    className="text-xs font-bold text-amber-700 uppercase tracking-widest hover:text-amber-800 transition"
                                >
                                    View Opportunity &rarr;
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
