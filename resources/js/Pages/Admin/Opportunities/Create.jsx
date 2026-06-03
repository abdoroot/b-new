import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import OpportunityForm from './Partials/OpportunityForm';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { t, useLocale } from '@/lib/translations';

export default function Create({ areas, landUses, ownershipTypes, priceRanges }) {
    const locale = useLocale();

    return (
        <AdminLayout>
            <Head title={t('admin.opportunities.create_title')} />

            <div className="max-w-5xl mx-auto space-y-8">
                <div className="flex items-center gap-4">
                    <Link
                        href={route('admin.opportunities.index')}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-600 hover:bg-stone-50 transition"
                    >
                        {locale.direction === 'rtl' ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-stone-900 tracking-tight">{t('admin.opportunities.create_title')}</h1>
                        <p className="text-sm text-stone-500 mt-1">{t('admin.opportunities.create_description')}</p>
                    </div>
                </div>

                <OpportunityForm 
                    areas={areas} 
                    landUses={landUses} 
                    ownershipTypes={ownershipTypes} 
                    priceRanges={priceRanges} 
                />
            </div>
        </AdminLayout>
    );
}
