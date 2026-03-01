import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { FileText, Heart } from 'lucide-react';

const Voluntariado = () => {
    return (
        <>
            <SEO title="Voluntariado" description="Únete a nuestra red de voluntariado y sé parte del cambio en la vida de cientos de mujeres." />

            <section className="bg-primary/5 pt-24 pb-20 border-b border-primary/10">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary"
                    >
                        <Heart size={32} />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4 font-serif text-primary"
                    >
                        Sé Voluntario/a
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-neutral-dark font-sans"
                    >
                        Aporta tu tiempo y talento para consolidar nuestra misión institucional.
                    </motion.p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl flex flex-col lg:flex-row gap-16">

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-neutral-100">
                            <h2 className="text-2xl font-bold mb-6 font-serif text-primary">Formulario de Postulación</h2>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-dark mb-2 font-sans">Nombres Completos</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Ej. María Sánchez" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-dark mb-2 font-sans">DNI / Carné de Extranjería</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Ej. 12345678" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-dark mb-2 font-sans">Correo Electrónico</label>
                                        <input type="email" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="correo@ejemplo.com" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-dark mb-2 font-sans">Teléfono / Celular</label>
                                        <input type="tel" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="+51 900 000 000" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-dark mb-2 font-sans">Área de Interés (Profesión o Técnica)</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white">
                                        <option value="">Seleccione un área...</option>
                                        <option value="legal">Asesoría Legal</option>
                                        <option value="psicologia">Soporte Psicológico</option>
                                        <option value="educacion">Capacitación y Educación</option>
                                        <option value="comunicaciones">Comunicaciones y Diseño</option>
                                        <option value="logistica">Logística y Apoyo General</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-dark mb-2 font-sans">Mensaje o Motivación</label>
                                    <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none" placeholder="Cuéntanos por qué deseas unirte a nuestra ONG..."></textarea>
                                </div>

                                <Button type="submit" variant="primary" className="w-full py-4 text-lg">
                                    Enviar Postulación
                                </Button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Institutional Context */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 lg:max-w-md flex flex-col gap-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-4 font-serif text-secondary">¿Por qué ser voluntario/a?</h3>
                            <p className="text-neutral-dark font-sans leading-relaxed mb-4">
                                En Luz Renace, tu voluntariado no solo es una acción social; es un ejercicio de ciudadanía que fortalece la democracia y promueve la equidad real.
                            </p>
                            <ul className="space-y-3">
                                {['Constancia oficial de voluntariado.', 'Capacitaciones continuas en enfoque de género.', 'Red de networking con profesionales destacados.', 'Impacto directo y medible en la sociedad.'].map((item, i) => (
                                    <li key={i} className="flex gap-3">
                                        <span className="text-accent mt-1">✔</span>
                                        <span className="text-neutral-dark text-sm font-sans">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-neutral-light p-6 rounded-xl border-l-4 border-primary">
                            <div className="flex gap-3 items-center mb-3 text-primary">
                                <FileText size={20} />
                                <h4 className="font-bold text-lg font-serif">Marco Legal Oficial</h4>
                            </div>
                            <p className="text-sm text-neutral-dark font-sans leading-relaxed">
                                Todos nuestros programas de voluntariado se rigen bajo los parámetros exigidos por la <strong>Ley N.º 28238</strong>, Ley General del Voluntariado, sus modificatorias y reglamento. Al participar, nuestros voluntarios ingresan al Registro Oficial Interno, asegurando una labor reconocida y formalizada por el Estado Peruano.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Voluntariado;
