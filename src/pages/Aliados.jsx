import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Handshake, Building, Scale, Landmark } from 'lucide-react';

const Aliados = () => {
    return (
        <>
            <SEO title="Aliados Estratégicos" description="Alianzas corporativas e institucionales por el desarrollo integral de la mujer." />

            <section className="bg-primary/5 pt-24 pb-20 border-b border-primary/10">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary"
                    >
                        <Handshake size={32} />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4 font-serif text-primary"
                    >
                        Aliados Estratégicos
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-neutral-dark font-sans max-w-3xl mx-auto"
                    >
                        El sector privado, las entidades públicas y la cooperación internacional son fundamentales para generar un impacto a gran escala. Juntos, cerramos brechas.
                    </motion.p>
                </div>
            </section>

            <section className="py-20 bg-neutral-light">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold font-serif mb-4 text-primary">Un modelo de alianza institucional</h2>
                        <p className="text-neutral-dark font-sans max-w-2xl mx-auto">
                            Nuestra política de alianzas se basa en la transparencia, el mutuo beneficio y la creación de valor compartido para la sociedad y la organización.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <Building size={32} />, title: 'Empresa Privada', desc: 'Responsabilidad Social Empresarial (RSE), auspicios de programas específicos, donaciones corporativas deducibles de impuestos.' },
                            { icon: <Landmark size={32} />, title: 'Entidades Públicas', desc: 'Convenios de cooperación interinstitucional con ministerios, gobiernos regionales, locales y organismos autónomos.' },
                            { icon: <Scale size={32} />, title: 'Acreditación Legal', desc: 'Procesos de auditoría de fondos y cumplimiento de la Ley de Organizaciones No Gubernamentales peruana y estándares internacionales.' }
                        ].map((block, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-md border-t-4 border-accent hover:shadow-lg transition-all"
                            >
                                <div className="text-accent mb-6 bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center">{block.icon}</div>
                                <h3 className="text-xl font-bold mb-3 font-serif text-primary">{block.title}</h3>
                                <p className="text-neutral-dark font-sans text-sm leading-relaxed">{block.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full"
                    >
                        <div className="bg-white p-8 md:p-12 rounded-2xl text-neutral-dark shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-neutral-100 relative overflow-hidden flex flex-col justify-between">
                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold mb-6 font-serif text-primary">Iniciemos una conversación</h2>
                                <p className="text-neutral-500 mb-8 font-sans leading-relaxed">
                                    Completa el siguiente formulario y nuestra Dirección de Alianzas e Impacto se comunicará a la brevedad para agendar una reunión institucional.
                                </p>
                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <div>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 bg-white text-neutral-dark focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-sans" placeholder="Nombre de la Institución / Empresa" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 bg-white text-neutral-dark focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-sans" placeholder="Persona de Contacto" />
                                        </div>
                                        <div>
                                            <input type="email" className="w-full px-4 py-3 rounded-lg border border-neutral-300 bg-white text-neutral-dark focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-sans" placeholder="Correo Corporativo" />
                                        </div>
                                    </div>
                                    <div>
                                        <textarea rows="3" className="w-full px-4 py-3 rounded-lg border border-neutral-300 bg-white text-neutral-dark focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-sans resize-none" placeholder="Breve descripción del interés de alianza"></textarea>
                                    </div>
                                    <Button type="submit" variant="primary" className="w-full py-4 shadow-lg">
                                        Enviar Propuesta
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex-1 w-full">
                        <h3 className="text-2xl font-bold mb-6 font-serif text-primary">Algunos de nuestros aliados</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map(num => (
                                <div key={num} className="bg-neutral-light border border-neutral-200 rounded-lg aspect-video flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                                    <span className="font-sans text-xs text-neutral-dark font-bold uppercase tracking-widest">Logo Aliado {num}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-neutral-dark mt-6 italic font-sans">
                            "Trabajar con Luz Renace significa invertir en proyectos con trazabilidad, medición de impacto y total transparencia financiera."
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Aliados;
