import { motion } from 'framer-motion';

export const SectionDivider = ({ label = 'SYS_LINK_ACTIVE' }: { label?: string }) => {
    return (
        <div className="relative py-12 flex items-center justify-center overflow-hidden">
            {/* Left line */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 h-[1px] origin-right"
            >
                <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-500/30 to-cyan-500/50" />
            </motion.div>

            {/* Center pulse node */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="relative mx-6 flex flex-col items-center gap-2"
            >
                {/* Pulse rings */}
                <div className="relative">
                    <motion.div
                        animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                        className="absolute inset-0 w-3 h-3 rounded-full bg-cyan-500/30"
                    />
                    <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.6)]" />
                </div>
                <span className="text-[9px] font-mono text-cyan-500/40 tracking-[0.3em] uppercase whitespace-nowrap">
                    {label}
                </span>
            </motion.div>

            {/* Right line */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 h-[1px] origin-left"
            >
                <div className="w-full h-full bg-gradient-to-l from-transparent via-cyan-500/30 to-cyan-500/50" />
            </motion.div>
        </div>
    );
};
