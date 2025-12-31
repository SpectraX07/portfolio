import { motion } from 'framer-motion';
import { Terminal, ArrowRight, Settings } from 'lucide-react';
import { NavLink } from './ui/NavLink';
import { useState } from 'react';
import { TerminalModal } from './ui/TerminalModal';

export const Hero = () => {
    const [isTerminalOpen, setIsTerminalOpen] = useState(false);

    return (
        <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
            <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />

            <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />

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
                            Senior Backend Engineer
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed"
                    >
                        Architecting the Invisible. I build robust, scalable backend systems that power the digital world.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-cyan-600/80 font-mono text-sm mb-10"
                    >
                        &lt;SystemStatus status="ONLINE" /&gt;
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap gap-4"
                    >
                        <NavLink href="#projects" className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-cyan-500/25">
                            <ArrowRight size={18} /> View Projects
                        </NavLink>

                        <button
                            onClick={() => setIsTerminalOpen(true)}
                            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3 rounded-lg font-mono transition-all backdrop-blur-sm group hover:border-cyan-500/50 hover:text-cyan-400"
                        >
                            <Settings size={18} className="group-hover:rotate-90 transition-transform duration-700" />
                            System Specs
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
