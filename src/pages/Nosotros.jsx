import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Nosotros = () => {
    return (
        <>
            <SEO title="Nosotros" description="Conoce nuestra historia, misión, visión y los valores que nos impulsan en Luz Renace." />

            {/* Page Header */}
            <section className="bg-primary/5 pt-24 pb-20 border-b border-primary/10 text-center">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary"
                    >
                        <CheckCircle size={32} />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4 font-serif text-primary"
                    >
                        Quiénes Somos
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-neutral-dark max-w-2xl mx-auto font-sans"
                    >
                        Nuestra institución está comprometida con el desarrollo integral y el fortalecimiento del liderazgo femenino en el Perú.
                    </motion.p>
                </div>
            </section>

            {/* History & Identity */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex-1 space-y-6">
                            <span className="text-secondary font-bold tracking-widest uppercase text-sm font-sans block">Historia Institucional</span>
                            <h2 className="text-3xl font-bold text-primary">Forjando un futuro de equidad</h2>
                            <p className="text-neutral-dark leading-relaxed font-sans">
                                Luz Renace nace como respuesta a la urgente necesidad de promover la equidad de género y proteger a las mujeres en situación de vulnerabilidad.
                            </p>
                            <p className="text-neutral-dark leading-relaxed font-sans">
                                Nos constituimos formalmente bajo el marco de la <strong>Ley N.º 28238</strong>, garantizando nuestra institucionalidad y compromiso con las normativas peruanas, trabajando hombro a hombro con entidades públicas, empresa privada y sociedad civil.
                            </p>
                        </div>
                        <div className="flex-1 relative">
                            <div className="aspect-[4/3] bg-neutral-light rounded-2xl overflow-hidden shadow-xl border border-neutral-200 flex items-center justify-center">
                                <span className="text-primary font-serif italic opacity-50">[Imagen Institucional del Equipo]</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission and Vision Grid */}
            <section className="py-20 bg-neutral-light">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Mision */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-primary"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-primary font-serif">Nuestra Misión</h3>
                            <p className="text-neutral-dark font-sans leading-relaxed">
                                Empoderar a la mujer peruana, promover la equidad de género y erradicar la violencia a través de programas integrales sustentados en la capacitación, defensa legal y fortalecimiento del liderazgo femenino en la sociedad.
                            </p>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-accent"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-primary font-serif">Nuestra Visión</h3>
                            <p className="text-neutral-dark font-sans leading-relaxed">
                                Ser la principal ONG del Perú reconocida por su modelo de gestión, transparencia e impacto directo en la reducción de brechas sociales hacia la mujer, logrando una sociedad equitativa, segura e incluyente.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Corporate Values */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold font-serif mb-4">Nuestros Valores</h2>
                        <p className="text-neutral-dark max-w-2xl mx-auto font-sans">
                            Los pilares que fundamentan nuestras acciones y nos otorgan credibilidad frente a nuestros aliados y beneficiarios.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: 'Transparencia', val: 'Gestión ética de recursos y rendición de cuentas pública.' },
                            { title: 'Sororidad', val: 'Alianza y solidaridad entre mujeres por la defensa conjunta de derechos.' },
                            { title: 'Excelencia', val: 'Rigurosidad profesional en la ejecución de todos nuestros programas.' },
                            { title: 'Integridad', val: 'Actuar bajo principios éticos y profundo respeto a la dignidad humana.' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col items-start text-left">
                                <div className="text-[#d8aa25] mb-6">
                                    <CheckCircle size={32} />
                                </div>
                                <h4 className="text-xl font-bold mb-3 font-serif text-[#182d5a]">{item.title}</h4>
                                <p className="text-sm text-gray-600 font-sans leading-relaxed flex-grow">
                                    {item.val}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Nosotros;
