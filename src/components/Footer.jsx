import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#5c2b8b] text-white pt-16 pb-12 border-t-[6px] border-[#d8aa25]">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">

                    {/* Column 1: Logo & Mission */}
                    <div className="flex flex-col gap-6">
                        <Link to="/" className="flex items-center gap-3">
                            <div className="flex items-center gap-3">
                                <img src="/img/logo.png" alt="Luz Renace Logo" className="h-10 md:h-12 w-auto object-contain bg-white rounded-md p-1" />
                                <div className="flex flex-col items-start justify-center h-full pt-1">
                                    <h1 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide leading-tight mt-[-2px]">LUZ RENACE</h1>
                                    <span className="font-sans text-[10px] sm:text-xs text-white tracking-widest uppercase block mt-[-2px]">ONG Perú</span>
                                </div>
                            </div>
                        </Link>
                        <p className="text-gray-200 text-sm leading-relaxed font-sans pr-4">
                            Mujeres con propósito que transforman el Perú. Promovemos la institucionalidad y el liderazgo femenino para un país más equitativo.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-[#481f72] p-2.5 rounded-full hover:bg-white/20 transition-colors text-white">
                                <Facebook size={18} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-[#481f72] p-2.5 rounded-full hover:bg-white/20 transition-colors text-white">
                                <Instagram size={18} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-[#481f72] p-2.5 rounded-full hover:bg-white/20 transition-colors text-white">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif text-xl font-bold mb-6 text-white pb-2 border-b-2 border-transparent inline-block">Navegación</h3>
                        <ul className="space-y-4 font-sans text-sm text-gray-200">
                            <li><Link to="/nosotros" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-gray-400 text-[10px]">›</span> Quiénes Somos</Link></li>
                            <li><Link to="/programas" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-gray-400 text-[10px]">›</span> Nuestros Programas</Link></li>
                            <li><Link to="/voluntariado" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-gray-400 text-[10px]">›</span> Voluntariado</Link></li>
                            <li><Link to="/aliados" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-gray-400 text-[10px]">›</span> Aliados Estratégicos</Link></li>
                            <li><Link to="/transparencia" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-gray-400 text-[10px]">›</span> Portal de Transparencia</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-serif text-xl font-bold mb-6 text-white pb-2 border-b-2 border-transparent inline-block">Contacto</h3>
                        <ul className="space-y-6 font-sans text-sm text-gray-200">
                            <li className="flex items-start gap-4">
                                <MapPin className="text-[#d8aa25] flex-shrink-0 mt-0.5" size={20} />
                                <div>
                                    <span>Lima, Perú<br />Información institucional oficial</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <Phone className="text-[#d8aa25] flex-shrink-0 mt-0.5" size={20} />
                                <div>
                                    <span>+51 (1) 000-0000</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <Mail className="text-[#d8aa25] flex-shrink-0 mt-0.5" size={20} />
                                <a href="mailto:contacto@luzrenaceperu.org" className="hover:text-white transition-colors block mb-1">contacto@luzrenaceperu.org</a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal / Institutional */}
                    <div>
                        <h3 className="font-serif text-xl font-bold mb-6 text-white pb-2 border-b-2 border-transparent inline-block">Institucionalidad</h3>
                        <div className="bg-[#481f72] p-6 rounded-lg border border-[#6b35a6] shadow-sm">
                            <p className="text-sm text-gray-200 mb-4 font-sans leading-relaxed">
                                Organización No Gubernamental registrada bajo la <strong>Ley N.º 28238</strong>.
                            </p>
                            <Link to="/transparencia" className="text-[#d8aa25] text-sm font-bold hover:underline flex items-center gap-1 font-sans">
                                Ver documentos oficiales
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-sans text-gray-400">
                    <p>&copy; {currentYear} Luz Renace ONG Perú. Todos los derechos reservados.</p>
                    <div className="flex gap-4">
                        <Link to="/privacidad" className="hover:text-white transition-colors">Politicas de Privacidad</Link>
                        <Link to="/terminos" className="hover:text-white transition-colors">Términos y Condiciones</Link>
                        <Link to="/datos" className="hover:text-white transition-colors">Políticas de Protección de Datos</Link>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
