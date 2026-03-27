export default function ContactBooking() {
    return (
        <div className="pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-8">
                {/* Hero Header Section */}
                <header className="mb-16 max-w-2xl">
                    <span className="font-label text-secondary font-semibold tracking-widest uppercase text-xs mb-4 block">Get In Touch</span>
                    <h1 className="font-headline text-5xl font-extrabold text-on-surface tracking-tight leading-tight mb-6">
                        Let’s start your journey to a <span className="text-primary italic">restorative</span> smile.
                    </h1>
                    <p className="text-lg text-on-surface-variant leading-relaxed">
                        We invite you to experience dentistry within a sanctuary of calm. Whether you have a question or are ready to schedule your first visit, we are here to assist.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Contact Info & Details (Left Column) */}
                    <div className="lg:col-span-5 space-y-12">
                        {/* Detail Cards (Asymmetric Layout) */}
                        <div className="space-y-6">
                            <div className="bg-surface-container-lowest p-8 rounded-xl editorial-shadow relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary text-3xl" data-icon="location_on">location_on</span>
                                    <div>
                                        <h3 className="font-headline font-bold text-xl mb-2">Our Sanctuary</h3>
                                        <p className="text-on-surface-variant leading-relaxed">
                                            Dental Lounge<br />
                                            Click map below for directions.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-surface-container-low p-8 rounded-xl flex items-start gap-4 hover:bg-surface-container-lowest transition-colors duration-300">
                                <span className="material-symbols-outlined text-secondary text-3xl" data-icon="call">call</span>
                                <div>
                                    <h3 className="font-headline font-bold text-xl mb-2">Direct Line</h3>
                                    <p className="text-on-surface-variant leading-relaxed font-medium">
                                        +92 307 9936469<br />
                                        contact@dentallounge.com
                                    </p>
                                </div>
                            </div>

                            <div className="bg-surface-container-high p-8 rounded-xl flex items-start gap-4">
                                <span className="material-symbols-outlined text-tertiary text-3xl" data-icon="schedule">schedule</span>
                                <div>
                                    <h3 className="font-headline font-bold text-xl mb-2">Office Hours</h3>
                                    <ul className="text-on-surface-variant space-y-1 text-sm md:text-base">
                                        <li className="flex justify-between gap-8"><span>Monday — Friday</span> <span>8:00am - 6:00pm</span></li>
                                        <li className="flex justify-between gap-8 opacity-60"><span>Saturday</span> <span>By Appointment</span></li>
                                        <li className="flex justify-between gap-8 opacity-60"><span>Sunday</span> <span>Closed</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Map Concept */}
                        <a href="https://maps.app.goo.gl/UTFrvoCZnJpsgkpUA" target="_blank" rel="noopener noreferrer" className="block relative h-80 rounded-xl overflow-hidden editorial-shadow group">
                            <img
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                alt="Clinic Map"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB34noRnfIRSO2jSbHJp6m3_D-SLaSXxT-kLL11er86vJOK26K_WQqZ8iGCodvQy0FExKn8jwbnDpMpu0aUa6nCRy9iLygogiJpVowwKQBnfFyO9pdOUBgqTLLOI9R8jSmh717WzicjLX9pGJ-d5qPpUddiUJuyLS7mrcTXJAdmBiEy6vsDerR0poBYIZI33y3RchKzZTFuongAIKdaECUQ5zjo_SIqZNKLx3VyP7trgfoubj5PTg2h95tGnFG5KelassKM9VhSUJ0P"
                            />
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
                            <div className="absolute bottom-6 left-6 right-6 bg-surface-container-lowest/90 backdrop-blur-md p-4 rounded-lg flex items-center justify-between">
                                <div>
                                    <p className="font-label text-xs font-bold text-primary uppercase">Current Location</p>
                                    <p className="font-body text-sm font-semibold">View on Google Maps</p>
                                </div>
                                <div className="text-primary hover:text-on-primary-container p-2 rounded-full hover:bg-primary-container transition-all">
                                    <span className="material-symbols-outlined" data-icon="near_me">near_me</span>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Booking Form (Right Column) */}
                    <div className="lg:col-span-7">
                        <div className="bg-surface-container-lowest p-10 md:p-14 rounded-xl editorial-shadow">
                            <h2 className="font-headline text-3xl font-bold mb-8">Request an Appointment</h2>

                            {/* Web3Forms Integration */}
                            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-8">
                                {/* Replace with actual Access Key from Web3Forms */}
                                <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE" />
                                <input type="hidden" name="subject" value="New Appointment Request - Dental Lounge" />
                                <input type="hidden" name="redirect" value="https://web3forms.com/success" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="font-label text-sm font-semibold text-on-surface-variant ml-1">Full Name</label>
                                        <input name="name" required className="w-full bg-surface-container-high border-none rounded-lg py-4 px-5 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all placeholder:text-outline" placeholder="Evelyn Harper" type="text" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="font-label text-sm font-semibold text-on-surface-variant ml-1">Email Address</label>
                                        <input name="email" required className="w-full bg-surface-container-high border-none rounded-lg py-4 px-5 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all placeholder:text-outline" placeholder="evelyn@example.com" type="email" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="font-label text-sm font-semibold text-on-surface-variant ml-1">Preferred Service</label>
                                        <select name="service" required className="w-full bg-surface-container-high border-none rounded-lg py-4 px-5 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all">
                                            <option>Restorative Care</option>
                                            <option>Cosmetic Consultation</option>
                                            <option>Routine Maintenance</option>
                                            <option>Orthodontic Inquiry</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="font-label text-sm font-semibold text-on-surface-variant ml-1">Preferred Day</label>
                                        <input name="date" required className="w-full bg-surface-container-high border-none rounded-lg py-4 px-5 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all" type="date" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="font-label text-sm font-semibold text-on-surface-variant ml-1">Your Message (Optional)</label>
                                    <textarea name="message" className="w-full bg-surface-container-high border-none rounded-lg py-4 px-5 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all placeholder:text-outline" placeholder="Tell us about your needs or concerns..." rows={4}></textarea>
                                </div>

                                <div className="pt-4">
                                    <button type="submit" className="w-full glow-gradient text-on-primary py-5 rounded-full font-headline font-bold text-lg transition-all hover:brightness-110 active:scale-[0.98] shadow-lg">
                                        Send Request
                                    </button>
                                    <p className="text-center text-xs text-on-surface-variant mt-6 italic">
                                        Our concierge team will respond within 24 business hours to finalize your visit.
                                    </p>
                                </div>
                            </form>
                        </div>

                        {/* Testimonial / Soft Trust Element */}
                        <div className="mt-12 flex items-center gap-6 px-4">
                            <div className="flex -space-x-3">
                                <img className="w-12 h-12 rounded-full border-2 border-surface-container-lowest object-cover" alt="Patient 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzqqS_4kA2r7sD3rb8ZSMofCOpbrgKp_dLAu-umkI1_toelK_IqyY3CrkL1pzRZTVoFa64pnjepZRVHhqZxD3ggHDEJcamWUXp3tyz2FVS-bZcgLPhJVpJY3nMelf9w0FBd42f4fQVgIOKCWbpBTMH-U9akHkBEMDFmAdo4UoQ-JRrtxlxOVQGzQ4iylizd0aHoBSnKwrPxZrYa6WJzijXK1X8FNqaPV4tMm8SL_meXWaNNuctkAW26TH-eytifdrYoqbmeMEjtYDG" />
                                <img className="w-12 h-12 rounded-full border-2 border-surface-container-lowest object-cover" alt="Patient 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY47DnCdocKv8MfdinbuosNZZTzaH8TGS7-xCQjfQF6yYsclIf3nC1al5Ac6nQhfty0erL2GyZU6EhorRfA9u9oRdmT0ewWmtlXT3xhkdVxsgJWOkKoStd8u7ZQf7q8XjlXYKiQ-0i-HVjwCs0PQrlZSxw46Bk1GVwevIpCKZp_3VXD40-qcNYo3KvN7Y3P5-V6_htnPH2nKOR9yy9_rXRPlWpU9zmcmUZaV4IoAcwyjaYveJVhTNP1EEDsDXCIeUimUAw_Gl2xoBT" />
                                <img className="w-12 h-12 rounded-full border-2 border-surface-container-lowest object-cover" alt="Patient 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu-xrgf99T3U7vYykRDTA22CKH7lya9_CqGedjUKcrsX6nm0ZEp7lIGAXSRx7YOs8qnMpes7RxJbQ71EM5UitiA2jaeWBE9Z5HRUZskWI4qzdSwjMHFPl4Bj3kapO9p_pWbhzFZdw7qVoOtI5DNbv0lp_ihJqIl0eCAf7I5kaa0MvqGJ_iEyclFKsNoK4KJP8g0D-yINOZyiyGw90ir4AD0UcgLDzwLE45q346OG5j5mFDA9sWDhEvdAHiRAf7X4E9Fq4KcfU7vtGb" />
                            </div>
                            <p className="text-sm text-on-surface-variant italic">
                                "The most tranquil healthcare experience I've ever had." — <span className="font-bold text-on-surface not-italic">Julian R.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
