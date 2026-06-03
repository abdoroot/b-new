import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm } from '@inertiajs/react';
import { Save, Building, Phone, Mail, MapPin, Globe, MessageCircle } from 'lucide-react';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { t } from '@/lib/translations';

export default function Edit({ settings }) {
    const settingsMap = settings.reduce((acc, s) => {
        acc[s.key] = s.value || '';
        return acc;
    }, {});

    const { data, setData, patch, processing, errors } = useForm({
        settings: {
            company_name: settingsMap.company_name || '',
            site_positioning: settingsMap.site_positioning || '',
            contact_address: settingsMap.contact_address || '',
            contact_phone: settingsMap.contact_phone || '',
            contact_email: settingsMap.contact_email || '',
            contact_whatsapp: settingsMap.contact_whatsapp || '',
            contact_whatsapp_url: settingsMap.contact_whatsapp_url || '',
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(route('admin.site-settings.update'));
    };

    const handleSettingChange = (key, value) => {
        setData('settings', {
            ...data.settings,
            [key]: value,
        });
    };

    return (
        <AdminLayout>
            <Head title={t('admin.site_settings.title')} />
            
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-stone-900">{t('admin.site_settings.title')}</h1>
                    <p className="text-stone-500">{t('admin.site_settings.description')}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* General Settings */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
                            <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                                <Building size={20} />
                            </div>
                            <h2 className="text-lg font-semibold text-stone-900">{t('admin.site_settings.general_information')}</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <InputLabel htmlFor="company_name" value={t('forms.fields.company_name')} />
                                <TextInput
                                    id="company_name"
                                    value={data.settings.company_name}
                                    onChange={(e) => handleSettingChange('company_name', e.target.value)}
                                    className="w-full"
                                />
                                <InputError message={errors['settings.company_name']} />
                            </div>
                            <div className="space-y-2">
                                <InputLabel htmlFor="site_positioning" value={t('forms.fields.site_positioning')} />
                                <TextInput
                                    id="site_positioning"
                                    value={data.settings.site_positioning}
                                    onChange={(e) => handleSettingChange('site_positioning', e.target.value)}
                                    className="w-full"
                                />
                                <InputError message={errors['settings.site_positioning']} />
                            </div>
                        </div>
                    </div>

                    {/* Contact Settings */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
                            <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                                <Phone size={20} />
                            </div>
                            <h2 className="text-lg font-semibold text-stone-900">{t('admin.site_settings.contact_details')}</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <InputLabel htmlFor="contact_email" value={t('forms.fields.contact_email')} />
                                    <TextInput
                                        id="contact_email"
                                        type="email"
                                        value={data.settings.contact_email}
                                        onChange={(e) => handleSettingChange('contact_email', e.target.value)}
                                        className="w-full"
                                    />
                                    <InputError message={errors['settings.contact_email']} />
                                </div>
                                <div className="space-y-2">
                                    <InputLabel htmlFor="contact_phone" value={t('forms.fields.contact_phone')} />
                                    <TextInput
                                        id="contact_phone"
                                        value={data.settings.contact_phone}
                                        onChange={(e) => handleSettingChange('contact_phone', e.target.value)}
                                        className="w-full"
                                    />
                                    <InputError message={errors['settings.contact_phone']} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <InputLabel htmlFor="contact_address" value={t('forms.fields.contact_address')} />
                                <textarea
                                    id="contact_address"
                                    value={data.settings.contact_address}
                                    onChange={(e) => handleSettingChange('contact_address', e.target.value)}
                                    className="w-full rounded-xl border-stone-200 text-stone-900 focus:border-amber-500 focus:ring-amber-500 shadow-sm transition"
                                    rows="3"
                                />
                                <InputError message={errors['settings.contact_address']} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-stone-50">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 mb-1">
                                        <MessageCircle size={16} className="text-green-600" />
                                        <InputLabel htmlFor="contact_whatsapp" value={t('forms.fields.whatsapp_number')} />
                                    </div>
                                    <TextInput
                                        id="contact_whatsapp"
                                        value={data.settings.contact_whatsapp}
                                        onChange={(e) => handleSettingChange('contact_whatsapp', e.target.value)}
                                        className="w-full"
                                        placeholder={t('admin.site_settings.whatsapp_number_placeholder')}
                                    />
                                    <InputError message={errors['settings.contact_whatsapp']} />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Globe size={16} className="text-blue-600" />
                                        <InputLabel htmlFor="contact_whatsapp_url" value={t('forms.fields.whatsapp_url')} />
                                    </div>
                                    <TextInput
                                        id="contact_whatsapp_url"
                                        value={data.settings.contact_whatsapp_url}
                                        onChange={(e) => handleSettingChange('contact_whatsapp_url', e.target.value)}
                                        className="w-full"
                                        placeholder={t('admin.site_settings.whatsapp_url_placeholder')}
                                    />
                                    <InputError message={errors['settings.contact_whatsapp_url']} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-end">
                        <PrimaryButton
                            className="flex items-center gap-2"
                            disabled={processing}
                        >
                            <Save size={18} />
                            {t('forms.actions.save_settings')}
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
