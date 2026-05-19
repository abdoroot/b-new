import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import OpportunityForm from './Partials/OpportunityForm';
import { ArrowLeft } from 'lucide-react';

export default function Create({ areas, landUses, ownershipTypes, priceRanges }) {
    return (
        <AdminLayout>
            <Head title="Create Opportunity" />

            <div className="max-w-5xl mx-auto space-y-8">
                <div className="flex items-center gap-4">
                    <Link
                        href={route('admin.opportunities.index')}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-600 hover:bg-stone-50 transition"
                    >
                        <ArrowLeft size={20} />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-stone-900 tracking-tight">Create New Opportunity</h1>
                        <p className="text-sm text-stone-500 mt-1">Fill in the details to list a new land opportunity.</p>
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
