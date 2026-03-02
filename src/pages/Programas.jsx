import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { BookOpen, Briefcase, HeartHandshake, Home } from 'lucide-react';

const Programas = () => {
    const programs = [
        {
            id: 'mujer-renace',
            title: 'Mujer Renace',
            icon: <HeartHandshake size={32} />,
            desc: 'Programa integral de apoyo psicológico y emocional diseñado para reconstruir la autoestima y facilitar procesos de sanación en mujeres sobrevivientes de diferentes tipos de violencia.',
            color: 'bg-primary/5 text-primary border-primary/20'
        },
        {
            id: 'mujer-construye',
            title: 'Mujer Construye',
            icon: <Briefcase size={32} />,
            desc: 'Enfocado en la autonomía económica. Brindamos capacitación técnica, talleres de emprendimiento y educación financiera para que las beneficiarias generen ingresos sostenibles.',
            color: 'bg-accent/10 text-[#b59123] border-accent/30'
        },
        {
            id: 'mujer-avanza',
            title: 'Mujer Avanza',
            icon: <BookOpen size={32} />,
            desc: 'Liderazgo y participación política. Formamos a futuras lideresas para que ocupen espacios de toma de decisión en sus comunidades, promoviendo la agenda de equidad.',
            color: 'bg-secondary/5 text-secondary border-secondary/20'
        },
        {
            id: 'casa-refugio',
            title: 'Casa Refugio Integrales',
            icon: <Home size={32} />,
            desc: 'Espacios seguros y confidenciales para mujeres e infantes en situación de riesgo inminente, ofreciendo resguardo, alimentación, defensa legal y soporte psicológico continuo.',
            color: 'bg-rose-50 text-rose-700 border-rose-200'
        }
    ];

    return (
        <>
            <SEO title="Programas" description="Nuestros programas: Mujer Renace, Mujer Construye, Mujer Avanza y proyectos de Casa Refugio." />

            <section className="bg-primary/5 pt-24 pb-20 border-b border-primary/10 text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary"
                    >
                        <Briefcase size={32} />
                    </motion.div>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-accent font-bold tracking-widest uppercase text-sm block mb-4"
                    >
                        Líneas de Acción
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6 font-serif text-primary"
                    >
                        Programas de Impacto
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-neutral-dark font-sans leading-relaxed"
                    >
                        Diseñamos e implementamos proyectos estructurados que abordan las múltiples dimensiones del desarrollo femenino, garantizando soluciones sostenibles.
                    </motion.p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-10">
                        {programs.map((prog, idx) => (
                            <motion.div
                                key={prog.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className={`flex flex-col md:flex-row gap-6 p-8 rounded-2xl border ${prog.color} hover:shadow-xl transition-all duration-300 bg-white`}
                            >
                                <div className={`p-4 rounded-xl self-start ${prog.color.split(' ')[0]} ${prog.color.split(' ')[1]}`}>
                                    {prog.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3 font-serif text-primary">{prog.title}</h3>
                                    <p className="text-neutral-dark font-sans text-sm leading-relaxed mb-6">
                                        {prog.desc}
                                    </p>
                                    <Button to="/contacto" variant="outline" className="text-sm px-4 py-1.5 rounded-full border-current">
                                        Saber más
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial / Impact Stat */}
            <section className="py-20 bg-primary/5">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <div className="bg-white p-10 md:p-14 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-neutral-100">
                        <p className="text-xl md:text-2xl font-serif italic mb-8 leading-relaxed text-primary">
                            "Gracias a Mujer Construye logré formalizar mi negocio y asegurar la educación de mis hijos. Hoy soy una lideresa en mi comunidad."
                        </p>
                        <p className="font-sans font-bold text-accent uppercase tracking-wider text-sm flex items-center justify-center gap-2">
                            <span className="w-8 h-px bg-accent inline-block"></span>
                            BENEFICIARIA ANÓNIMA, CUSCO
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Programas;
