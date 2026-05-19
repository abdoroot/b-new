import AdminLayout from '@/Layouts/AdminLayout';
import { Link, router } from '@inertiajs/react';
import { Edit, Trash2, Plus, Search, Star, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { pickBy } from 'lodash';

export default function Index({ opportunities, filters, areas }) {
    const [search, setSearch] = useState(filters.search || '');
    const [status, setStatus] = useState(filters.status || '');
    const [featured, setFeatured] = useState(filters.featured || '');
    const [areaId, setAreaId] = useState(filters.area_id || '');

    const handleSearch = () => {
        const query = pickBy({ search, status, featured, area_id: areaId });
        router.get(route('admin.opportunities.index'), query, {
            preserveState: true,
            replace: true,
        });
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            handleSearch();
        }, 500);
        return () => clearTimeout(timer);
    }, [search, status, featured, areaId]);

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this opportunity?')) {
            router.delete(route('admin.opportunities.destroy', id));
        }
    };

    const getStatusColor = (status) => {
        const colors = {
            draft: 'bg-stone-100 text-stone-700',
            published: 'bg-emerald-100 text-emerald-700',
            archived: 'bg-red-100 text-red-700',
        };
        return colors[status] || 'bg-stone-100 text-stone-700';
    };

    return (
        <AdminLayout>
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-stone-900 tracking-tight">Land Opportunities</h1>
                        <p className="text-sm text-stone-500 mt-1">Manage curated Sharjah land opportunities.</p>
                    </div>
                    <Link
                        href={route('admin.opportunities.create')}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-semibold text-neutral-950 transition hover:bg-amber-400"
                    >
                        <Plus size={18} />
                        Add Opportunity
                    </Link>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search by title..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 rounded-xl border-stone-200 focus:border-amber-500 focus:ring-amber-500 text-sm"
                            />
                        </div>

                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full py-2 rounded-xl border-stone-200 focus:border-amber-500 focus:ring-amber-500 text-sm"
                        >
                            <option value="">All Statuses</option>
                            <option value="draft">Draft</option>
                            <option value="published">Published</option>
                            <option value="archived">Archived</option>
                        </select>

                        <select
                            value={featured}
                            onChange={(e) => setFeatured(e.target.value)}
                            className="w-full py-2 rounded-xl border-stone-200 focus:border-amber-500 focus:ring-amber-500 text-sm"
                        >
                            <option value="">All Featured</option>
                            <option value="1">Featured Only</option>
                            <option value="0">Regular Only</option>
                        </select>

                        <select
                            value={areaId}
                            onChange={(e) => setAreaId(e.target.value)}
                            className="w-full py-2 rounded-xl border-stone-200 focus:border-amber-500 focus:ring-amber-500 text-sm"
                        >
                            <option value="">All Areas</option>
                            {areas.map((area) => (
                                <option key={area.id} value={area.id}>{area.name_en}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-stone-50 border-b border-stone-200">
                                    <th className="px-6 py-4 text-xs font-semibold text-stone-500 uppercase tracking-wider">Title / Area</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-stone-500 uppercase tracking-wider">Land Use / Ownership</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-stone-500 uppercase tracking-wider text-center">Featured</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-stone-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-stone-500 uppercase tracking-wider">Published</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-stone-500 uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100">
                                {opportunities.data.map((opportunity) => (
                                    <tr key={opportunity.id} className="hover:bg-stone-50 transition">
                                        <td className="px-6 py-4">
                                            <div className="font-semibold text-stone-900 truncate max-w-xs">{opportunity.title_en}</div>
                                            <div className="text-xs text-stone-500">{opportunity.area?.name_en || 'N/A'}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-stone-700">{opportunity.land_use?.name_en || 'N/A'}</div>
                                            <div className="text-xs text-stone-500">{opportunity.ownership_type?.name_en || 'N/A'}</div>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            {opportunity.is_featured ? (
                                                <Star size={18} className="mx-auto text-amber-500 fill-amber-500" />
                                            ) : (
                                                <Star size={18} className="mx-auto text-stone-300" />
                                            )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(opportunity.status)}`}>
                                                {opportunity.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-500">
                                            <div className="flex items-center gap-1.5">
                                                <Clock size={14} />
                                                {opportunity.published_at ? new Date(opportunity.published_at).toLocaleDateString() : 'N/A'}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    href={route('admin.opportunities.edit', opportunity.id)}
                                                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-stone-100 text-stone-600 hover:bg-amber-100 hover:text-amber-700 transition"
                                                >
                                                    <Edit size={18} />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(opportunity.id)}
                                                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-stone-100 text-stone-600 hover:bg-red-100 hover:text-red-700 transition"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {opportunities.data.length === 0 && (
                                    <tr>
                                        <td colSpan="6" className="px-6 py-12 text-center text-stone-500">
                                            No opportunities found matching your criteria.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    {opportunities.links && opportunities.links.length > 3 && (
                        <div className="px-6 py-4 border-t border-stone-100 flex items-center justify-center gap-2">
                            {opportunities.links.map((link) => (
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
