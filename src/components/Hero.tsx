import { motion } from 'framer-motion';
import { Code, Terminal, Cpu } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background">
            {/* Background Grid Animation */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-cyan-500 opacity-20 blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6 flex items-center gap-2 text-cyan-500 font-mono text-sm"
                    >
                        <Terminal size={16} />
                        <span>INITIALIZING SYSTEM...</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-tight"
                    >
                        Subrata Jana
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                            Digital Architect
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
                    >
                        Architecting the invisible. I build robust, scalable backend systems
                        that power the digital world.
                        <span className="block mt-4 text-cyan-500/60 font-mono text-sm">
                            &lt;SystemStatus status="ONLINE" /&gt;
                        </span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap gap-4"
                    >
                        <button className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-black font-bold rounded-lg transition-all hover:scale-105 flex items-center gap-2">
                            <Code size={20} />
                            View Projects
                        </button>
                        <button className="px-8 py-3 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-950/30 rounded-lg transition-all hover:scale-105 flex items-center gap-2">
                            <Cpu size={20} />
                            System Specs
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Floating Elements */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 right-20 opacity-20 hidden lg:block"
            >
                <Code size={120} className="text-cyan-500" />
            </motion.div>
        </section>
    );
};
