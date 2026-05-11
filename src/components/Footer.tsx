import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useRef } from 'react';

const SocialIcon = ({ mouseX, icon: Icon, href }: { mouseX: any, icon: any, href: string }) => {
    const ref = useRef<HTMLAnchorElement>(null);

    const distance = useTransform(mouseX, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.a
            ref={ref}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ width }}
            className="aspect-square rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500 transition-colors relative group"
        >
            <Icon className="w-1/2 h-1/2 text-gray-400 group-hover:text-cyan-400 transition-colors" />
        </motion.a>
    );
};

export const Footer = () => {
    const mouseX = useMotionValue(Infinity);

    return (
        <footer className="relative py-12 px-6 border-t border-white/5 bg-black/40 backdrop-blur-sm z-50">
            <div className="container mx-auto flex flex-col items-center gap-8">

                {/* Dock-style Icon Container */}
                <div
                    onMouseMove={(e) => mouseX.set(e.pageX)}
                    onMouseLeave={() => mouseX.set(Infinity)}
                    className="flex items-end gap-4 h-20 px-4 items-center"
                >
                    <SocialIcon mouseX={mouseX} icon={Github} href="https://github.com/spectrax07" />
                    <SocialIcon mouseX={mouseX} icon={Linkedin} href="https://www.linkedin.com/in/spectrax07" />
                    <SocialIcon mouseX={mouseX} icon={Mail} href="mailto:spectraxcodes07@gmail.com" />
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
