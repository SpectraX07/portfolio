import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoaderProps {
    onComplete: () => void;
}

const bootLogs = [
    "[OK] SYSTEM_CORE_LOADED",
    "[OK] NEURAL_NETWORK_SYNC",
    "[OK] DATABASE_ARCHIVE_MAPPED",
    "[OK] SECURITY_PROTOCOLS_READY",
    "[OK] ENCRYPTING_UPLINK",
    "[OK] INITIALIZING_DOSSIER_INTERFACE"
];

export const Loader = ({ onComplete }: LoaderProps) => {
    const [status, setStatus] = useState('connecting');
    const [logIndex, setLogIndex] = useState(0);

    useEffect(() => {
        const logInterval = setInterval(() => {
            setLogIndex(prev => (prev < bootLogs.length - 1 ? prev + 1 : prev));
        }, 350);

        const timer1 = setTimeout(() => {
            setStatus('success');
        }, 2200);

        const timer2 = setTimeout(() => {
            onComplete();
        }, 3000);

        return () => {
            clearInterval(logInterval);
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030303] overflow-hidden"
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.7, 0, 0.3, 1] } }}
        >
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[length:40px_40px]" />
            
            <div className="relative z-10 w-full max-w-md px-10">
                <AnimatePresence mode="wait">
                    {status === 'connecting' ? (
                        <motion.div
                            key="connecting"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="space-y-8"
                        >
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-16 h-16 border-2 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin" />
                                <h2 className="text-xl font-mono text-cyan-500 tracking-[0.3em] uppercase">
                                    Accessing_Dossier
                                </h2>
                            </div>

                            <div className="space-y-2 font-mono text-[10px] text-gray-500 min-h-[100px]">
                                {bootLogs.slice(0, logIndex + 1).map((log, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="flex gap-3"
                                    >
                                        <span className={log.includes('[OK]') ? "text-green-500" : "text-cyan-500"}>
                                            {log}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="w-full h-[1px] bg-white/5 relative overflow-hidden">
                                <motion.div
                                    className="absolute inset-0 bg-cyan-500"
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "0%" }}
                                    transition={{ duration: 2.2, ease: "linear" }}
                                />
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center gap-6"
                        >
                            <div className="w-20 h-20 bg-cyan-500/10 border border-cyan-500/30 rounded-full flex items-center justify-center relative">
                                <motion.div 
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1.5, opacity: 0 }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                    className="absolute inset-0 border border-cyan-500 rounded-full"
                                />
                                <div className="text-cyan-500 font-bold text-2xl">✓</div>
                            </div>
                            <div className="text-center">
                                <h2 className="text-3xl font-black text-white tracking-widest uppercase mb-2">
                                    Auth_Successful
                                </h2>
                                <p className="text-gray-500 font-mono text-xs tracking-widest">WELCOME, AGENT SUBRATA</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* CRT Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
        </motion.div>
    );
};
