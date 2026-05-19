import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import OpportunityForm from './Partials/OpportunityForm';
import { ArrowLeft } from 'lucide-react';

export default function Edit({ opportunity, areas, landUses, ownershipTypes, priceRanges }) {
    return (
        <AdminLayout>
            <Head title={`Edit ${opportunity.title_en}`} />

            <div className="max-w-5xl mx-auto space-y-8">
                <div className="flex items-center gap-4">
                    <Link
                        href={route('admin.opportunities.index')}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-600 hover:bg-stone-50 transition"
                    >
                        <ArrowLeft size={20} />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-stone-900 tracking-tight">Edit Opportunity</h1>
                        <p className="text-sm text-stone-500 mt-1">Updating: {opportunity.title_en}</p>
                    </div>
                </div>

                <OpportunityForm 
                    opportunity={opportunity}
                    areas={areas} 
                    landUses={landUses} 
                    ownershipTypes={ownershipTypes} 
                    priceRanges={priceRanges} 
                    isEditing={true}
                />
            </div>
        </AdminLayout>
    );
}
