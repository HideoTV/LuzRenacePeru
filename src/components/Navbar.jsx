import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Nosotros', path: '/nosotros' },
        { name: 'Programas', path: '/programas' },
        { name: 'Voluntariado', path: '/voluntariado' },
        { name: 'Aliados', path: '/aliados' },
        { name: 'Transparencia', path: '/transparencia' },
        { name: 'Blog', path: '/publicaciones' },
        { name: 'Contacto', path: '/contacto' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
                        <img src="/logo-png.png" alt="Luz Renace Logo" className="h-12 w-auto object-contain" />
                        <div className="hidden md:block">
                            <h1 className="font-serif text-xl font-bold text-primary leading-tight">LUZ RENACE</h1>
                            <span className="font-sans text-xs text-neutral-dark tracking-widest uppercase">ONG Perú</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-6">
                        <ul className="flex gap-6 items-center">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className={`font-sans text-sm font-medium transition-colors hover:text-accent ${isActive(link.path) ? 'text-primary font-bold' : 'text-neutral-dark'}`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Button variant="accent" className="gap-2 rounded-full px-6 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                            <Heart size={18} fill="currentColor" /> Donar
                        </Button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden flex items-center gap-4">
                        <Button variant="accent" className="gap-1 rounded-full px-4 py-1.5 text-sm">
                            <Heart size={14} fill="currentColor" /> Donar
                        </Button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-primary p-2 focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-neutral-100 py-4 max-h-[calc(100vh-80px)] overflow-y-auto">
                    <ul className="flex flex-col container mx-auto px-4">
                        {navLinks.map((link) => (
                            <li key={link.name} className="border-b border-neutral-100 last:border-none">
                                <Link
                                    to={link.path}
                                    onClick={closeMenu}
                                    className={`block py-4 font-sans text-base ${isActive(link.path) ? 'text-primary font-bold' : 'text-neutral-dark'}`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;
