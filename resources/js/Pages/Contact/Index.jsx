import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import FrontLayout from '../../Layouts/FrontLayout';
import PrimaryButton from '../../Components/PrimaryButton';

const inputClass =
    'w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-amber-700/40 focus:ring-2 focus:ring-amber-700/10';

export default function ContactIndex() {
    return (
        <FrontLayout>
            <main className="bg-stone-50">
                <section className="bg-[#f5f1e8]">
                    <div className="container-shell py-12 sm:py-16">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                            Contact
                        </p>

                        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-stone-950 sm:text-5xl">
                            Request curated Sharjah land opportunities.
                        </h1>

                        <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600">
                            Share your budget, purpose, and preferred area. Our advisory team will review your brief and respond with suitable land opportunities.
                        </p>
                    </div>
                </section>

                <section className="container-shell py-12 sm:py-16">
                    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                        <form className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <input className={inputClass} placeholder="Name" />
                                <input className={inputClass} placeholder="Phone" />
                                <select className={inputClass} defaultValue="">
                                    <option value="" disabled>
                                        Budget range
                                    </option>
                                    <option>Under AED 1M</option>
                                    <option>AED 1M – 3M</option>
                                    <option>AED 3M – 5M</option>
                                    <option>Above AED 5M</option>
                                </select>
                                <select className={inputClass} defaultValue="">
                                    <option value="" disabled>
                                        Purpose
                                    </option>
                                    <option>Investment</option>
                                    <option>End-use</option>
                                    <option>Development</option>
                                    <option>Land banking</option>
                                </select>
                                <input className={`${inputClass} sm:col-span-2`} placeholder="Preferred area" />
                                <textarea
                                    className={`${inputClass} sm:col-span-2`}
                                    rows="5"
                                    placeholder="Tell us what type of land opportunity you are looking for"
                                />
                            </div>

                            <div className="mt-6">
                                <PrimaryButton className="w-full bg-neutral-950 text-amber-100 hover:bg-neutral-800 sm:w-auto">
                                    Send request
                                </PrimaryButton>
                            </div>
                        </form>

                        <div className="rounded-[2rem] border border-amber-700/10 bg-white p-6 shadow-sm sm:p-8">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                                Advisory contact
                            </p>

                            <h2 className="mt-4 text-2xl font-semibold text-stone-950">
                                Prefer direct contact?
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-stone-600">
                                You can contact Barakah Real Estate directly to discuss current land opportunities and ownership eligibility.
                            </p>

                            <div className="mt-8 space-y-4 text-sm text-stone-700">
                                <p className="flex items-start gap-3">
                                    <MapPin size={18} className="mt-0.5 text-amber-700" />
                                    <span>Rolla, Mall Office 415, Sharjah, UAE</span>
                                </p>
                                <p className="flex items-center gap-3">
                                    <Phone size={18} className="text-amber-700" />
                                    <span>065 556 777</span>
                                </p>
                                <p className="flex items-center gap-3">
                                    <Mail size={18} className="text-amber-700" />
                                    <span>info@barakahre.com</span>
                                </p>
                            </div>

                            <a
                                href="https://wa.me/971XXXXXXXXX"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f766e] px-5 py-[13px] text-sm font-semibold text-white transition hover:bg-[#115e59]"
                            >
                                <MessageCircle size={18} />
                                WhatsApp Consultation
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </FrontLayout>
    );
}