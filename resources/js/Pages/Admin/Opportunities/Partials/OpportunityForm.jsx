import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { useEffect } from 'react';
import { Str } from '@/utils/helpers'; // Assuming we might want a slug helper, but we'll do it manually for now

export default function OpportunityForm({ opportunity, areas, landUses, ownershipTypes, priceRanges, isEditing = false }) {
    const { data, setData, post, patch, processing, errors, transform } = useForm({
        title_en: opportunity?.title_en || '',
        slug: opportunity?.slug || '',
        area_id: opportunity?.area_id || '',
        land_use_id: opportunity?.land_use_id || '',
        ownership_type_id: opportunity?.ownership_type_id || '',
        price_range_id: opportunity?.price_range_id || '',
        location_en: opportunity?.location_en || '',
        short_description_en: opportunity?.short_description_en || '',
        investment_insight_en: opportunity?.investment_insight_en || '',
        area_growth_trigger_en: opportunity?.area_growth_trigger_en || '',
        is_featured: opportunity?.is_featured || false,
        status: opportunity?.status || 'draft',
        sort_order: opportunity?.sort_order || 0,
        published_at: opportunity?.published_at ? new Date(opportunity.published_at).toISOString().split('T')[0] : '',
    });

    useEffect(() => {
        if (!isEditing && data.title_en) {
            setData('slug', data.title_en.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-'));
        }
    }, [data.title_en]);

    const submit = (e) => {
        e.preventDefault();
        if (isEditing) {
            patch(route('admin.opportunities.update', opportunity.id));
        } else {
            post(route('admin.opportunities.store'));
        }
    };

    return (
        <form onSubmit={submit} className="space-y-8">
            <div className="grid gap-6 lg:grid-cols-2">
                {/* Basic Info */}
                <div className="space-y-6 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                    <h2 className="text-lg font-semibold text-stone-900">Basic Information</h2>
                    
                    <div>
                        <InputLabel htmlFor="title_en" value="Title (English)" />
                        <TextInput
                            id="title_en"
                            type="text"
                            value={data.title_en}
                            className="mt-1 block w-full"
                            onChange={(e) => setData('title_en', e.target.value)}
                            required
                        />
                        <InputError message={errors.title_en} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="slug" value="Slug" />
                        <TextInput
                            id="slug"
                            type="text"
                            value={data.slug}
                            className="mt-1 block w-full bg-stone-50"
                            onChange={(e) => setData('slug', e.target.value)}
                            required
                        />
                        <InputError message={errors.slug} className="mt-2" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <InputLabel htmlFor="area_id" value="Area" />
                            <select
                                id="area_id"
                                value={data.area_id}
                                className="mt-1 block w-full rounded-xl border-stone-200 focus:border-amber-500 focus:ring-amber-500 text-sm"
                                onChange={(e) => setData('area_id', e.target.value)}
                            >
                                <option value="">Select Area</option>
                                {areas.map((area) => (
                                    <option key={area.id} value={area.id}>{area.name_en}</option>
                                ))}
                            </select>
                            <InputError message={errors.area_id} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="land_use_id" value="Land Use" />
                            <select
                                id="land_use_id"
                                value={data.land_use_id}
                                className="mt-1 block w-full rounded-xl border-stone-200 focus:border-amber-500 focus:ring-amber-500 text-sm"
                                onChange={(e) => setData('land_use_id', e.target.value)}
                            >
                                <option value="">Select Use</option>
                                {landUses.map((use) => (
                                    <option key={use.id} value={use.id}>{use.name_en}</option>
                                ))}
                            </select>
                            <InputError message={errors.land_use_id} className="mt-2" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <InputLabel htmlFor="ownership_type_id" value="Ownership Type" />
                            <select
                                id="ownership_type_id"
                                value={data.ownership_type_id}
                                className="mt-1 block w-full rounded-xl border-stone-200 focus:border-amber-500 focus:ring-amber-500 text-sm"
                                onChange={(e) => setData('ownership_type_id', e.target.value)}
                            >
                                <option value="">Select Type</option>
                                {ownershipTypes.map((type) => (
                                    <option key={type.id} value={type.id}>{type.name_en}</option>
                                ))}
                            </select>
                            <InputError message={errors.ownership_type_id} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="price_range_id" value="Price Range" />
                            <select
                                id="price_range_id"
                                value={data.price_range_id}
                                className="mt-1 block w-full rounded-xl border-stone-200 focus:border-amber-500 focus:ring-amber-500 text-sm"
                                onChange={(e) => setData('price_range_id', e.target.value)}
                            >
                                <option value="">Select Range</option>
                                {priceRanges.map((range) => (
                                    <option key={range.id} value={range.id}>{range.label_en}</option>
                                ))}
                            </select>
                            <InputError message={errors.price_range_id} className="mt-2" />
                        </div>
                    </div>

                    <div>
                        <InputLabel htmlFor="location_en" value="Specific Location" />
                        <TextInput
                            id="location_en"
                            type="text"
                            value={data.location_en}
                            className="mt-1 block w-full"
                            onChange={(e) => setData('location_en', e.target.value)}
                        />
                        <InputError message={errors.location_en} className="mt-2" />
                    </div>
                </div>

                {/* Status & Settings */}
                <div className="space-y-6 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                    <h2 className="text-lg font-semibold text-stone-900">Visibility & Status</h2>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <InputLabel htmlFor="status" value="Status" />
                            <select
                                id="status"
                                value={data.status}
                                className="mt-1 block w-full rounded-xl border-stone-200 focus:border-amber-500 focus:ring-amber-500 text-sm"
                                onChange={(e) => setData('status', e.target.value)}
                            >
                                <option value="draft">Draft</option>
                                <option value="published">Published</option>
                                <option value="archived">Archived</option>
                            </select>
                            <InputError message={errors.status} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="published_at" value="Publish Date" />
                            <TextInput
                                id="published_at"
                                type="date"
                                value={data.published_at}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('published_at', e.target.value)}
                            />
                            <InputError message={errors.published_at} className="mt-2" />
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 rounded-xl border border-amber-500/10 bg-amber-500/5">
                        <input
                            id="is_featured"
                            type="checkbox"
                            checked={data.is_featured}
                            className="rounded border-amber-300 text-amber-500 focus:ring-amber-500"
                            onChange={(e) => setData('is_featured', e.target.checked)}
                        />
                        <label htmlFor="is_featured" className="text-sm font-medium text-amber-900">
                            Feature this opportunity on the home page
                        </label>
                    </div>

                    <div>
                        <InputLabel htmlFor="sort_order" value="Sort Order" />
                        <TextInput
                            id="sort_order"
                            type="number"
                            value={data.sort_order}
                            className="mt-1 block w-full"
                            onChange={(e) => setData('sort_order', e.target.value)}
                        />
                        <InputError message={errors.sort_order} className="mt-2" />
                    </div>
                </div>
            </div>

            {/* Descriptions & Insights */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-6">
                <h2 className="text-lg font-semibold text-stone-900">Detailed Content</h2>
                
                <div>
                    <InputLabel htmlFor="short_description_en" value="Short Description" />
                    <textarea
                        id="short_description_en"
                        value={data.short_description_en}
                        rows="3"
                        className="mt-1 block w-full rounded-xl border-stone-200 focus:border-amber-500 focus:ring-amber-500 text-sm"
                        onChange={(e) => setData('short_description_en', e.target.value)}
                    />
                    <InputError message={errors.short_description_en} className="mt-2" />
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                        <InputLabel htmlFor="investment_insight_en" value="Investment Insight" />
                        <textarea
                            id="investment_insight_en"
                            value={data.investment_insight_en}
                            rows="4"
                            className="mt-1 block w-full rounded-xl border-stone-200 focus:border-amber-500 focus:ring-amber-500 text-sm"
                            onChange={(e) => setData('investment_insight_en', e.target.value)}
                        />
                        <InputError message={errors.investment_insight_en} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="area_growth_trigger_en" value="Area Growth Trigger" />
                        <textarea
                            id="area_growth_trigger_en"
                            value={data.area_growth_trigger_en}
                            rows="4"
                            className="mt-1 block w-full rounded-xl border-stone-200 focus:border-amber-500 focus:ring-amber-500 text-sm"
                            onChange={(e) => setData('area_growth_trigger_en', e.target.value)}
                        />
                        <InputError message={errors.area_growth_trigger_en} className="mt-2" />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-end gap-4">
                <Link
                    href={route('admin.opportunities.index')}
                    className="text-sm font-medium text-stone-500 hover:text-stone-700"
                >
                    Cancel
                </Link>
                <PrimaryButton disabled={processing}>
                    {isEditing ? 'Save Changes' : 'Create Opportunity'}
                </PrimaryButton>
            </div>
        </form>
    );
}
