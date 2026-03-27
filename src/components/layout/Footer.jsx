import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-slate-50 dark:bg-slate-950 font-body text-sm mt-auto">
            <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="flex flex-col gap-4">
                    <div className="text-lg font-bold text-teal-900 dark:text-teal-100 font-headline">Dental Lounge</div>
                    <p className="text-slate-500 dark:text-slate-400 max-w-xs">
                        Where restorative dentistry meets boutique wellness. Curating smiles with precision and grace.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-teal-800 dark:text-teal-400 font-headline">Navigation</h4>
                    <Link to="/" className="text-slate-500 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">Home</Link>
                    <Link to="/about" className="text-slate-500 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">About Us</Link>
                    <Link to="/services" className="text-slate-500 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">Services</Link>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-teal-800 dark:text-teal-400 font-headline">Contact</h4>
                    <p className="text-slate-500 dark:text-slate-400">Dr. Harris Naveed</p>
                    <p className="text-slate-500 dark:text-slate-400">Phone: +92 307 9936469</p>
                    <a href="https://www.instagram.com/mhn_the_dental_lounge?igsh=a25vb2g0a3l5bWVm" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-pink-600 transition-colors">
                        <span className="material-symbols-outlined text-sm">photo_camera</span>
                        <span>Instagram</span>
                    </a>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-teal-800 dark:text-teal-400 font-headline">Location & Hours</h4>
                    <p className="text-slate-500 dark:text-slate-400">Office Hours: Mon-Fri 8am-6pm</p>
                    <a href="https://maps.app.goo.gl/UTFrvoCZnJpsgkpUA" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 mt-2 group border border-transparent rounded-md hover:bg-slate-100 p-2 -ml-2 transition-colors">
                        <span className="material-symbols-outlined text-teal-600 group-hover:text-pink-600 transition-colors">location_on</span>
                        <span className="text-slate-500 dark:text-slate-400 flex-1">
                            View on Google Maps
                        </span>
                    </a>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-8 py-6 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
                <span>© 2024 Dental Lounge. The Restorative Sanctuary.</span>
                <div className="flex gap-6">
                    <span className="material-symbols-outlined text-teal-800 dark:text-teal-400 cursor-pointer opacity-80 hover:opacity-100">share</span>
                    <span className="material-symbols-outlined text-teal-800 dark:text-teal-400 cursor-pointer opacity-80 hover:opacity-100">public</span>
                </div>
            </div>
        </footer>
    );
}
