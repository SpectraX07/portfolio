import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useRef } from 'react';

const SocialIcon = ({ mouseX, icon: Icon, href, label }: { mouseX: any, icon: any, href: string, label: string }) => {
    const ref = useRef<HTMLAnchorElement>(null);

    const distance = useTransform(mouseX, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [48, 100, 48]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.a
            ref={ref}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ width }}
            className="aspect-square rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500 transition-colors relative group"
            title={label}
        >
            <Icon className="w-1/2 h-1/2 text-gray-400 group-hover:text-cyan-400 transition-colors" />
        </motion.a>
    );
};

export const Footer = () => {
    const mouseX = useMotionValue(Infinity);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative py-12 px-6 border-t border-white/5 bg-black/40 backdrop-blur-sm z-50">
            <div className="container mx-auto flex flex-col items-center gap-8">

                {/* Scroll to Top */}
                <motion.button
                    onClick={scrollToTop}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all font-mono text-[10px] text-gray-500 hover:text-cyan-400 tracking-[0.2em] uppercase"
                >
                    <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                    SCROLL_TO_TOP
                </motion.button>

                {/* Dock-style Icon Container */}
                <div
                    onMouseMove={(e) => mouseX.set(e.pageX)}
                    onMouseLeave={() => mouseX.set(Infinity)}
                    className="flex items-end gap-4 h-24"
                >
                    <SocialIcon mouseX={mouseX} icon={Github} href="https://github.com/spectrax07" label="GitHub" />
                    <SocialIcon mouseX={mouseX} icon={Linkedin} href="https://www.linkedin.com/in/spectrax07" label="LinkedIn" />
                    <SocialIcon mouseX={mouseX} icon={Mail} href="mailto:spectraxcodes07@gmail.com" label="Email" />
                </div>

                {/* Animated Data Stream Line */}
                <div className="w-full max-w-xs h-[1px] relative overflow-hidden">
                    <motion.div
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
                    />
                    <div className="absolute inset-0 bg-white/5" />
                </div>

                {/* Copyright Text */}
                <div className="text-center font-mono text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} <span className="text-cyan-600">SUBRATA_JANA</span>. ALL_SYSTEMS_OPERATIONAL.</p>
                    <p className="mt-2 text-[10px] opacity-50">DESIGNED_WITH_NEXT_GEN_PROTOCOLS</p>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-32 bg-cyan-500/5 blur-[100px] -z-10 pointer-events-none" />
        </footer>
    );
};
