import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Edit2, Plus, Trash2 } from 'lucide-react';

export default function Index({ items }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this price range?')) {
            destroy(route('admin.references.price-ranges.destroy', id));
        }
    };

    const formatCurrency = (amount) => {
        if (amount === null || amount === undefined) return '-';
        return new Intl.NumberFormat('en-AE', { style: 'currency', currency: 'AED', maximumFractionDigits: 0 }).format(amount);
    };

    return (
        <AdminLayout>
            <Head title="Price Ranges" />
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-stone-900">Price Ranges</h1>
                    <p className="text-stone-500">Manage price filter ranges.</p>
                </div>
                <Link
                    href={route('admin.references.price-ranges.create')}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-xl font-semibold hover:bg-amber-600 transition"
                >
                    <Plus size={18} />
                    Add Price Range
                </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-stone-50 border-b border-stone-200">
                                <th className="px-6 py-4 text-xs font-semibold text-stone-500 uppercase">Sort</th>
                                <th className="px-6 py-4 text-xs font-semibold text-stone-500 uppercase">Label (EN)</th>
                                <th className="px-6 py-4 text-xs font-semibold text-stone-500 uppercase">Range</th>
                                <th className="px-6 py-4 text-xs font-semibold text-stone-500 uppercase">Status</th>
                                <th className="px-6 py-4 text-xs font-semibold text-stone-500 uppercase text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100">
                            {items.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="px-6 py-12 text-center text-stone-500">
                                        No price ranges found.
                                    </td>
                                </tr>
                            ) : (
                                items.map((item) => (
                                    <tr key={item.id} className="hover:bg-stone-50/50 transition">
                                        <td className="px-6 py-4 text-sm text-stone-500">{item.sort_order}</td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-medium text-stone-900">{item.label_en}</div>
                                            <div className="text-xs text-stone-400">{item.slug}</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-stone-500">
                                            {formatCurrency(item.min_amount)} - {formatCurrency(item.max_amount)}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                item.is_active ? 'bg-green-100 text-green-800' : 'bg-stone-100 text-stone-800'
                                            }`}>
                                                {item.is_active ? 'Active' : 'Inactive'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    href={route('admin.references.price-ranges.edit', item.id)}
                                                    className="p-2 text-stone-400 hover:text-amber-500 transition"
                                                >
                                                    <Edit2 size={18} />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(item.id)}
                                                    className="p-2 text-stone-400 hover:text-red-500 transition"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
}
