export default function Home() {
    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="relative px-8 py-20 lg:py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 space-y-8 z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container/30 text-secondary font-label text-sm font-semibold tracking-wide">
                            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>colors_spark</span>
                            REDEFINING DENTAL WELLNESS
                        </div>
                        <h1 className="font-headline text-5xl lg:text-7xl font-extrabold text-on-surface tracking-tight leading-[1.1]">
                            The sanctuary for <span className="text-primary italic">modern</span> restorative care.
                        </h1>
                        <p className="text-on-surface-variant text-lg lg:text-xl max-w-xl leading-relaxed font-body">
                            Where clinical precision meets editorial elegance. We invite you to experience a new standard of personalized dental health in a space designed for tranquility.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="glow-gradient text-on-primary px-10 py-4 rounded-full font-bold text-lg ambient-shadow transition-transform hover:scale-[1.02] active:scale-95">
                                Schedule Visit
                            </button>
                            <button className="bg-surface-container-highest text-on-surface px-10 py-4 rounded-full font-bold text-lg transition-all hover:bg-surface-container-high active:scale-95">
                                Our Philosophy
                            </button>
                        </div>
                    </div>
                    <div className="lg:col-span-5 relative">
                        <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden ambient-shadow rotate-2">
                            <img
                                alt="Modern minimalist dental clinic"
                                className="object-cover w-full h-full"
                                data-alt="Modern minimalist dental clinic interior with warm soft lighting, white oak paneling, and a single designer leather chair in a sunlit corner"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA2QexOfoG78auyH-pO7I27CLq89J9snzKIIUZZVWHt9Lbh8O8ELIjJGs3mosqCtXaLw9DIZf6baRyzMUfPUc0Bz1Hd1KWyKpoIHJgcgq-x-BtqdqF8U1T6oZp2LFo-i2hMt7Ki9zrPIXYEy8bjMuC2YfLMjJ7Nnt6VxiPoStPmy5DwP_7REvE3YTZpfMqDUpg_ag-5galNtMclbhKBjLIO-98HTH9wNSu88-gmomGtl9soDlVrDq9QswZ7wAo2JwsnFluNKq8_yWk"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-2xl ambient-shadow max-w-[240px] -rotate-3 border border-outline-variant/10">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                                </div>
                                <div className="text-sm font-bold font-headline">Clinical Excellence</div>
                            </div>
                            <p className="text-xs text-on-surface-variant leading-normal">Our protocols exceed global standards for safety and precision medical care.</p>
                        </div>
                    </div>
                </div>
                {/* Decorative Glow */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary-container/20 blur-[120px] rounded-full -z-10"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-secondary-container/20 blur-[100px] rounded-full -z-10"></div>
            </section>

            {/* Why Choose Us - Bento Grid Style */}
            <section className="px-8 py-24 bg-surface-container-low">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="font-headline text-3xl lg:text-5xl font-bold text-on-surface mb-6">Intentional Care.</h2>
                        <p className="text-on-surface-variant max-w-2xl text-lg">We've stripped away the anxiety of traditional clinics to reveal a restorative experience centered on your comfort.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
                        {/* Card 1 */}
                        <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-3xl ambient-shadow flex flex-col justify-between group transition-all duration-500 hover:bg-white">
                            <div className="max-w-md">
                                <span className="material-symbols-outlined text-4xl text-primary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
                                <h3 className="text-2xl font-bold font-headline mb-4">The Restorative Sanctuary</h3>
                                <p className="text-on-surface-variant leading-relaxed">Our spaces are acoustically treated and aromatically curated to ensure your visit feels like a retreat, not a procedure.</p>
                            </div>
                            <div className="mt-8 overflow-hidden rounded-xl h-48">
                                <img
                                    alt="Calm dental office"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                    data-alt="Close up of a minimalist dental office interior featuring light beige materials, soft diffused window light, and a small green plant"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKm2ragd0x7rXZUe-C4DewA4JjkRN5ULEzjWjlDfd7U4PEK7cWpT0Q0Cd0tt5yTBE0Y9zsyD8KIOB9S3zf5vzqbLgLJYYdzhq2pW5_Sw8UEYNiWbaVZgEDMWASPpJUE2nRkJWkGddR7p1w460PjN25CApF-BZyyeqd9UwzX45FMFaoonZKmjCspbcWXCeTOzIDiBM9rMRT-gqe09KTxOLCWzRVW12kPTKIE-ErpOQMM7Wd-RdVWlA_Y6X1eIhIpsALf3YVikFkLRME"
                                />
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="md:col-span-4 bg-primary p-10 rounded-3xl flex flex-col justify-between text-on-primary relative overflow-hidden">
                            <div className="z-10">
                                <h3 className="text-2xl font-bold font-headline mb-4">Modern Precision</h3>
                                <p className="text-primary-container/80 leading-relaxed">Utilizing 3D scanning and non-invasive diagnostics for absolute accuracy.</p>
                            </div>
                            <div className="z-10 mt-auto">
                                <div className="text-5xl font-black font-headline opacity-30">99%</div>
                                <div className="font-label text-sm tracking-widest uppercase">Patient Satisfaction</div>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        </div>
                        {/* Card 3 */}
                        <div className="md:col-span-4 bg-secondary p-10 rounded-3xl text-on-secondary">
                            <span className="material-symbols-outlined text-4xl mb-6">schedule</span>
                            <h3 className="text-2xl font-bold font-headline mb-4">No Waiting Policy</h3>
                            <p className="text-secondary-fixed-dim/80">We respect your time. Every appointment begins exactly as scheduled, guaranteed.</p>
                        </div>
                        {/* Card 4 */}
                        <div className="md:col-span-8 bg-surface-container-high p-10 rounded-3xl flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold font-headline mb-4">Painless Promise</h3>
                                <p className="text-on-surface-variant mb-6">Advanced numbing techniques and gentle-touch protocols ensure a completely comfortable experience.</p>
                                <button className="text-secondary font-bold flex items-center gap-2 group">
                                    Learn about our methods
                                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                                </button>
                            </div>
                            <div className="w-32 h-32 flex-shrink-0 bg-white rounded-full flex items-center justify-center ambient-shadow rotate-12">
                                <span className="material-symbols-outlined text-5xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>sentiment_satisfied</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Snapshots - Care Cards */}
            <section className="px-8 py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div className="max-w-xl">
                            <h2 className="font-headline text-3xl lg:text-5xl font-bold text-on-surface mb-6">Bespoke Services.</h2>
                            <p className="text-on-surface-variant text-lg">Curated medical treatments delivered with high-touch personal attention.</p>
                        </div>
                        <a className="text-primary font-bold border-b-2 border-primary-container pb-1 hover:text-on-primary-container transition-colors" href="/services">View full medical directory</a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Care Card 1 */}
                        <div className="group">
                            <div className="relative mb-6">
                                <div className="aspect-[3/4] rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <img alt="Cosmetic Dentistry" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfNZ3eQyCvEYit1nCBu1rNK7TGwOW9DuUAhddgyM10ecPdc8Rr3ZfoDe7IL1f5sY7oPOnk7paM1SyO0dKIQWTrmQi4KJGmqWgVRe6ayxQpGUlSTdQifGb_vAUQgyJ-_5I8VCQkzlFJHf10_Cc390aKH7t61W1y-gzwSuc1T49JRLZ_mUMxnCp3AslAOn1qlfvnKW1eqqgZDurEBFzuutqru5zOipX-wtrVfz9dJe5wqo2eQE8dOt5VXytN8zAeEzmJhVB3rErKWNzI" />
                                </div>
                                <div className="absolute -bottom-6 left-6 right-6 bg-surface-container-lowest p-6 rounded-xl ambient-shadow translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                                    <div className="text-primary font-label text-xs font-bold tracking-[0.2em] mb-2 uppercase">Aesthetics</div>
                                    <h3 className="text-xl font-bold font-headline text-on-surface">Cosmetic Artistry</h3>
                                </div>
                            </div>
                            <p className="mt-10 px-6 text-on-surface-variant text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                Smile design, porcelain veneers, and whitening treatments focused on natural, editorial-ready results.
                            </p>
                        </div>
                        {/* Care Card 2 */}
                        <div className="group">
                            <div className="relative mb-6">
                                <div className="aspect-[3/4] rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <img alt="General Dentistry" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6ILkOEP_lIBm26AF-K9HTHn02b2qbM-3QE0V8fOtFUUm_luq_isJ3KKARfcBBJ8zAO7tRrkeC3S43s9l-F6mVz4K7rsUIiPN5F_rtAwOMC6l96d38ua0xaB6gFbFCDuefaQdt9nHbG_WGlPXngIFHArAaFKOCW5IY_z2rkMaIBtKy97p_XMSoO5Ogjt4ENLyNh1SUdTvvwxn9ZjOBNE3xnNenIyL41qg8hjzqrLuESVVOWd8fLNGn7NYQElmj9Uxiq679IMhzhj6o" />
                                </div>
                                <div className="absolute -bottom-6 left-6 right-6 bg-surface-container-lowest p-6 rounded-xl ambient-shadow translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                                    <div className="text-primary font-label text-xs font-bold tracking-[0.2em] mb-2 uppercase">Prevention</div>
                                    <h3 className="text-xl font-bold font-headline text-on-surface">Total Oral Health</h3>
                                </div>
                            </div>
                            <p className="mt-10 px-6 text-on-surface-variant text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                Comprehensive check-ups, deep cleaning, and periodontal therapy delivered with advanced technology.
                            </p>
                        </div>
                        {/* Care Card 3 */}
                        <div className="group">
                            <div className="relative mb-6">
                                <div className="aspect-[3/4] rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <img alt="Emergency Care" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcm1VcJsurhSVhSdkq1lQxePQ3kM2M-BKuLKbws2s2tmAgY3y5QMyV5JoJl8EsV2drJHmhazoeFwx5oB1SSEoC7yr9sMjUdBFMHaku1m5b8JK2kOhakYM1EGA976xkEVbppc0_sMkUqroBvgluWxiO6IonNQB5_zWiE_dP14rJJ9xwf30cqT1jRGQGSxFJmjLz-fRBr3GnMHJG1r_KBv08DImaYDrhUsQRkhL24slSc9rcOpQLUrivvFhNUaA2kihxAkTq9MnVf53f" />
                                </div>
                                <div className="absolute -bottom-6 left-6 right-6 bg-surface-container-lowest p-6 rounded-xl ambient-shadow translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                                    <div className="text-primary font-label text-xs font-bold tracking-[0.2em] mb-2 uppercase">Urgent</div>
                                    <h3 className="text-xl font-bold font-headline text-on-surface">Restorative Surgery</h3>
                                </div>
                            </div>
                            <p className="mt-10 px-6 text-on-surface-variant text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                Implants, endodontics, and wisdom teeth removal using minimally invasive surgical protocols.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Patient Testimonials - Asymmetric Layout */}
            <section className="px-8 py-24 bg-surface-container-highest overflow-hidden">
                <div className="max-w-7xl mx-auto relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="space-y-12">
                                {/* Testimonial 1 */}
                                <div className="bg-surface-container-lowest p-10 rounded-3xl ambient-shadow -rotate-1 relative">
                                    <div className="flex gap-1 text-secondary mb-4">
                                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    </div>
                                    <p className="text-xl italic font-headline text-on-surface mb-6 leading-relaxed">
                                        "The first time I've ever felt relaxed at a dentist. The space feels like a boutique hotel, and the care was exceptionally gentle."
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high">
                                            <img alt="Patient Sarah" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7PwvURKAVgr-MOeyn-EXD75maHmrWLW3Y3OsFYrJy8kJdnWZpbySDC4jvitIwC5mPLyDfm6wW8Gc9gLsY0H3cuHN2tvAWSZWnWl9hGbBBt7UD18Q-E_Gu4z2Ukzj7_29LlvworVjBF__EPpdA-HFdbe-vEnrue768UGgIx-pC6kXFXxekhApSH5rHYRBnT8ursrDsizxhH0FofVftfwS5Ke_U_WdTsPm5hXxD3tYXWxIBxPHFvLJF3XGCxjbjKBAguDCddIFSG_R1" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-on-surface">Elena Rodriguez</div>
                                            <div className="text-xs text-on-surface-variant font-label tracking-wide uppercase">Creative Director</div>
                                        </div>
                                    </div>
                                </div>
                                {/* Testimonial 2 */}
                                <div className="bg-surface-container-lowest p-10 rounded-3xl ambient-shadow rotate-1 lg:ml-20">
                                    <p className="text-xl italic font-headline text-on-surface mb-6 leading-relaxed">
                                        "State of the art doesn't even begin to cover it. The 3D scan was fascinating, and my porcelain crowns look entirely natural."
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high">
                                            <img alt="Patient James" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWbswCVJ7ukBDY6pChsj25mB1h_07aVfebXZM_y37OwaShO4z0uIapmT3vEXiZuSJpptywfZ-2NS5pjqgeUOIEBERzFxJW5L8DVA1lso7frPm82PUPp9LzWyHK6bTlY9ToQlFqRcxxOzNvWCdH6WJlikSBDycEIuPJMMnyeHrTEFegE8mkS0lbI_BZiPfGH8nwTo-hH3O12JWEPz2Jz-tCsy14bGfkhd5IN3I1hQkkTNBTVkBGsjRE0U9womtOvlho_zFNpXxWXxVV" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-on-surface">Dr. James Thornton</div>
                                            <div className="text-xs text-on-surface-variant font-label tracking-wide uppercase">University Professor</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="font-headline text-4xl lg:text-6xl font-bold text-on-surface mb-8 tracking-tight">
                                Voices of <span className="text-secondary">Comfort.</span>
                            </h2>
                            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                                Join over 5,000 patients who have discovered that healthcare can be a beautiful, stress-free experience.
                            </p>
                            <div className="flex items-center gap-8">
                                <div className="flex -space-x-4">
                                    <div className="w-14 h-14 rounded-full border-4 border-surface-container-highest bg-slate-200"></div>
                                    <div className="w-14 h-14 rounded-full border-4 border-surface-container-highest bg-slate-300"></div>
                                    <div className="w-14 h-14 rounded-full border-4 border-surface-container-highest bg-slate-400"></div>
                                    <div className="w-14 h-14 rounded-full border-4 border-surface-container-highest bg-primary-container flex items-center justify-center text-primary font-bold">+2k</div>
                                </div>
                                <div className="text-sm font-label text-on-surface-variant">
                                    Recommended by top <br />medical specialists.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="px-8 py-32">
                <div className="max-w-5xl mx-auto glow-gradient rounded-[3rem] p-12 lg:p-24 text-center text-on-primary relative overflow-hidden ambient-shadow">
                    <div className="relative z-10">
                        <h2 className="font-headline text-4xl lg:text-6xl font-extrabold mb-8 tracking-tight">Ready for your transformation?</h2>
                        <p className="text-xl text-primary-container mb-12 max-w-2xl mx-auto">Appointments are limited to ensure every patient receives undivided attention. Secure your consultation today.</p>
                        <button className="bg-white text-primary px-12 py-5 rounded-full font-bold text-xl transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95">
                            Schedule Your Visit
                        </button>
                        <div className="mt-8 text-sm font-label tracking-widest opacity-80 uppercase">Free initial digital scan included</div>
                    </div>
                    {/* Abstract Decorative Circles */}
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                </div>
            </section>
        </div>
    );
}
