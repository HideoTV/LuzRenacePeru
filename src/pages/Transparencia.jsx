import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Download, FileText, Lock, TrendingUp } from 'lucide-react';

const Transparencia = () => {
    return (
        <>
            <SEO title="Transparencia" description="Portal de Transparencia de Luz Renace ONG Perú. Declaraciones legales y financieras." />

            <section className="bg-neutral-light pt-24 pb-20 border-b border-neutral-200">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center mx-auto mb-6 text-primary"
                    >
                        <Lock size={32} />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4 font-serif text-primary"
                    >
                        Portal de Transparencia
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-neutral-dark font-sans"
                    >
                        Garantizamos el uso eficiente, ético y auditable de todos los fondos y donaciones encomendados a nuestra institución.
                    </motion.p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-primary/5 p-8 md:p-12 rounded-2xl border border-primary/20 mb-16">
                        <h2 className="text-2xl font-bold font-serif text-primary mb-6 flex items-center gap-3">
                            <TrendingUp size={28} />
                            Compromiso de Rendición de Cuentas
                        </h2>
                        <p className="text-neutral-dark font-sans leading-relaxed mb-6">
                            Como Organización No Gubernamental inscrita formalmente en los registros públicos peruanos, estamos sujetos a estrictas normativas tributarias y de supervisión. Publicamos anualmente nuestro balance financiero y el reporte de impacto social, validado por auditorías externas independientes.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-neutral-100">
                                <div className="flex items-center gap-3">
                                    <FileText className="text-secondary" />
                                    <span className="font-bold font-serif text-primary">Memoria Institucional 2024</span>
                                </div>
                                <Button variant="ghost" className="p-2 min-w-0" aria-label="Descargar Memoria 2024">
                                    <Download size={20} />
                                </Button>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-neutral-100">
                                <div className="flex items-center gap-3">
                                    <FileText className="text-secondary" />
                                    <span className="font-bold font-serif text-primary">EE.FF. Auditados 2024</span>
                                </div>
                                <Button variant="ghost" className="p-2 min-w-0" aria-label="Descargar EE.FF. 2024">
                                    <Download size={20} />
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <h3 className="text-xl font-bold font-serif text-primary mb-6">Documentación Legal y Estatutaria</h3>
                        <p className="text-sm text-neutral-dark font-sans max-w-2xl mx-auto mb-8">
                            Copia de la partida registral, estatutos de constitución, y actas del consejo directivo se encuentran disponibles para revisión de nuestros donantes y aliados estratégicos previa solicitud formal.
                        </p>
                        <Button to="/contacto" variant="primary" className="py-3 px-8 shadow-md shadow-primary/20">
                            Solicitar Documentación Confidencial
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Transparencia;
