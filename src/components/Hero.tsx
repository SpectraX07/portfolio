import { motion } from 'framer-motion';
import { Terminal, ArrowRight, Settings } from 'lucide-react';
import { NavLink } from './ui/NavLink';
import { useState } from 'react';
import { TerminalModal } from './ui/TerminalModal';
import hoomanImage from '../assets/hooman.png';

export const Hero = () => {
    const [isTerminalOpen, setIsTerminalOpen] = useState(false);

    return (
        <section className="min-h-screen relative flex items-center justify-center overflow-hidden py-20 lg:py-0">
            <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Text Content - Left Side */}
                    <div className="flex-1 max-w-3xl">
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
                            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight"
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

                    {/* Image Content - Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex-1 relative max-w-lg lg:max-w-xl"
                    >
                        <div className="relative z-10 w-full aspect-square md:aspect-[4/5] flex items-center justify-center">
                            {/* Holographic Border/Background */}
                            <div className="absolute inset-4 bg-gradient-to-tr from-cyan-500/10 to-blue-600/10 rounded-2xl blur-xl" />

                            {/* The Image */}
                            <motion.img
                                src={hoomanImage}
                                alt="Subrata Jana"
                                animate={{
                                    y: [0, -10, 0],
                                    filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-full h-full object-contain relative z-20 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                                style={{
                                    maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                                    WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)"
                                }}
                            />

                            {/* Tech Overlay Effects */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-3xl" />
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-cyan-500/30 rounded-bl-3xl" />

                            {/* Floating Tech Badge */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                                className="absolute top-1/4 -right-8 bg-black/80 backdrop-blur-md border border-cyan-500/30 p-4 rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.2)] hidden md:block"
                            >
                                <div className="text-xs text-cyan-400 font-mono mb-1">CURRENT_ROLE</div>
                                <div className="font-bold text-white">Full Stack Dev</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
