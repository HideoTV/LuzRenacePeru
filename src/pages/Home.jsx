import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Shield, Award } from 'lucide-react';

const Home = () => {
    return (
        <>
            <SEO title="Inicio" />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Background Image Setup */}
                <div className="absolute inset-0 z-0">
                    <img src="/img/hero-bg.png" alt="Mujeres peruanas sonriendo" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#361e5f]/90 via-[#361e5f]/70 to-[#e4e5e8]/50"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center mt-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-4 text-white max-w-4xl font-serif drop-shadow-md"
                    >
                        Mujeres con propósito que transforman el Perú
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-sm md:text-base text-gray-200 mb-8 max-w-2xl font-sans"
                    >
                        Construimos un futuro donde la equidad y los derechos humanos son la base de nuestra sociedad.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Button to="/donar" variant="primary" className="text-xs font-bold tracking-widest uppercase py-3 px-8 bg-[#5c2b8b] hover:bg-[#481f72] border border-[#5c2b8b] text-white rounded-sm shadow-md">
                            Dona ahora
                        </Button>
                        <Button to="/aliados" variant="outline" className="text-xs font-bold tracking-widest uppercase py-3 px-8 border border-[#5c2b8b] text-[#5c2b8b] hover:bg-[#5c2b8b] hover:text-white rounded-sm">
                            Conviértete en Aliado
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Quiénes Somos Section (from mockup) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 block font-sans">Nuestra Identidad</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#182d5a] relative inline-block pb-4">
                            Quiénes Somos
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#d8aa25]"></span>
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 order-2 lg:order-1">
                            <p className="text-gray-600 mb-6 font-sans text-lg leading-relaxed">
                                Somos una organización sin fines de lucro comprometida con la defensa de los derechos humanos y la promoción de la equidad de género en el Perú.
                            </p>
                            <p className="text-gray-600 mb-8 font-sans text-lg leading-relaxed">
                                Desde nuestra fundación, trabajamos incansablemente para crear oportunidades de desarrollo, impulsando el liderazgo femenino y combatiendo las brechas de desigualdad de nuestra base.
                            </p>
                            <Link to="/nosotros" className="text-[#182d5a] font-bold font-sans uppercase tracking-wider text-sm hover:text-[#d8aa25] transition-colors flex items-center gap-2">
                                CONOCE NUESTRA HISTORIA <ArrowRight size={16} />
                            </Link>
                        </div>

                        <div className="flex-1 relative order-1 lg:order-2 w-full">
                            <div className="flex gap-4 lg:gap-8 items-stretch h-[300px] sm:h-[400px]">
                                <img src="/img/quienes-somos-1.png" alt="Mujer líder exponiendo" className="w-1/2 object-cover rounded-2xl shadow-xl" />
                                <img src="/img/quienes-somos-2.png" alt="Equipo de mujeres trabajando" className="w-1/2 object-cover rounded-2xl shadow-xl mt-8 lg:mt-12" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Misión y Visión Cards */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-10 rounded-xl shadow-sm border-l-4 border-[#2b4c8f] hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-[#f0f4f8] rounded-full flex items-center justify-center text-[#2b4c8f] mb-6">
                                <Award size={24} />
                            </div>
                            <h3 className="text-2xl font-bold font-serif text-[#182d5a] mb-4">Misión</h3>
                            <p className="text-gray-600 font-sans leading-relaxed">
                                Empoderar a mujeres peruanas a través de educación, liderazgo y apoyo integral, fomentando su autonomía económica, política y social para construir una sociedad más justa.
                            </p>
                        </div>
                        <div className="bg-white p-10 rounded-xl shadow-sm border-l-4 border-[#5c2b8b] hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-[#f5f0fa] rounded-full flex items-center justify-center text-[#5c2b8b] mb-6">
                                <Shield size={24} />
                            </div>
                            <h3 className="text-2xl font-bold font-serif text-[#182d5a] mb-4">Visión</h3>
                            <p className="text-gray-600 font-sans leading-relaxed">
                                Ser la organización referente en transformación social y equidad en el Perú, reconocida por su impacto sostenible en la vida de miles de mujeres y sus comunidades.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nuestros Programas Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 block font-sans">Nuestro Impacto</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#182d5a] relative inline-block pb-4">
                            Nuestros Programas
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#d8aa25]"></span>
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Mujer Renace', desc: 'Atención psicológica y legal para víctimas de violencia de género.', icon: '🌱' },
                            { title: 'Mujer Construye', desc: 'Capacitación técnica y emprendimiento para la autonomía económica.', icon: '🏢' },
                            { title: 'Mujer Avanza', desc: 'Escuela de liderazgo político y gestión comunitaria.', icon: '📈' },
                            { title: 'Casa Refugio', desc: 'Espacios seguros y acogida temporal para mujeres y sus hijos.', icon: '🏠' }
                        ].map((prog, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center">
                                <div className="text-4xl mb-6 opacity-80">{prog.icon}</div>
                                <h3 className="text-xl font-bold font-serif text-[#182d5a] mb-3">{prog.title}</h3>
                                <p className="text-gray-600 font-sans text-sm leading-relaxed mb-6 flex-grow">{prog.desc}</p>
                                <Link to="/programas" className="text-[#182d5a] font-bold text-xs uppercase tracking-widest hover:text-[#d8aa25] transition-colors flex items-center gap-1 mt-auto">
                                    Ver más ›
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Voluntariado Section (New) */}
            <section className="py-24 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="flex-1">
                            <span className="text-[#d8aa25] font-bold tracking-[0.2em] uppercase text-xs mb-3 block font-sans">Ley N.º 28238</span>
                            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#182d5a] mb-6">
                                Únete a nuestro Voluntariado
                            </h2>
                            <p className="text-gray-600 font-sans text-lg leading-relaxed mb-6">
                                Tu tiempo y talento pueden transformar vidas. Nuestro programa de voluntariado está reconocido bajo la Ley General del Voluntariado, garantizando una experiencia formal y enriquecedora.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-gray-700 font-sans"><span className="text-[#d8aa25]">★</span> Certificación oficial por horas de servicio.</li>
                                <li className="flex items-center gap-3 text-gray-700 font-sans"><span className="text-[#d8aa25]">★</span> Capacitación constante en enfoque de género.</li>
                                <li className="flex items-center gap-3 text-gray-700 font-sans"><span className="text-[#d8aa25]">★</span> Red de networking con profesionales del sector social.</li>
                            </ul>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                                <h3 className="text-xl font-bold font-serif text-[#182d5a] mb-6">Postula aquí</h3>
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 font-sans">Nombres Completos</label>
                                        <input type="text" placeholder="Tu nombre" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#d8aa25] focus:ring-1 focus:ring-[#d8aa25] outline-none transition-all font-sans text-sm" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 font-sans">Correo Electrónico</label>
                                        <input type="email" placeholder="correo@ejemplo.com" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#d8aa25] focus:ring-1 focus:ring-[#d8aa25] outline-none transition-all font-sans text-sm" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 font-sans">Área de Interés</label>
                                            <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#d8aa25] focus:ring-1 focus:ring-[#d8aa25] outline-none transition-all font-sans text-sm bg-white">
                                                <option>Legal</option>
                                                <option>Psicología</option>
                                                <option>Comunicaciones</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 font-sans">Disponibilidad</label>
                                            <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#d8aa25] focus:ring-1 focus:ring-[#d8aa25] outline-none transition-all font-sans text-sm bg-white">
                                                <option>Fines de semana</option>
                                                <option>Días de semana</option>
                                                <option>Remoto</option>
                                            </select>
                                        </div>
                                    </div>
                                    <Button variant="primary" className="w-full bg-[#182d5a] hover:bg-[#2b4c8f] py-4 rounded-lg mt-4 shadow-md font-bold">
                                        Enviar Postulación
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Aliados Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="flex flex-col lg:flex-row shadow-2xl rounded-2xl overflow-hidden bg-white border border-gray-100">
                        <div className="lg:w-1/2 bg-[#5c2b8b] p-12 lg:p-16 text-white flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-white">Aliados Estratégicos</h2>
                            <p className="text-[#e2cfff] font-sans text-lg leading-relaxed mb-10">
                                La transformación social requiere trabajo en equipo. Colaboramos con empresas, instituciones públicas y organismos internacionales para maximizar nuestro impacto.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div>
                                    <div className="text-[#d8aa25] mb-2"><Award size={24} /></div>
                                    <h4 className="font-bold font-sans text-lg mb-2 text-[#d8aa25]">Empresas</h4>
                                    <p className="text-sm text-[#e2cfff]">Responsabilidad Social Corporativa y voluntariado corporativo.</p>
                                </div>
                                <div>
                                    <div className="text-[#d8aa25] mb-2"><Shield size={24} /></div>
                                    <h4 className="font-bold font-sans text-lg mb-2 text-[#d8aa25]">Gobierno</h4>
                                    <p className="text-sm text-[#e2cfff]">Articulación de políticas públicas y ejecución de programas.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 p-12 lg:p-16 bg-white flex flex-col justify-center">
                            <h3 className="font-serif text-2xl font-bold text-[#5c2b8b] mb-6">Propuesta de Alianza</h3>
                            <form className="space-y-5">
                                <input type="text" placeholder="Nombre de la Organización" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#5c2b8b] focus:ring-1 focus:ring-[#5c2b8b] outline-none bg-gray-50/50 font-sans" />
                                <input type="text" placeholder="Persona de Contacto" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#5c2b8b] focus:ring-1 focus:ring-[#5c2b8b] outline-none bg-gray-50/50 font-sans" />
                                <input type="email" placeholder="Correo Corporativo" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#5c2b8b] focus:ring-1 focus:ring-[#5c2b8b] outline-none bg-gray-50/50 font-sans" />
                                <Button variant="outline" className="w-full border-2 border-[#5c2b8b] text-[#5c2b8b] hover:bg-[#5c2b8b] hover:text-white py-3">
                                    Contactar Alianza
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transparencia Strip */}
            <section className="border-t border-b border-gray-100 bg-gray-50 py-10">
                <div className="container mx-auto px-4 max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                        <div className="bg-[#e4ecf7] p-4 rounded-full text-[#182d5a]">
                            <Shield size={32} />
                        </div>
                        <div>
                            <h3 className="font-serif font-bold text-[#182d5a] text-xl">Transparencia y Rendición de Cuentas</h3>
                            <p className="font-sans text-gray-600 text-sm">Organización de trazabilidad radical. Accede a nuestros reportes financieros auditados.</p>
                        </div>
                    </div>
                    <Button to="/transparencia" variant="outline" className="whitespace-nowrap rounded-md border-gray-300 text-gray-700 hover:bg-gray-100 text-sm font-bold shadow-sm">
                        Ver Documentos
                    </Button>
                </div>
            </section>

            {/* Publicaciones y Noticias */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-4">
                        <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#182d5a]">Publicaciones y Noticias</h2>
                        <Link to="/publicaciones" className="text-sm font-sans text-gray-500 hover:text-[#d8aa25] transition-colors flex items-center gap-1 hidden sm:flex">
                            Ver todas las noticias <ArrowRight size={14} />
                        </Link>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-6">
                        {/* Noticia Principal (Izquierda) */}
                        <div className="lg:col-span-8 flex flex-col group cursor-pointer">
                            <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-[16/9] mb-6">
                                <img src="/img/noticia-1.png" alt="Estado Reconoce a LUZ RENACE" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute top-4 left-4 bg-[#d8aa25] text-[#182d5a] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm shadow-md">
                                    Destacado
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-sans text-gray-500 mb-3">
                                <span>📅 01 de Octubre, 2025</span>
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold font-serif text-[#182d5a] mb-4 group-hover:text-[#5c2b8b] transition-colors leading-tight">
                                Estado reconoce a LUZ RENACE por su labor en la prevención de la violencia
                            </h3>
                            <p className="text-gray-600 font-sans leading-relaxed flex-grow">
                                En una ceremonia oficial, el Ministerio de la Mujer y Poblaciones Vulnerables otorgó la distinción honorífica por el impacto del programa "Mujer Renace" en zonas rurales.
                            </p>
                        </div>

                        {/* Noticias Secundarias (Derecha) */}
                        <div className="lg:col-span-4 flex flex-col gap-8">
                            {/* Noticia 2 */}
                            <div className="flex flex-col group cursor-pointer">
                                <div className="overflow-hidden rounded-xl bg-gray-100 aspect-video mb-4">
                                    <img src="/img/noticia-2.png" alt="Empoderamiento económico" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                </div>
                                <span className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-2 font-sans block">Blog</span>
                                <h4 className="font-bold font-serif text-[#182d5a] text-lg group-hover:text-[#5c2b8b] transition-colors leading-tight">
                                    5 claves para el empoderamiento económico
                                </h4>
                            </div>

                            {/* Noticia 3 */}
                            <div className="flex flex-col group cursor-pointer">
                                <div className="overflow-hidden rounded-xl bg-gray-100 aspect-video mb-4">
                                    <img src="/img/noticia-3.png" alt="Informe Anual" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                </div>
                                <span className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-2 font-sans block">Reporte</span>
                                <h4 className="font-bold font-serif text-[#182d5a] text-lg group-hover:text-[#5c2b8b] transition-colors leading-tight">
                                    Informe Anual de Impacto 2025
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 sm:hidden text-center">
                        <Link to="/publicaciones" className="text-sm font-sans font-bold text-[#182d5a] hover:text-[#d8aa25] transition-colors inline-flex items-center gap-1 border border-[#182d5a] px-6 py-2 rounded-full">
                            Ver todas las noticias <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
