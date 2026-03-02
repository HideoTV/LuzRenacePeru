import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Calendar, ChevronRight, Bookmark, FileText } from 'lucide-react';

const Publicaciones = () => {
    const posts = [
        {
            id: 1,
            title: 'Inauguración de la Casa Refugio "María Elena Moyano" en el cono norte de Lima.',
            date: '15 de Mayo, 2025',
            category: 'Proyectos',
            excerpt: 'Con la presencia de autoridades locales, hemos aperturado nuestro segundo centro de acogida diseñado para proteger a madres e hijos víctimas de violencia extrema.'
        },
        {
            id: 2,
            title: 'Alianza estratégica interministerial en materia educativa para mujeres rurales.',
            date: '28 de Abril, 2025',
            category: 'Alianzas',
            excerpt: 'Firma del convenio macro que permitirá capacitar a más de 5,000 mujeres en destrezas tecnológicas y emprendimiento agrícola en la sierra sur.'
        },
        {
            id: 3,
            title: 'Reporte Anual: El impacto del programa "Mujer Construye" en la autonomía económica.',
            date: '10 de Marzo, 2025',
            category: 'Impacto',
            excerpt: 'Presentamos los resultados del 2024, destacando un incremento del 45% en la formalización de pequeños negocios impulsados por nuestras beneficiarias.'
        }
    ];

    return (
        <>
            <SEO title="Publicaciones y Noticias" description="Entérate de las últimas noticias, reconocimientos y proyectos de la ONG Luz Renace." />

            <section className="bg-primary/5 pt-24 pb-20 border-b border-primary/10">
                <div className="container mx-auto px-4 max-w-4xl text-center mb-10">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary"
                    >
                        <FileText size={32} />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold font-serif text-primary"
                    >
                        Publicaciones Institucionales
                    </motion.h1>
                </div>
                <div className="container mx-auto px-4 max-w-6xl">

                    {/* Highlighted Note */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-xl border border-neutral-100 flex flex-col md:flex-row group"
                    >
                        <div className="md:w-1/2 aspect-video md:aspect-auto bg-primary relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/80 to-primary/80 z-10 mix-blend-multiply"></div>
                            {/* Optional background image replacement */}
                            <div className="absolute inset-0 flex items-center justify-center text-white/50 font-serif z-20">
                                [Imagen de Reconocimiento Estatal]
                            </div>
                            <div className="absolute top-4 left-4 z-30 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold font-sans flex items-center gap-1 shadow-md">
                                <Bookmark size={14} /> Destacado
                            </div>
                        </div>
                        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                            <div className="flex items-center gap-2 text-sm text-neutral-dark font-sans mb-3">
                                <Calendar size={16} className="text-accent" />
                                <span>20 de Junio, 2025</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold font-serif text-primary mb-4 group-hover:text-secondary transition-colors leading-snug">
                                Luz Renace recibe la "Orden al Mérito de la Mujer" por su labor comunitaria.
                            </h2>
                            <p className="text-neutral-dark font-sans leading-relaxed mb-6">
                                El máximo reconocimiento otorgado por el Estado Peruano, a través del Ministerio de la Mujer y Poblaciones Vulnerables, validando el rigor, la transparencia y el profundo impacto de nuestro modelo de intervención.
                            </p>
                            <Button variant="outline" className="self-start px-6 gap-2 border-primary text-primary hover:bg-primary hover:text-white">
                                Leer comunicado oficial <ChevronRight size={18} />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h3 className="text-2xl font-bold font-serif text-secondary mb-10">Últimas Noticias</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {posts.map((post, idx) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="bg-neutral-light rounded-xl overflow-hidden hover:shadow-lg transition-shadow border border-neutral-100 flex flex-col"
                            >
                                <div className="aspect-video bg-neutral-200 border-b border-neutral-200 flex items-center justify-center text-neutral-400 font-serif italic text-sm">
                                    [Imagen de archivo]
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-xs font-bold text-accent uppercase tracking-wider font-sans">{post.category}</span>
                                        <span className="text-xs text-neutral-dark font-sans flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                    </div>
                                    <h4 className="text-xl font-bold font-serif text-primary mb-3 leading-tight hover:text-secondary cursor-pointer transition-colors">
                                        {post.title}
                                    </h4>
                                    <p className="text-sm text-neutral-dark font-sans mb-4 flex-grow line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <Button variant="ghost" className="p-0 text-primary hover:text-secondary self-start font-bold mt-auto h-auto min-h-0 min-w-0">
                                        Leer más <ChevronRight size={16} className="mt-0.5" />
                                    </Button>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Publicaciones;
