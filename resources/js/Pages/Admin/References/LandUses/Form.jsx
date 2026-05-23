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
        name_en: item?.name_en || '',
        name_ar: item?.name_ar || '',
        slug: item?.slug || '',
        is_active: item?.is_active ?? true,
        sort_order: item?.sort_order || 0,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            patch(route('admin.references.land-uses.update', item.id));
        } else {
            post(route('admin.references.land-uses.store'));
        }
    };

    return (
        <AdminLayout>
            <Head title={isEditing ? `Edit Land Use: ${item.name_en}` : 'Create Land Use'} />
            
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <Link
                        href={route('admin.references.land-uses.index')}
                        className="p-2 bg-white border border-stone-200 text-stone-500 rounded-xl hover:text-stone-900 transition shadow-sm"
                    >
                        <ArrowLeft size={20} />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-stone-900">
                            {isEditing ? 'Edit Land Use' : 'Create Land Use'}
                        </h1>
                        <p className="text-stone-500">
                            {isEditing ? `Updating ${item.name_en}` : 'Add a new land use category.'}
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <InputLabel htmlFor="name_en" value="Name (EN)" />
                                <TextInput
                                    id="name_en"
                                    value={data.name_en}
                                    onChange={(e) => setData('name_en', e.target.value)}
                                    className="w-full"
                                    required
                                />
                                <InputError message={errors.name_en} />
                            </div>
                            <div className="space-y-2">
                                <InputLabel htmlFor="name_ar" value="Name (AR)" />
                                <TextInput
                                    id="name_ar"
                                    value={data.name_ar}
                                    onChange={(e) => setData('name_ar', e.target.value)}
                                    className="w-full text-right"
                                    dir="rtl"
                                />
                                <InputError message={errors.name_ar} />
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
                            href={route('admin.references.land-uses.index')}
                            className="text-sm font-medium text-stone-600 hover:text-stone-900 transition"
                        >
                            Cancel
                        </Link>
                        <PrimaryButton
                            className="flex items-center gap-2"
                            disabled={processing}
                        >
                            <Save size={18} />
                            {isEditing ? 'Update Land Use' : 'Save Land Use'}
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
