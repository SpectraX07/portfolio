import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal as TerminalIcon, Cpu, Database, Cloud, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';
import asciiArt from '../../assets/ascii.png';

interface TerminalModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const TerminalModal = ({ isOpen, onClose }: TerminalModalProps) => {
    const [text, setText] = useState("");
    const [showOutput, setShowOutput] = useState(false);
    const fullCommand = "neofetch --source backend_sys";

    // Robust Body scroll lock
    useEffect(() => {
        if (isOpen) {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollBarWidth}px`;
            document.body.style.height = '100%';
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
            document.body.style.height = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
            document.body.style.height = '';
        };
    }, [isOpen]);

    // Escape key listener
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
        }
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onClose]);

    useEffect(() => {
        if (isOpen) {
            setText("");
            setShowOutput(false);
            let i = 0;
            const typingInterval = setInterval(() => {
                if (i <= fullCommand.length) {
                    setText(fullCommand.slice(0, i));
                    i++;
                } else {
                    clearInterval(typingInterval);
                    setTimeout(() => setShowOutput(true), 400);
                }
            }, 60);
            return () => clearInterval(typingInterval);
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8 touch-none"
                    onClick={onClose}
                    onWheel={(e) => e.stopPropagation()}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-4xl bg-black/90 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.2)] font-mono text-white text-sm md:text-base border border-cyan-500/30 relative flex flex-col max-h-[90vh]"
                    >
                        {/* CRT Scanline Overlay */}
                        <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
                        
                        {/* Terminal Header */}
                        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-5 py-4 flex items-center justify-between border-b border-cyan-500/20 flex-shrink-0 select-none">
                            <div className="flex gap-2 items-center">
                                <div className="flex gap-1.5 mr-4">
                                    <button onClick={onClose} className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] hover:brightness-125 transition-all active:scale-90" title="Close" />
                                    <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
                                    <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
                                </div>
                                <TerminalIcon size={14} className="text-cyan-500/70" />
                                <span className="text-[10px] text-gray-400 tracking-widest uppercase hidden sm:inline">System_Link // Secure_Shell</span>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/5 rounded-full transition-all active:scale-90"
                                aria-label="Close modal"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Terminal Body */}
                        <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar relative flex-1 touch-auto">
                            <div className="flex gap-2 mb-6 text-cyan-400 group">
                                <span className="opacity-70">subrata@portfolio:~$</span>
                                <span className="font-bold">{text}</span>
                                {!showOutput && <span className="w-2.5 h-5 bg-cyan-500 animate-pulse" />}
                            </div>

                            {showOutput && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex flex-col md:flex-row gap-10 items-start"
                                >
                                    {/* System Logo Area */}
                                    <div className="w-full md:w-auto flex flex-col items-center gap-6">
                                        <div className="relative group">
                                            <div className="absolute inset-0 bg-cyan-500/20 blur-2xl group-hover:bg-cyan-500/30 transition-all duration-500" />
                                            <img src={asciiArt} alt="System Architecture" className="w-56 md:w-72 relative z-10 brightness-110 drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]" />
                                        </div>
                                        <div className="flex gap-3">
                                            {[...Array(8)].map((_, i) => (
                                                <div key={i} className="w-3 h-3 rounded-sm border border-cyan-500/30 flex items-center justify-center p-[2px]">
                                                    <div className={`w-full h-full rounded-[1px] ${i < 6 ? 'bg-cyan-500/50' : 'bg-transparent'}`} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* System Specs Area */}
                                    <div className="flex-1 space-y-3 font-mono">
                                        <div className="mb-6">
                                            <span className="text-cyan-400 font-black text-xl tracking-tight">subrata@portfolio</span>
                                            <div className="h-px w-full bg-gradient-to-r from-cyan-500/50 via-cyan-500/20 to-transparent mt-1"></div>
                                        </div>

                                        <InfoRow icon={<Cpu size={14}/>} label="OS" value="Backend Architecture v5.0" />
                                        <InfoRow icon={<TerminalIcon size={14}/>} label="Host" value="Logic_Engine_Mainframe" />
                                        <InfoRow icon={<Code size={14}/>} label="Kernel" value="Node.js 20.x LTS (x64)" />
                                        <InfoRow icon={<Database size={14}/>} label="Uptime" value="4 years, 10 months" />
                                        <InfoRow icon={<Cloud size={14}/>} label="Packages" value="1250+ (NPM Ecosystem)" />
                                        <InfoRow icon={<Shield size={14}/>} label="Shell" value="zsh 5.9 (oh-my-zsh)" />
                                        <InfoRow icon={<Zap size={14}/>} label="CPU" value="Distributed Node Cluster" />
                                        <InfoRow icon={<Database size={14}/>} label="DB" value="PostgreSQL // Redis" />
                                        <InfoRow icon={<Cloud size={14}/>} label="Cloud" value="AWS // Docker // CI/CD" />
                                        
                                        {/* Activity Log Simulation */}
                                        <div className="mt-8 pt-6 border-t border-white/5 space-y-1">
                                            <div className="flex gap-3 text-[10px] text-gray-500">
                                                <span className="text-green-500">[OK]</span>
                                                <span>DATABASE_CONNECTION_ESTABLISHED</span>
                                            </div>
                                            <div className="flex gap-3 text-[10px] text-gray-500">
                                                <span className="text-green-500">[OK]</span>
                                                <span>API_GATEWAY_ROUTING_READY</span>
                                            </div>
                                            <div className="flex gap-3 text-[10px] text-cyan-500/60 animate-pulse">
                                                <span className="text-cyan-500">[RUNNING]</span>
                                                <span>REAL_TIME_SOCKET_SYNC...</span>
                                            </div>
                                        </div>

                                        <div className="flex gap-2 mt-8">
                                            <span className="text-cyan-400/70">subrata@portfolio:~$</span>
                                            <span className="w-2.5 h-5 bg-cyan-500 animate-pulse" />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const InfoRow = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
    <div className="flex items-center gap-3 group">
        <span className="text-cyan-500/40 group-hover:text-cyan-500 transition-colors">{icon}</span>
        <span className="text-cyan-400 font-bold min-w-[90px] text-xs uppercase tracking-wider">{label}:</span>
        <span className="text-gray-300 group-hover:text-white transition-colors">{value}</span>
    </div>
);

const Code = ({ size }: { size: number }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </svg>
);

const Zap = ({ size }: { size: number }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
);
