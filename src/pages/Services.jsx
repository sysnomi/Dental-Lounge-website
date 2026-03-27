import { Link } from 'react-router-dom';

export default function Services() {
    return (
        <div className="pt-32 pb-24">
            {/* Hero Section */}
            <header className="max-w-7xl mx-auto px-8 mb-20">
                <div className="max-w-3xl">
                    <span className="text-secondary font-label font-semibold tracking-widest uppercase mb-4 block">Our Treatments</span>
                    <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight text-on-surface mb-8">
                        Elevated Care for the <span className="text-primary italic">Modern Smile</span>
                    </h1>
                    <p className="text-xl text-on-surface-variant leading-relaxed font-body">
                        We bridge the gap between clinical excellence and restorative sanctuary. Explore our curated selection of bespoke dental and aesthetic services.
                    </p>
                </div>
            </header>

            {/* Services Grid - Asymmetric Bento Pattern */}
            <section className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Main Featured Service (Care Card) */}
                    <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low transition-all duration-500">
                        <div className="aspect-[16/9] w-full overflow-hidden">
                            <img
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                alt="Preventative Wellness"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7m4Z96NumUFokJJ6GWgJ0jCKQMtgEGocZ7LhCy3xHwrWI8_VwyPSaYSIIw29_H5641kDkiSaxSNK5-_lDLITSsfEx9izngtrhGBYmP1Wsc71_WdQAoxQmkLi4z0cJk2-nV8-HKvH9RUiC2HAIPxoNkCHp81MVHquH3SinKqGBdnBak7KzjVgXtXCGnzHws8scD89qEhvgTjqRit79AMIywVa-uwGG0floB2qIc3dGfriXLXZKOJRr8H-bvKM61FaICUuEcuMB8K86"
                            />
                        </div>
                        <div className="absolute bottom-8 left-8 right-8 bg-surface-container-lowest p-8 rounded-xl editorial-shadow max-w-lg">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="material-symbols-outlined text-primary" data-icon="auto_awesome">auto_awesome</span>
                                <span className="text-primary font-semibold font-label">Signature Care</span>
                            </div>
                            <h3 className="text-3xl font-headline font-bold mb-4">Preventative Wellness</h3>
                            <p className="text-on-surface-variant mb-6 font-body">A comprehensive approach to oral health that prioritizes long-term vitality through precision diagnostics and gentle care.</p>
                            <button className="text-secondary font-semibold border-b-2 border-secondary/20 hover:border-secondary transition-all pb-1 font-label">Learn more about Wellness</button>
                        </div>
                    </div>
                    {/* Secondary Service Column */}
                    <div className="md:col-span-4 flex flex-col gap-8">
                        <div className="bg-surface-container-highest p-8 rounded-xl flex-1 flex flex-col justify-between hover:bg-surface-container-lowest transition-colors duration-300">
                            <div>
                                <span className="material-symbols-outlined text-secondary text-4xl mb-6" data-icon="magic_button">magic_button</span>
                                <h3 className="text-2xl font-headline font-bold mb-3">Cosmetic Artistry</h3>
                                <p className="text-on-surface-variant font-body">Bespoke smile design using premium porcelain veneers and minimally invasive whitening techniques.</p>
                            </div>
                            <div className="mt-8">
                                <Link to="/contact" className="text-primary font-bold font-label flex items-center gap-2 group">
                                    Book Consultation
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                        <div className="bg-primary text-on-primary p-8 rounded-xl flex-1 flex flex-col justify-between">
                            <div>
                                <span className="material-symbols-outlined text-primary-container text-4xl mb-6" data-icon="biotech">biotech</span>
                                <h3 className="text-2xl font-headline font-bold mb-3">Advanced Implants</h3>
                                <p className="text-primary-fixed-dim font-body">Restoring function and aesthetics with bio-compatible titanium and ceramic restorative solutions.</p>
                            </div>
                            <Link to="/contact" className="mt-8 inline-block text-center bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full py-2 px-6 font-label transition-colors">
                                Request Consultation
                            </Link>
                        </div>
                    </div>
                    {/* Lower Bento Row */}
                    <div className="md:col-span-4 bg-surface-container-low p-8 rounded-xl hover:shadow-lg transition-all border border-transparent hover:border-outline-variant/10">
                        <span className="material-symbols-outlined text-teal-700 text-3xl mb-4" data-icon="orthopedics">orthopedics</span>
                        <h4 className="text-xl font-headline font-bold mb-2">Invisalign® Elite</h4>
                        <p className="text-on-surface-variant mb-6 text-sm">Discreetly align your smile with the world's most advanced clear aligner system.</p>
                        <img
                            className="w-full h-32 object-cover rounded-lg"
                            alt="Invisalign Elite"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz271S10iPawuk2bd09QPn-psmgb7GxoUWtrTLnuu0oI1iKqkNEo0YbmDJGkwVRh22s-cXpH9rwH-aAMmJA5iTrxoItFyafQc852O4REFohqX_Pef4YD2W0MD-qOVErtO6UlHgm--tEhnaw-Xm_marSeZ95D3wGfjgwZLKpw7UHoBjy3wTlkasDbJkP1qGplICH7_jSC0I9I_U_MODmwdyq8UQarAqB7jpqgBLYz-zqc4BW784qDzrfOTBFItCGAxXT5qS-l33vMAx"
                        />
                    </div>
                    <div className="md:col-span-4 bg-surface-container-low p-8 rounded-xl hover:shadow-lg transition-all border border-transparent hover:border-outline-variant/10">
                        <span className="material-symbols-outlined text-teal-700 text-3xl mb-4" data-icon="emergency">emergency</span>
                        <h4 className="text-xl font-headline font-bold mb-2">Emergency Care</h4>
                        <p className="text-on-surface-variant mb-6 text-sm">Immediate attention for dental trauma or acute pain in our calming, pain-free environment.</p>
                        <div className="flex -space-x-3">
                            <img className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Dentist 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ3lBek8Oem8z-17HJy4e6gvK9o6G-8LCjMfx1gm1vBANEWcp_I2qh9Up-ve2WbBYaNld-cEi-pKM_QiHTwDGobljfMGjs5yGI72bjpbDegPI3EJNEw4XqT3rGSqABagKxsM115PvyrL43YYkB5_CVd3VQpjIutHwW8p13fQeFWtbHrWFJUVXXvtyz4urkSFi3tNbijtapi1_lqTrvP6f0Pn8vyCD5nsVdUUQbWa6n7jSLjYP1vHntDVY03csffbOnwd9b3sDj7jiz" />
                            <img className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Dentist 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2Edqqfg9_IH5zraAGIpxSS8_86B3lriFBE5D0uJCbnNE19TPhKh4sZF179e36adWpyUvjf58fs1LWkzT-hFCn3yV8Nl9sggOz5LfNXCRJFBS1OKamWdEnrrxLPKmDnNnGXSBN1ozsGjcbf3Knv8nQheujI9_NSNfD0L-dK0IaFDV9wec6cJxZkRw-iAkY4YYlN3VCbivDrENCgtkhYYSFFkd6cv9-FwSDG3-h7Rb0tfaIyRL5-zISm9ZVDOFRUU1_oBtvkucv0SE7" />
                            <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center text-xs font-bold border-2 border-white">24/7</div>
                        </div>
                    </div>
                    <div className="md:col-span-4 bg-surface-container-low p-8 rounded-xl hover:shadow-lg transition-all border border-transparent hover:border-outline-variant/10">
                        <span className="material-symbols-outlined text-teal-700 text-3xl mb-4" data-icon="mood">mood</span>
                        <h4 className="text-xl font-headline font-bold mb-2">Sedation Dentistry</h4>
                        <p className="text-on-surface-variant mb-6 text-sm">Experience your treatment in total tranquility with our customized relaxation options.</p>
                        <ul className="space-y-2 text-sm text-on-surface-variant">
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Nitrous Oxide</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Conscious Oral Sedation</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> IV Sleep Dentistry</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="mt-24 max-w-7xl mx-auto px-8">
                <div className="bg-surface-container-lowest rounded-3xl p-12 md:p-20 relative overflow-hidden editorial-shadow">
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                        <svg className="h-full w-auto float-right" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.5,-64.8C47.2,-57.1,52.8,-43.3,58.4,-30.3C64,-17.3,69.6,-5.1,68,6.5C66.4,18.1,57.6,29.1,48.5,39.3C39.4,49.5,30,58.9,18.8,63.1C7.6,67.3,-5.4,66.4,-17.7,62.2C-30,58.1,-41.7,50.7,-51.8,40.8C-61.9,30.9,-70.5,18.5,-73.4,4.5C-76.3,-9.4,-73.5,-24.9,-65.4,-37.2C-57.3,-49.5,-44,-58.5,-31.2,-64.6C-18.4,-70.7,-6.1,-73.8,4.7,-81.9C15.5,-90.1,31,-103.4,37.5,-64.8Z" fill="#006b5c" transform="translate(200 200)"></path>
                        </svg>
                    </div>
                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-6">Ready to prioritize your wellness?</h2>
                        <p className="text-lg text-on-surface-variant mb-10 font-body">Our team is ready to welcome you into a new kind of dental experience. Book your initial consultation today.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block text-center glow-gradient text-on-primary rounded-full px-10 py-4 font-bold editorial-shadow transition-transform hover:scale-[1.02]">
                                Schedule Appointment
                            </Link>
                            <button className="bg-surface-container-high text-on-surface rounded-full px-10 py-4 font-bold transition-all hover:bg-surface-variant">
                                Download Price Guide
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
