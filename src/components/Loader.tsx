import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoaderProps {
    onComplete: () => void;
}

export const Loader = ({ onComplete }: LoaderProps) => {
    const [status, setStatus] = useState('connecting'); // 'connecting' | 'success'

    useEffect(() => {
        // Phase 1: Connection (2s)
        const timer1 = setTimeout(() => {
            setStatus('success');
        }, 2000);

        // Phase 2: Complete and Exit (2.8s total)
        const timer2 = setTimeout(() => {
            onComplete();
        }, 2800);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="text-center relative">
                <AnimatePresence mode="wait">
                    {status === 'connecting' ? (
                        <motion.div
                            key="connecting"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-4"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                                Establishing connection with Subrata
                                <span className="inline-block w-4 text-left animate-[pulse_1.5s_infinite]">...</span>
                            </h2>
                            {/* Optional: subtle progress bar or minimalistic indicator */}
                            <div className="w-48 h-1 bg-white/10 mx-auto rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-cyan-500"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                />
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="space-y-4"
                        >
                            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 tracking-tight">
                                Connection Successful
                            </h2>
                            <p className="text-gray-500 font-mono text-sm">Welcome.</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};
