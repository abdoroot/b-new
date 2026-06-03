import PrimaryButton from '../PrimaryButton';
import { t } from '../../lib/translations';

export default function LeadCaptureBlock() {
    return (
        <section className="card-shell p-6 sm:p-8">
            <p className="label-muted">{t('public.lead.request_curated')}</p>
            <h3 className="mt-2 text-xl font-semibold text-stone-900">{t('public.lead.share_brief')}</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <input className="rounded-xl border border-stone-300 px-4 py-3 text-sm" placeholder={t('public.lead.area')} />
                <input className="rounded-xl border border-stone-300 px-4 py-3 text-sm" placeholder={t('public.lead.budget')} />
                <input className="rounded-xl border border-stone-300 px-4 py-3 text-sm" placeholder={t('public.lead.land_type')} />
            </div>
            <PrimaryButton className="mt-4 w-full sm:w-auto">{t('public.lead.request_matches')}</PrimaryButton>
        </section>
    );
}
