import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(54,54,54,0.06)]">
            <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-teal-900 dark:text-teal-100 font-headline tracking-tight">
                    Dental Lounge
                </div>
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`font-headline tracking-tight transition-colors ${isActive
                                        ? 'text-teal-700 dark:text-teal-300 font-semibold border-b-2 border-teal-500 pb-1'
                                        : 'text-slate-600 dark:text-slate-400 hover:text-teal-600'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
                <Link
                    to="/contact"
                    className="glow-gradient inline-flex text-on-primary px-8 py-3 rounded-full font-semibold transition-transform scale-95 hover:scale-100 active:scale-90 shadow-lg"
                >
                    Book Appointment
                </Link>
            </div>
        </nav>
    );
}
