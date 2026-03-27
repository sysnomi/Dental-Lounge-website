export default function AboutUs() {
    return (
        <div className="pt-32">
            {/* Hero Section: The Editorial Story */}
            <section className="max-w-7xl mx-auto px-8 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                        <span className="text-secondary font-label font-semibold tracking-widest uppercase mb-4 block">Our Philosophy</span>
                        <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tight mb-8">
                            Redefining the <br /><span className="text-primary italic">Clinical Experience.</span>
                        </h1>
                        <p className="text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
                            We believe that precision medical care should exist within an environment of absolute tranquility. Our clinic was founded to bridge the gap between high-end editorial aesthetics and rigorous clinical excellence.
                        </p>
                        <div className="flex gap-4">
                            <div className="w-16 h-1 glow-gradient rounded-full"></div>
                            <p className="font-headline font-bold text-lg">The Restorative Sanctuary</p>
                        </div>
                    </div>
                    <div className="lg:col-span-5 relative">
                        <div className="rounded-xl overflow-hidden editorial-shadow transform rotate-2">
                            <img
                                alt="Modern Clinic Interior"
                                className="w-full aspect-[4/5] object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJThMduNKMGv9ayy-La3kq9K2GY2LLQyU9CNU5bSoOQKtGXZiS1tXh6oiHXQrNQwI9X1BU7rTvItdx7_8IBBX8GUJXtz0dVwpBMy72eMJfRVEmzVjtYx7DXXPsR4w0bNcwtPVvgBl_L5OI82G17MPX_YIcrR6uv4fIWoPjCe7rFXG3twE1oinvhF4rCYu8-X6SNCtEL9W4gZeSE_KJMZNSQqTckeMZCtGSKYQ0AfOiASj6HtxnwxCwfeiW6ZGi4bmR8owmax0zxBim"
                            />
                        </div>
                        <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-xl overflow-hidden editorial-shadow transform -rotate-3 border-8 border-surface">
                            <img
                                alt="Clinic Detail"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX6w-1OLFqxwurVipOUv3SUkeP_v8yAD5RG4HD2laFrsAk5BwmbQCZV_jvaDzw1aPT-KCDH6dfBQ1rC1awsJiP9I3e2CSWI9SjEVqPV7rvdTGk8xbbsnlzLM4hDyvI68ru7klgyxtXT1-JICgB_KSako-tmz6jD4HPsKGUzK1zCeE63M9knA7k5fgLI3J9e7LJe28Gv_lvA-XJIuzh5PE3D117QKtb7OBO5Lv2a2U3L7g4IuuUpua4u_sQ4zqevRdXPBapJSKVNHS9"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Statement: Bento Style */}
            <section className="bg-surface-container-low py-32 mb-32">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 bg-surface-container-lowest p-12 rounded-xl editorial-shadow relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="font-headline text-3xl font-bold mb-6">Our Mission</h2>
                                <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl">
                                    To provide an unparalleled standard of care by integrating advanced clinical technology with a human-centric, boutique approach. We don't just treat symptoms; we curate wellness journeys that respect your time, your comfort, and your aesthetic sensibilities.
                                </p>
                            </div>
                            <span className="material-symbols-outlined absolute -right-12 -bottom-12 text-[200px] opacity-5 text-primary">spa</span>
                        </div>
                        <div className="bg-primary p-12 rounded-xl text-on-primary flex flex-col justify-between">
                            <span className="material-symbols-outlined text-4xl">verified_user</span>
                            <div>
                                <p className="text-4xl font-headline font-extrabold mb-2">100%</p>
                                <p className="font-label opacity-80">Patient-Focused Precision Care</p>
                            </div>
                        </div>
                        <div className="bg-secondary-container p-12 rounded-xl text-on-secondary-container">
                            <h3 className="font-headline text-2xl font-bold mb-4">Crafting Confidence</h3>
                            <p>Every procedure is an editorial masterpiece, designed to enhance your natural beauty while ensuring optimal health.</p>
                        </div>
                        <div className="md:col-span-2 bg-surface-container-high p-12 rounded-xl flex items-center justify-between overflow-hidden">
                            <div className="max-w-md">
                                <h3 className="font-headline text-2xl font-bold mb-2">Technology Meets Artistry</h3>
                                <p className="text-on-surface-variant">We utilize 3D scanning and AI-driven diagnostics, housed within bespoke modern cabinetry.</p>
                            </div>
                            <div className="hidden sm:block">
                                <div className="w-32 h-32 rounded-full border-4 border-primary/20 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary text-4xl">biotech</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section: The Care Cards */}
            <section className="max-w-7xl mx-auto px-8 mb-32">
                <div className="text-center mb-20">
                    <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-4">Meet the Visionary</h2>
                    <div className="w-24 h-1 glow-gradient mx-auto rounded-full mb-6"></div>
                    <p className="text-on-surface-variant max-w-2xl mx-auto">Our lead practitioner combines decades of clinical expertise with a passion for restorative aesthetics.</p>
                </div>
                <div className="flex justify-center">
                    {/* Practitioner 1 */}
                    <div className="group relative max-w-2xl w-full">
                        <div className="aspect-[3/4] rounded-xl overflow-hidden editorial-shadow mb-[-80px] mr-12 bg-surface-container">
                            <img
                                alt="Dr. Harris Naveed"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY47DnCdocKv8MfdinbuosNZZTzaH8TGS7-xCQjfQF6yYsclIf3nC1al5Ac6nQhfty0erL2GyZU6EhorRfA9u9oRdmT0ewWmtlXT3xhkdVxsgJWOkKoStd8u7ZQf7q8XjlXYKiQ-0i-HVjwCs0PQrlZSxw46Bk1GVwevIpCKZp_3VXD40-qcNYo3KvN7Y3P5-V6_htnPH2nKOR9yy9_rXRPlWpU9zmcmUZaV4IoAcwyjaYveJVhTNP1EEDsDXCIeUimUAw_Gl2xoBT"
                            />
                        </div>
                        <div className="relative z-10 bg-surface-container-lowest p-8 ml-12 rounded-xl editorial-shadow">
                            <span className="text-secondary font-label text-xs font-bold tracking-widest uppercase mb-2 block">Founder & Chief Clinician</span>
                            <h3 className="font-headline text-3xl font-bold mb-4">Dr. Harris Naveed</h3>
                            <p className="text-on-surface-variant mb-6 leading-relaxed">
                                With extensive experience in restorative dentistry, Dr. Naveed approaches every patient as a unique individual, prioritizing long-term health and subtle, natural results.
                            </p>
                            <div className="flex gap-4">
                                <a className="text-primary hover:text-secondary transition-colors" href="https://www.instagram.com/mhn_the_dental_lounge?igsh=a25vb2g0a3l5bWVm" target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined">link</span></a>
                                <a className="text-primary hover:text-secondary transition-colors" href="/contact"><span className="material-symbols-outlined">mail</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Atmosphere Section */}
            <section className="max-w-7xl mx-auto px-8 mb-32">
                <div className="bg-surface-container rounded-xl p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2">
                        <h2 className="font-headline text-4xl font-extrabold mb-6 leading-tight">The Clinic <br />Environment</h2>
                        <p className="text-on-surface-variant text-lg mb-8">
                            Our space is designed to lower cortisol levels from the moment you step through the door. From HEPA-filtered air infused with subtle botanical notes to acoustic baffling that ensures absolute privacy.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span>Noise-canceling acoustic architecture</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span>Ergonomic Italian leather treatment suites</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span>Bespoke refreshment lounge</span>
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 grid grid-cols-2 gap-4">
                        <img alt="Clinic detail 1" className="rounded-lg w-full h-48 object-cover editorial-shadow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw3dVWv9Oqe9oC7QCf8sTDpe-7VRcs-4EUdH7Lx8_qohgu30-rgs6YN8QeBB1sypW1JoMTyh9y9wRLTHEGotpkehhmck_B0sHrpxDM_7cPWyBghpJXGET4sNyh0NAMBrFnVyABg_F170gCIBI2lPokEH9r1gy7spG3tZxtwADymNV9Bi9WVDGDzUpBihRs6aTdu5PhiI36K82Tv5VolFtYuTwfxeqSyYzWDfW2yCOps_pBwfNM5nLky78wab0J_nVKVZbed7hvK1xV" />
                        <img alt="Clinic detail 2" className="rounded-lg w-full h-48 object-cover editorial-shadow mt-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0YXWVMjJtEJqi-uLRvAp1pMeoN0CKyPGRowDw3LdlfnwCA2R3yfbY7efp8jvTzm9QlHXpo3S1-9JT1KRYl3oa1vexPukf4-u-AZhLSZr7Eiq-thAhDt0_ciC36TdCFmc2HuFosUkolx2NPEWTnT_Ui22M0V6OihA5RLPfEt5idnPI_XfIS_Ik1jnBHjy4_MiQAgPaLLPHM7WBst0Lj12S6x5PtzF3PT99KRpfASQPNHGqRNX2bTfh_bHCXzYQGeudaOVYxBoVj-WJ" />
                        <img alt="Clinic detail 3" className="rounded-lg w-full h-48 object-cover editorial-shadow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY9sNRvpNScjj6GXSlEBBy1q5alLhfSDWWgAzY7uocJmKJj8aSHC3d5INh_mw14tFDqS6i0RI-RbOTWT45aEJnN40h2RQpuR2K9_qOds_jrLNjGEcu1z-xYBLrWbNAdXLnG_7aWoY3alnoHWeGQLAPyXAYvCLlQjmIDnsrcj-EdcafJsJ9gUA-qIHu7s6nsymfMUUVKmlV24gOMmYhYE39uIT1lRouNYR8sTIdL7NZTk4-SScIztRI9JdN86XcH_O0kLYowouJpm5h" />
                        <img alt="Clinic detail 4" className="rounded-lg w-full h-48 object-cover editorial-shadow mt-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg5yvz_HMQByb9W6fHU6viEyNMHIS3KSRr1TnuceZGIZ5FDoLnZcWj_vV0UOxNLxf1dvQjLuTuxVYbPqkRuEOKAlndjlDUnsKVmOUK716olxMWpp-uE21HFndaNBq8-eI1tAlaxCD6x5QZbq8Qm1WdnYRZopZ14mPm8OkiZjl0dmHLQWenPahHcz1YEQfxHMERuD_hkZ7P5Z_lFsppH3n6ra5_109x1NKYdIUafiLa5dF_kAbQIIJxnVhHYPhoPN0PqmD-Bx9H-ba8" />
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="max-w-4xl mx-auto px-8 mb-32 text-center">
                <h2 className="font-headline text-4xl font-extrabold mb-8 italic">Your journey to restorative wellness begins with a conversation.</h2>
                <button className="glow-gradient text-on-primary px-12 py-5 rounded-full text-lg font-bold editorial-shadow hover:scale-105 active:scale-95 transition-all">
                    Book Your Consultation
                </button>
            </section>
        </div>
    );
}
