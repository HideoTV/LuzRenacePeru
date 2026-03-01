import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white pt-16 pb-8 border-t-4 border-accent">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand & Mission */}
                    <div className="col-span-1 lg:col-span-1">
                        <Link to="/" className="flex items-center gap-3 mb-6">
                            {/* Optional: white version of logo if available */}
                            <div className="bg-white p-2 rounded-md inline-block">
                                <img src="/img/logo.png" alt="Luz Renace Logo" className="h-10 w-auto object-contain" />
                            </div>
                            <div>
                                <h2 className="font-serif text-lg font-bold leading-tight">LUZ RENACE</h2>
                                <span className="font-sans text-xs tracking-widest uppercase text-accent">ONG Perú</span>
                            </div>
                        </Link>
                        <p className="text-gray-200 text-sm leading-relaxed mb-6 font-sans">
                            Mujeres con propósito que transforman el Perú. Promovemos la institucionalidad y el liderazgo femenino para un país más equitativo.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-[#4a2473] p-2 rounded-full hover:bg-accent hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-[#4a2473] p-2 rounded-full hover:bg-accent hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-[#4a2473] p-2 rounded-full hover:bg-accent hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif text-xl font-bold mb-6 text-accent">Navegación</h3>
                        <ul className="space-y-3 font-sans text-sm text-gray-200">
                            <li><Link to="/nosotros" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent">›</span> Quiénes Somos</Link></li>
                            <li><Link to="/programas" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent">›</span> Nuestros Programas</Link></li>
                            <li><Link to="/voluntariado" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent">›</span> Voluntariado</Link></li>
                            <li><Link to="/aliados" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent">›</span> Aliados Estratégicos</Link></li>
                            <li><Link to="/transparencia" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent">›</span> Portal de Transparencia</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-serif text-xl font-bold mb-6 text-accent">Contacto</h3>
                        <ul className="space-y-4 font-sans text-sm text-gray-200">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-accent flex-shrink-0 mt-0.5" size={18} />
                                <span>Lima, Perú<br />Información institucional oficial</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-accent flex-shrink-0" size={18} />
                                <span>+51 (1) 000-0000</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-accent flex-shrink-0" size={18} />
                                <a href="mailto:contacto@luzrenaceperu.org" className="hover:text-accent transition-colors">contacto@luzrenaceperu.org</a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal / Institutional */}
                    <div>
                        <h3 className="font-serif text-xl font-bold mb-6 text-accent">Institucionalidad</h3>
                        <div className="bg-[#4a2473] p-5 rounded-lg border border-[#6b35a6]">
                            <p className="text-sm text-gray-200 mb-3 font-sans">
                                Organización No Gubernamental registrada bajo la <strong>Ley N.º 28238</strong>.
                            </p>
                            <Link to="/transparencia" className="text-accent text-sm font-bold hover:underline flex items-center gap-1">
                                Ver documentos oficiales
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[#4a2473] flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-gray-300">
                    <p>&copy; {currentYear} Luz Renace ONG Perú. Todos los derechos reservados.</p>
                    <div className="flex gap-4">
                        <Link to="/privacidad" className="hover:text-white transition-colors">Políticas de Privacidad</Link>
                        <Link to="/terminos" className="hover:text-white transition-colors">Términos y Condiciones</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
