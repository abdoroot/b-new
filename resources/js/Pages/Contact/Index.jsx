import { useForm, usePage } from '@inertiajs/react';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import FrontLayout from '../../Layouts/FrontLayout';
import { t } from '../../lib/translations';

const inputClass =
    'w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-amber-700/40 focus:ring-2 focus:ring-amber-700/10';

export default function ContactIndex({ leadPurposes = [], priceRanges = [], areas = [] }) {
    const { siteSettings = {} } = usePage().props;

    const { data, setData, post, processing, reset, errors, wasSuccessful } = useForm({
        name: '',
        phone: '',
        email: '',
        budget_range_id: '',
        lead_purpose_id: '',
        preferred_area_id: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/leads', {
            onSuccess: () => reset(),
        });
    };

    return (
        <FrontLayout>
            <main className="bg-stone-50">
                <section className="bg-[#f5f1e8]">
                    <div className="container-shell py-12 sm:py-16">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                            {t('public.contact.eyebrow')}
                        </p>

                        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-stone-950 sm:text-5xl">
                            {t('public.contact.title')}
                        </h1>

                        <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600">
                            {t('public.contact.description')}
                        </p>
                    </div>
                </section>

                <section className="container-shell py-12 sm:py-16">
                    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                        <div className="space-y-6">
                            {wasSuccessful && (
                                <div className="rounded-2xl bg-emerald-50 p-4 text-sm font-medium text-emerald-800 border border-emerald-100">
                                    {t('public.contact.success')}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <input 
                                            className={inputClass} 
                                            placeholder={t('forms.fields.name')} 
                                            value={data.name}
                                            onChange={e => setData('name', e.target.value)}
                                            required
                                        />
                                        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <input 
                                            className={inputClass} 
                                            placeholder={t('forms.fields.phone')} 
                                            value={data.phone}
                                            onChange={e => setData('phone', e.target.value)}
                                            required
                                        />
                                        {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                                    </div>

                                    <div className="sm:col-span-2">
                                        <input 
                                            type="email"
                                            className={inputClass} 
                                            placeholder={t('forms.fields.email_address')} 
                                            value={data.email}
                                            onChange={e => setData('email', e.target.value)}
                                        />
                                        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                                    </div>
                                    
                                    <div>
                                        <select 
                                            className={inputClass} 
                                            value={data.budget_range_id}
                                            onChange={e => setData('budget_range_id', e.target.value)}
                                        >
                                            <option value="">{t('forms.fields.budget_range')}</option>
                                            {priceRanges.map(range => (
                                                <option key={range.id} value={range.id}>{range.label}</option>
                                            ))}
                                        </select>
                                        {errors.budget_range_id && <p className="mt-1 text-xs text-red-600">{errors.budget_range_id}</p>}
                                    </div>

                                    <div>
                                        <select 
                                            className={inputClass} 
                                            value={data.lead_purpose_id}
                                            onChange={e => setData('lead_purpose_id', e.target.value)}
                                        >
                                            <option value="">{t('forms.fields.purpose')}</option>
                                            {leadPurposes.map(purpose => (
                                                <option key={purpose.id} value={purpose.id}>{purpose.label}</option>
                                            ))}
                                        </select>
                                        {errors.lead_purpose_id && <p className="mt-1 text-xs text-red-600">{errors.lead_purpose_id}</p>}
                                    </div>

                                    <div className="sm:col-span-2">
                                        <select 
                                            className={inputClass} 
                                            value={data.preferred_area_id}
                                            onChange={e => setData('preferred_area_id', e.target.value)}
                                        >
                                            <option value="">{t('forms.fields.preferred_area')}</option>
                                            {areas.map(area => (
                                                <option key={area.id} value={area.id}>{area.label}</option>
                                            ))}
                                        </select>
                                        {errors.preferred_area_id && <p className="mt-1 text-xs text-red-600">{errors.preferred_area_id}</p>}
                                    </div>

                                    <div className="sm:col-span-2">
                                        <textarea
                                            className={inputClass}
                                            rows="5"
                                            placeholder={t('forms.fields.message')}
                                            value={data.message}
                                            onChange={e => setData('message', e.target.value)}
                                            required
                                        />
                                        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="inline-flex items-center gap-2 rounded-xl bg-neutral-950 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:bg-neutral-800"
                                    >
                                        {processing ? t('forms.actions.sending') : t('forms.actions.send_request')}
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="rounded-[2rem] border border-amber-700/10 bg-white p-6 shadow-sm sm:p-8">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                                {t('public.contact.advisory_contact')}
                            </p>

                            <h2 className="mt-4 text-2xl font-semibold text-stone-950">
                                {t('public.contact.direct_title')}
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-stone-600">
                                {t('public.contact.direct_description', {
                                    company: siteSettings.company_name || 'Al Barakah Real Estate',
                                })}
                            </p>

                            <div className="mt-8 space-y-4 text-sm text-stone-700">
                                <p className="flex items-start gap-3">
                                    <MapPin size={18} className="mt-0.5 text-amber-700" />
                                    <span>{siteSettings.contact_address || "Rolla, Mall Office 415, Sharjah, UAE"}</span>
                                </p>
                                <p className="flex items-center gap-3">
                                    <Phone size={18} className="text-amber-700" />
                                    <span>{siteSettings.contact_phone || "065 556 777"}</span>
                                </p>
                                <p className="flex items-center gap-3">
                                    <Mail size={18} className="text-amber-700" />
                                    <span>{siteSettings.contact_email || "info@barakahre.com"}</span>
                                </p>
                            </div>

                            <a
                                href={siteSettings.contact_whatsapp_url || "https://wa.me/971XXXXXXXXX"}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f766e] px-5 py-[13px] text-sm font-semibold text-white transition hover:bg-[#115e59]"
                            >
                                <MessageCircle size={18} />
                                {t('public.nav.whatsapp_consultation')}
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </FrontLayout>
    );
}
