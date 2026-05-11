import { motion } from 'framer-motion';
import { ExternalLink, Cpu, Zap, Database, Settings } from 'lucide-react';
import { DecryptText } from './ui/DecryptText';
import { useState } from 'react';
import { TerminalModal } from './ui/TerminalModal';
import hoomanImage from '../assets/hooman.png';

export const Hero = () => {
    const [isTerminalOpen, setIsTerminalOpen] = useState(false);

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#030303]">
            <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />

            {/* Background Grid & Ambient Glow */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Content: The Mission Brief */}
                    <div className="flex-1 text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 text-cyan-500 font-mono text-sm mb-6"
                        >
                            <div className="w-10 h-[1px] bg-cyan-500/50" />
                            <span className="tracking-[0.3em] uppercase">Initializing_System_Auth...</span>
                        </motion.div>

                        <div className="space-y-2 mb-8">
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none">
                                <DecryptText text="Subrata" />
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">Jana</span>
                            </h1>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-cyan-500 tracking-tight">
                                <span className="opacity-50 mr-2">&gt;</span>
                                <DecryptText text="Backend Engineer" delay={1000} />
                                <span className="inline-block w-[3px] h-[0.9em] bg-cyan-500 ml-2 align-middle animate-pulse" />
                            </h2>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-xl text-gray-400 max-w-xl leading-relaxed mb-10 font-light"
                        >
                            Engineering scalable infrastructures and business automation systems that power the digital frontier.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-wrap gap-6"
                        >
                            <a
                                href="#projects"
                                className="group relative px-8 py-4 bg-cyan-500/10 text-cyan-400 font-black rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95 border border-cyan-500/50 hover:border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                            >
                                <div className="absolute inset-0 bg-cyan-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative z-10 flex items-center gap-2">
                                    VIEW_PROJECTS <ExternalLink size={18} />
                                </span>
                            </a>
                            <button
                                onClick={() => setIsTerminalOpen(true)}
                                className="group relative px-8 py-4 bg-transparent text-white font-mono border border-white/10 rounded-lg overflow-hidden transition-all hover:border-cyan-500/50"
                            >
                                <div className="absolute inset-0 bg-cyan-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative z-10 flex items-center gap-2 tracking-widest">
                                    SYSTEM_SPECS <Settings size={18} className="group-hover:rotate-90 transition-transform duration-700" />
                                </span>
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Content: The Visual Interface */}
                    <div className="flex-1 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative w-full max-w-[600px] mx-auto aspect-square"
                        >
                            {/* Rotating HUD Elements */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-[1px] border-dashed border-cyan-500/20 rounded-full"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-10 border-[1px] border-cyan-500/10 rounded-full"
                            />

                            {/* The Profile Image Container */}
                            <div className="absolute inset-4 overflow-hidden rounded-full border border-white/10 bg-black/40 backdrop-blur-xl group/photo">
                                <motion.img
                                    src={hoomanImage}
                                    alt="Subrata Jana"
                                    animate={{
                                        y: [0, -10, 0],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="w-full h-full object-contain relative z-20 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)] grayscale-[70%] brightness-110 contrast-110 opacity-90 group-hover/photo:grayscale-0 group-hover/photo:opacity-100 transition-all duration-700"
                                    style={{
                                        maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                                        WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)"
                                    }}
                                />
                                {/* Scanning Line */}
                                <motion.div
                                    animate={{ top: ['0%', '100%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-0 right-0 h-[2px] bg-cyan-500/50 shadow-[0_0_15px_#06b6d4] z-30"
                                />
                            </div>

                            {/* Floating Tech Orbs */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 right-0 p-4 bg-black/80 backdrop-blur-md border border-cyan-500/30 rounded-xl shadow-2xl z-40"
                            >
                                <div className="text-[10px] text-cyan-500 font-mono mb-1">CURRENT_STATUS</div>
                                <div className="text-xs font-bold text-white flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    SYSTEM_ONLINE
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-1/4 -left-8 p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl z-40"
                            >
                                <div className="text-[10px] text-gray-500 font-mono mb-1">PRIMARY_STACK</div>
                                <div className="flex gap-2 text-cyan-500">
                                    <Database size={16} />
                                    <Zap size={16} />
                                    <Cpu size={16} />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
