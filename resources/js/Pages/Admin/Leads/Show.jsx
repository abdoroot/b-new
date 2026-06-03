import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, ArrowRight, Mail, Phone, MapPin, Tag, MessageSquare, Clock, Trash2 } from 'lucide-react';
import PrimaryButton from '@/Components/PrimaryButton';
import DangerButton from '@/Components/DangerButton';
import { t, useLocale } from '@/lib/translations';

export default function Show({ lead, statuses }) {
    const locale = useLocale();
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
        if (confirm(t('admin.leads.delete_confirm'))) {
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
            <Head title={`${t('admin.leads.details_title')}: ${lead.name}`} />
            
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <Link
                        href="/admin/leads"
                        className="p-2 bg-white border border-stone-200 text-stone-500 rounded-xl hover:text-stone-900 transition shadow-sm"
                    >
                        {locale.direction === 'rtl' ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-stone-900">{t('admin.leads.details_title')}</h1>
                        <p className="text-stone-500">{t('admin.leads.details_description', { name: lead.name })}</p>
                    </div>
                    
                    <div className="ml-auto flex items-center gap-3">
                        <select
                            value={data.status}
                            onChange={handleStatusChange}
                            disabled={processing}
                            className={`rounded-xl border-stone-200 text-sm font-semibold focus:border-amber-500 focus:ring-amber-500 shadow-sm transition ${getStatusColor(data.status)}`}
                        >
                            {statuses.map((key) => (
                                <option key={key} value={key} className="bg-white text-stone-900">{t(`admin.statuses.lead.${key}`)}</option>
                            ))}
                        </select>

                        <button
                            onClick={handleDelete}
                            disabled={processing}
                            className="p-2.5 bg-white border border-stone-200 text-stone-400 rounded-xl hover:text-red-600 hover:border-red-100 hover:bg-red-50 transition shadow-sm disabled:opacity-50"
                            title={t('admin.leads.delete_title')}
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
                                {t('admin.leads.message')}
                            </h2>
                            <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 italic text-stone-700 whitespace-pre-wrap leading-relaxed">
                                {lead.message || t('admin.leads.message_empty')}
                            </div>
                        </div>

                        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-stone-200">
                            <h2 className="text-lg font-semibold text-stone-900 mb-6 flex items-center gap-2">
                                <Tag size={20} className="text-amber-600" />
                                {t('admin.leads.requirements')}
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">{t('admin.leads.purpose')}</p>
                                    <p className="text-stone-900 font-medium">{lead.lead_purpose?.label_en || t('admin.leads.general_inquiry')}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">{t('admin.leads.preferred_area')}</p>
                                    <p className="text-stone-900 font-medium">{lead.preferred_area?.name_en || t('admin.leads.anywhere')}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">{t('admin.leads.budget_range')}</p>
                                    <p className="text-stone-900 font-medium">{lead.budget_range?.label_en || t('admin.leads.not_specified')}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">{t('admin.leads.source')}</p>
                                    <p className="text-stone-900 font-medium capitalize">{lead.source?.replace(/_/g, ' ') || t('admin.leads.website')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                            <h2 className="text-lg font-semibold text-stone-900 mb-6">{t('admin.leads.contact_info')}</h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-stone-600">
                                    <div className="p-2 bg-stone-100 rounded-lg">
                                        <Phone size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-stone-400 font-medium">{t('admin.leads.phone')}</p>
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
                                            <p className="text-xs text-stone-400 font-medium">{t('admin.leads.email')}</p>
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
                                        <p className="text-xs text-stone-400 font-medium">{t('admin.leads.received_at')}</p>
                                        <p className="text-sm font-semibold text-stone-900">
                                            {new Date(lead.created_at).toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* HubSpot Sync Info */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-semibold text-stone-900">{t('admin.leads.hubspot_sync')}</h2>
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
                                    lead.hubspot_sync_status === 'synced' ? 'bg-emerald-100 text-emerald-700' :
                                    lead.hubspot_sync_status === 'failed' ? 'bg-red-100 text-red-700' :
                                    lead.hubspot_sync_status === 'syncing' ? 'bg-blue-100 text-blue-700' :
                                    'bg-stone-100 text-stone-700'
                                }`}>
                                    {t(`admin.statuses.hubspot.${lead.hubspot_sync_status || 'disabled'}`)}
                                </span>
                            </div>
                            
                            <div className="space-y-4">
                                {lead.hubspot_contact_id && (
                                    <div>
                                        <p className="text-xs text-stone-400 font-medium uppercase tracking-wider">{t('admin.leads.contact_id')}</p>
                                        <p className="text-sm font-mono font-medium text-stone-900 truncate" title={lead.hubspot_contact_id}>
                                            {lead.hubspot_contact_id}
                                        </p>
                                    </div>
                                )}
                                
                                {lead.hubspot_synced_at && (
                                    <div>
                                        <p className="text-xs text-stone-400 font-medium uppercase tracking-wider">{t('admin.leads.last_synced')}</p>
                                        <p className="text-sm font-medium text-stone-900">
                                            {new Date(lead.hubspot_synced_at).toLocaleString()}
                                        </p>
                                    </div>
                                )}

                                {lead.hubspot_sync_error && (
                                    <div className="p-3 bg-red-50 border border-red-100 rounded-xl">
                                        <p className="text-xs text-red-500 font-semibold mb-1 uppercase tracking-wider">{t('admin.leads.error')}</p>
                                        <p className="text-xs text-red-700 leading-relaxed italic">
                                            {lead.hubspot_sync_error}
                                        </p>
                                    </div>
                                )}

                                {!lead.hubspot_contact_id && lead.hubspot_sync_status !== 'failed' && (
                                    <p className="text-xs text-stone-500 italic">
                                        {lead.hubspot_sync_status === 'disabled' ? t('admin.leads.hubspot_disabled') : t('admin.leads.hubspot_syncing')}
                                    </p>
                                )}
                            </div>
                        </div>

                        {lead.land_opportunity && (
                            <div className="bg-amber-50 p-6 rounded-2xl shadow-sm border border-amber-100">
                                <h2 className="text-lg font-semibold text-stone-900 mb-4 flex items-center gap-2">
                                    <MapPin size={20} className="text-amber-700" />
                                    {t('admin.leads.specific_opportunity')}
                                </h2>
                                <p className="text-sm text-stone-700 mb-4">{lead.land_opportunity.title_en}</p>
                                <Link
                                    href={`/admin/opportunities/${lead.land_opportunity_id}/edit`}
                                    className="text-xs font-bold text-amber-700 uppercase tracking-widest hover:text-amber-800 transition"
                                >
                                    {t('admin.leads.view_opportunity')} &rarr;
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
