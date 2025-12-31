import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState, useEffect } from 'react';
import asciiArt from '../../assets/ascii.png';

interface TerminalModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const TerminalModal = ({ isOpen, onClose }: TerminalModalProps) => {
    const [text, setText] = useState("");
    const [showOutput, setShowOutput] = useState(false);
    const fullCommand = "neofetch";

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
                    setTimeout(() => setShowOutput(true), 500);
                }
            }, 100);
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
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-4xl bg-[#2e3440] rounded-lg overflow-hidden shadow-2xl font-mono text-white text-sm md:text-base border border-white/10"
                    >
                        {/* Ubuntu Header */}
                        <div className="bg-gradient-to-b from-[#3b4252] to-[#2e3440] px-4 py-2 flex items-center justify-between border-b border-black/50">
                            <div className="flex gap-2">
                                <button
                                    onClick={onClose}
                                    className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#bf616a] hover:bg-[#bf616a]/80 transition-colors flex items-center justify-center group"
                                >
                                    <X size={10} className="text-[#2e3440] opacity-0 group-hover:opacity-100" />
                                </button>
                                {/* Ubuntu usually has minimize/maximize too, but user asked for "only cross option" */}
                            </div>
                            <div className="text-gray-400 text-xs select-none">subrata@portfolio:~</div>
                            <div className="w-10"></div> {/* Spacer for centering */}
                        </div>

                        {/* Terminal Body */}
                        <div className="bg-[#000000] p-6 h-[60vh] md:h-[500px] overflow-y-auto custom-scrollbar">
                            <div className="flex gap-2 mb-4 text-green-400">
                                <span>subrata@linux:~$</span>
                                <span>{text}</span>
                                {!showOutput && <span className="w-2 h-5 bg-white animate-pulse" />}
                            </div>

                            {showOutput && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex flex-col md:flex-row gap-8 items-start animate-in fade-in duration-300"
                                >
                                    {/* ASCII Art - Left Side */}
                                    <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                                        <img src={asciiArt} alt="System Architecture" className="w-64 md:w-80 opacity-80" />
                                    </div>

                                    {/* System Info - Right Side */}
                                    <div className="w-full md:w-1/2 space-y-2 mt-4 md:mt-0 font-mono">
                                        <div className="flex gap-2">
                                            <span className="text-cyan-400 font-bold">subrata@portfolio</span>
                                        </div>
                                        <div className="w-full h-px bg-white/20 mb-4"></div>

                                        <InfoRow label="OS" value="Digital Architect OS v3.0" color="text-yellow-400" />
                                        <InfoRow label="Host" value="Portfolio Mainframe" color="text-yellow-400" />
                                        <InfoRow label="Kernel" value="Full Stack v14.x" color="text-yellow-400" />
                                        <InfoRow label="Uptime" value="14 Years, 24 Hours/Day" color="text-yellow-400" />
                                        <InfoRow label="Packages" value="320 (Expert Level)" color="text-yellow-400" />
                                        <InfoRow label="Shell" value="zsh 5.8" color="text-yellow-400" />
                                        <InfoRow label="Resolution" value="1920x1080 (High Impact)" color="text-yellow-400" />
                                        <InfoRow label="DE" value="React + Vite" color="text-yellow-400" />
                                        <InfoRow label="WM" value="Framer Motion" color="text-yellow-400" />
                                        <InfoRow label="Theme" value="Digital Dark [GTK3]" color="text-yellow-400" />
                                        <InfoRow label="Icons" value="Lucide React" color="text-yellow-400" />
                                        <InfoRow label="Terminal" value="Portfolio Term" color="text-yellow-400" />
                                        <InfoRow label="CPU" value="Brain 9900K @ 5.0GHz" color="text-yellow-400" />
                                        <InfoRow label="GPU" value="Creative Flow RTX 4090" color="text-yellow-400" />
                                        <InfoRow label="Memory" value="Infinite Learning Capacity" color="text-yellow-400" />

                                        {/* Color Palette Display at bottom */}
                                        <div className="flex gap-2 mt-6">
                                            <div className="w-8 h-4 bg-black"></div>
                                            <div className="w-8 h-4 bg-red-500"></div>
                                            <div className="w-8 h-4 bg-green-500"></div>
                                            <div className="w-8 h-4 bg-yellow-400"></div>
                                            <div className="w-8 h-4 bg-blue-500"></div>
                                            <div className="w-8 h-4 bg-purple-500"></div>
                                            <div className="w-8 h-4 bg-cyan-500"></div>
                                            <div className="w-8 h-4 bg-white"></div>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="text-green-400">subrata@linux:~$</span>
                                            <span className="w-2 h-5 bg-white animate-pulse" />
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

const InfoRow = ({ label, value, color }: { label: string, value: string, color: string }) => (
    <div className="flex gap-2">
        <span className={`${color} font-bold min-w-[100px]`}>{label}:</span>
        <span className="text-gray-300">{value}</span>
    </div>
);
