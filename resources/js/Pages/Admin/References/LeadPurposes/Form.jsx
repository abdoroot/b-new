import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Save } from 'lucide-react';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import Checkbox from '@/Components/Checkbox';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Form({ item }) {
    const isEditing = !!item;
    
    const { data, setData, post, patch, processing, errors } = useForm({
        label_en: item?.label_en || '',
        label_ar: item?.label_ar || '',
        slug: item?.slug || '',
        is_active: item?.is_active ?? true,
        sort_order: item?.sort_order || 0,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            patch(route('admin.references.lead-purposes.update', item.id));
        } else {
            post(route('admin.references.lead-purposes.store'));
        }
    };

    return (
        <AdminLayout>
            <Head title={isEditing ? `Edit Lead Purpose: ${item.label_en}` : 'Create Lead Purpose'} />
            
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <Link
                        href={route('admin.references.lead-purposes.index')}
                        className="p-2 bg-white border border-stone-200 text-stone-500 rounded-xl hover:text-stone-900 transition shadow-sm"
                    >
                        <ArrowLeft size={20} />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-stone-900">
                            {isEditing ? 'Edit Lead Purpose' : 'Create Lead Purpose'}
                        </h1>
                        <p className="text-stone-500">
                            {isEditing ? `Updating ${item.label_en}` : 'Add a new lead purpose.'}
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <InputLabel htmlFor="label_en" value="Label (EN)" />
                                <TextInput
                                    id="label_en"
                                    value={data.label_en}
                                    onChange={(e) => setData('label_en', e.target.value)}
                                    className="w-full"
                                    required
                                />
                                <InputError message={errors.label_en} />
                            </div>
                            <div className="space-y-2">
                                <InputLabel htmlFor="label_ar" value="Label (AR)" />
                                <TextInput
                                    id="label_ar"
                                    value={data.label_ar}
                                    onChange={(e) => setData('label_ar', e.target.value)}
                                    className="w-full text-right"
                                    dir="rtl"
                                />
                                <InputError message={errors.label_ar} />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <InputLabel htmlFor="slug" value="Slug" />
                                <TextInput
                                    id="slug"
                                    value={data.slug}
                                    onChange={(e) => setData('slug', e.target.value)}
                                    className="w-full"
                                    required
                                />
                                <InputError message={errors.slug} />
                            </div>
                            <div className="space-y-2">
                                <InputLabel htmlFor="sort_order" value="Sort Order" />
                                <TextInput
                                    id="sort_order"
                                    type="number"
                                    value={data.sort_order}
                                    onChange={(e) => setData('sort_order', e.target.value)}
                                    className="w-full"
                                />
                                <InputError message={errors.sort_order} />
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <Checkbox
                                id="is_active"
                                checked={data.is_active}
                                onChange={(e) => setData('is_active', e.target.checked)}
                            />
                            <InputLabel htmlFor="is_active" value="Active" />
                            <InputError message={errors.is_active} />
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-4">
                        <Link
                            href={route('admin.references.lead-purposes.index')}
                            className="text-sm font-medium text-stone-600 hover:text-stone-900 transition"
                        >
                            Cancel
                        </Link>
                        <PrimaryButton
                            className="flex items-center gap-2"
                            disabled={processing}
                        >
                            <Save size={18} />
                            {isEditing ? 'Update Lead Purpose' : 'Save Lead Purpose'}
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
