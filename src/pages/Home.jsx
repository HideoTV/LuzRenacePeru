import SEO from '../components/SEO';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Shield, Award } from 'lucide-react';

const Home = () => {
    return (
        <>
            <SEO title="Inicio" />

            {/* Hero Section */}
            <section className="relative bg-neutral-light overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary opacity-5 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent opacity-10 blur-3xl"></div>

                <div className="container mx-auto px-4 py-20 lg:py-32 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 text-center lg:text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary"
                        >
                            Mujeres con propósito que <span className="text-secondary relative">
                                transforman el Perú
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="transparent" />
                                </svg>
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-neutral-dark mb-10 max-w-2xl mx-auto lg:mx-0 font-sans"
                        >
                            Promovemos la institucionalidad, el liderazgo femenino y la equidad de género a través de programas de desarrollo integral, educación y defensa legal.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Button to="/voluntariado" variant="primary" className="text-base py-3 px-8 shadow-lg shadow-primary/30">
                                Sé voluntario/a <ArrowRight size={18} className="ml-2" />
                            </Button>
                            <Button to="/aliados" variant="outline" className="text-base py-3 px-8 bg-white/50 backdrop-blur-sm">
                                Conviértete en aliado
                            </Button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full max-w-lg lg:max-w-none relative"
                    >
                        {/* Image Placeholder with premium styling */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-gradient-to-tr from-primary/10 to-accent/10 aspect-square md:aspect-[4/3] flex items-center justify-center">
                            <span className="text-primary font-serif italic text-xl opacity-50">[Imagen Hero Representativa]</span>
                        </div>

                        {/* Floating Badges */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-neutral-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                            <div className="bg-primary/10 p-3 rounded-full text-primary">
                                <Users size={24} />
                            </div>
                            <div>
                                <p className="font-bold text-xl text-primary font-serif">+500</p>
                                <p className="text-xs text-neutral-dark font-sans uppercase tracking-wider">Mujeres Impactadas</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Institutional Pillars */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block font-sans">Nuestros Pilares</span>
                        <h2 className="text-3xl md:text-4xl font-bold">Liderazgo con Transparencia</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <Shield size={32} />, title: 'Institucionalidad', desc: 'Sólida base legal (Ley N.º 28238) que garantiza nuestro compromiso con el país y total transparencia.' },
                            { icon: <Users size={32} />, title: 'Liderazgo Femenino', desc: 'Empoderamos a mujeres para que asuman roles de liderazgo en su comunidad y ámbito profesional.' },
                            { icon: <Award size={32} />, title: 'Desarrollo Integral', desc: 'Programas estructurados que abordan educación, salud emocional y autonomía económica.' }
                        ].map((pillar, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-neutral-light p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-accent/30 group"
                            >
                                <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center text-primary shadow-sm mb-6 group-hover:scale-110 group-hover:text-accent transition-all duration-300">
                                    {pillar.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                                <p className="text-neutral-dark font-sans leading-relaxed text-sm">
                                    {pillar.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick CTA */}
            <section className="py-20 bg-secondary text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>
                <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">¿Lista para ser parte del cambio?</h2>
                    <p className="text-lg text-gray-300 mb-10 font-sans max-w-2xl mx-auto">
                        Únete a nuestra red de mujeres líderes, dona para sostener nuestros programas o conviértete en un aliado estratégico.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button to="/programas" variant="accent" className="text-base py-3 px-8 shadow-lg shadow-accent/30">
                            Conoce los Programas
                        </Button>
                        <Button to="/contacto" variant="ghost" className="text-base py-3 px-8 text-white border border-white/30 hover:bg-white/10 hover:text-white">
                            Contáctanos
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
