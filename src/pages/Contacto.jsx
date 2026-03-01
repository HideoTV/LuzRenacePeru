import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contacto = () => {
    return (
        <>
            <SEO title="Contacto" description="Comunícate con la ONG Luz Renace Perú a través de nuestros canales oficiales." />

            <section className="bg-primary/5 pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4 font-serif text-primary"
                    >
                        Contacto Institucional
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-neutral-dark font-sans"
                    >
                        Estamos a su entera disposición. Escríbanos o visite nuestra sede administrativa formal para cualquier requerimiento documentario o institucional.
                    </motion.p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl flex flex-col lg:flex-row gap-12">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 lg:max-w-md bg-secondary text-white p-8 md:p-10 rounded-2xl shadow-xl border border-[#2b4c8f] flex flex-col justify-between"
                    >
                        <div>
                            <h2 className="text-2xl font-bold mb-8 font-serif">Información de Contacto</h2>
                            <ul className="space-y-8">
                                <li className="flex gap-4 items-start">
                                    <MapPin className="text-accent flex-shrink-0 mt-1" size={24} />
                                    <div>
                                        <h3 className="font-bold font-sans uppercase text-sm tracking-wider text-gray-400 mb-1">Sede Administrativa</h3>
                                        <p className="font-sans leading-relaxed text-gray-200">
                                            Av. Principal 1234, Oficina 405<br />
                                            Distrito Financiero, Lima<br />
                                            Lima - Perú
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <Phone className="text-accent flex-shrink-0 mt-1" size={24} />
                                    <div>
                                        <h3 className="font-bold font-sans uppercase text-sm tracking-wider text-gray-400 mb-1">Central Telefónica</h3>
                                        <p className="font-sans text-gray-200">+51 (1) 000-0000</p>
                                        <p className="font-sans text-gray-200 text-sm italic mt-1">(Lun - Vie: 9:00 am a 6:00 pm)</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <Mail className="text-accent flex-shrink-0 mt-1" size={24} />
                                    <div>
                                        <h3 className="font-bold font-sans uppercase text-sm tracking-wider text-gray-400 mb-1">Correos Oficiales</h3>
                                        <div className="space-y-2 text-sm text-gray-200 font-sans">
                                            <p><strong className="text-white block">Consultas Generales:</strong> contacto@luzrenaceperu.org</p>
                                            <p><strong className="text-white block">Área de Prensa:</strong> comunicaciones@luzrenaceperu.org</p>
                                            <p><strong className="text-white block">Alianzas y Donaciones:</strong> impacto@luzrenaceperu.org</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-12 pt-8 border-t border-[#3a5d9f] text-sm text-gray-400 font-sans">
                            *Las visitas a nuestra sede administrativa requieren cita previa o coordinación con nuestras secretarías técnicas por protocolos de seguridad.
                        </div>
                    </motion.div>

                    {/* Contact Form & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 flex flex-col gap-10"
                    >
                        <div className="bg-white">
                            <h2 className="text-2xl font-bold mb-6 font-serif text-primary">Envíanos un mensaje rápido</h2>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-dark mb-1 font-sans">Nombres Completos</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-dark mb-1 font-sans">Correo Electrónico</label>
                                        <input type="email" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-dark mb-1 font-sans">Asunto</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-dark mb-1 font-sans">Mensaje</label>
                                    <textarea rows="5" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"></textarea>
                                </div>
                                <Button type="submit" variant="primary" className="py-3 px-8 flex items-center gap-2">
                                    <Send size={18} /> Enviar Mensaje
                                </Button>
                            </form>
                        </div>

                        {/* Simulated Map */}
                        <div className="bg-neutral-light rounded-2xl overflow-hidden aspect-video relative flex items-center justify-center border border-neutral-200 shadow-inner">
                            <div className="absolute inset-0 bg-neutral-200/50 flex flex-col items-center justify-center">
                                <MapPin size={48} className="text-primary/30 mb-2" />
                                <span className="font-serif text-neutral-500 italic">[Mapa Opcional - API Georeferencial]</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Contacto;
