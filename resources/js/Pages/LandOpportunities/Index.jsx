import FrontLayout from '../../Layouts/FrontLayout';
import OpportunityCard from '../../Components/LandOpportunity/OpportunityCard';
import PrimaryButton from '../../Components/PrimaryButton';
import { opportunityList } from '../../data/mockData';

const filterClass =
    'w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700 outline-none transition focus:border-amber-700/40 focus:ring-2 focus:ring-amber-700/10';

export default function LandOpportunitiesIndex() {
    return (
        <FrontLayout>
            <main className="bg-stone-50">
                <section className="bg-[#f5f1e8]">
                    <div className="container-shell py-12 sm:py-16">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                            Land Opportunities
                        </p>

                        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-stone-950 sm:text-5xl">
                            Curated Sharjah land opportunities.
                        </h1>

                        <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600">
                            Investment-focused shortlists filtered by area, price range, ownership eligibility, and land use.
                        </p>

                        <div className="mt-8 rounded-3xl border border-stone-200 bg-white p-4 shadow-sm sm:p-5">
                            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                                <select className={filterClass} defaultValue="">
                                    <option value="" disabled>
                                        Select area
                                    </option>
                                    <option>Al Saja’a</option>
                                    <option>Al Rahmaniya</option>
                                    <option>Muwaileh</option>
                                    <option>Al Tai</option>
                                </select>

                                <select className={filterClass} defaultValue="">
                                    <option value="" disabled>
                                        Price range
                                    </option>
                                    <option>Under AED 1M</option>
                                    <option>AED 1M – 3M</option>
                                    <option>AED 3M – 5M</option>
                                    <option>Above AED 5M</option>
                                </select>

                                <select className={filterClass} defaultValue="">
                                    <option value="" disabled>
                                        Ownership eligibility
                                    </option>
                                    <option>Freehold – All Nationalities</option>
                                    <option>UAE & GCC Nationals</option>
                                    <option>Restricted Ownership</option>
                                </select>

                                <select className={filterClass} defaultValue="">
                                    <option value="" disabled>
                                        Land use
                                    </option>
                                    <option>Industrial</option>
                                    <option>Commercial</option>
                                    <option>Mixed-use</option>
                                    <option>Residential</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container-shell py-12 sm:py-16">
                    <div className="space-y-8">

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {opportunityList.map((opportunity) => (
                                <OpportunityCard
                                    key={opportunity.slug}
                                    opportunity={opportunity}
                                />
                            ))}
                        </div>

                        <div className="rounded-3xl border border-amber-700/10 bg-white p-6 shadow-sm sm:flex sm:items-center sm:justify-between sm:gap-6">
                            <p className="text-sm leading-7 text-stone-700">
                                Need details on matching land opportunities? Share your brief and our advisory team will respond.
                            </p>

                            <PrimaryButton className="mt-4 bg-neutral-950 text-amber-100 hover:bg-neutral-800 sm:mt-0">
                                Request details
                            </PrimaryButton>
                        </div>
                    </div>
                </section>
            </main>
        </FrontLayout>
    );
}