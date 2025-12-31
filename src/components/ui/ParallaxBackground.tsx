import { motion, useScroll, useTransform } from 'framer-motion';
import { SiNodedotjs, SiUbuntu, SiPhp, SiLaravel } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import bgImage from '../../assets/bg.webp';

const CodeSnippet = ({ text, top, left, speed, className }: { text: string, top: string, left: string, speed: number, className?: string }) => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, speed * 200]);

    return (
        <motion.div
            style={{ top, left, y }}
            className={`absolute font-mono text-xs md:text-sm text-cyan-900/20 whitespace-pre pointer-events-none select-none z-0 ${className}`}
        >
            {text}
        </motion.div>
    );
};

const FloatingIcon = ({ icon: Icon, top, left, speed, size, color, className }: { icon: any, top: string, left: string, speed: number, size: number, color?: string, className?: string }) => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, speed * 300]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 180 * speed]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.2, 0.4, 0.4, 0.2]);

    return (
        <motion.div
            style={{ top, left, y, rotate, opacity }}
            className={`absolute pointer-events-none z-0 ${className}`}
        >
            <Icon size={size} className={color || "text-white/10"} />
        </motion.div>
    );
};

const Shape = ({ top, left, speed, size, color }: { top: string, left: string, speed: number, size: number, color: string }) => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, speed * 300]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360 * speed]);

    return (
        <motion.div
            style={{ top, left, y, rotate }}
            className={`absolute rounded-2xl opacity-15 blur-xl pointer-events-none z-0`}
        >
            <div style={{ width: size, height: size, background: color }} />
        </motion.div>
    );
};

export const ParallaxBackground = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none h-full w-full -z-10 bg-[#050505]">
            {/* Main Texture Background - Increased opacity for 'solid' feel */}
            <div
                className="absolute inset-0 z-[-1] opacity-70 bg-cover bg-center bg-no-repeat bg-fixed mix-blend-overlay"
                style={{ backgroundImage: `url(${bgImage})` }}
            />

            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 z-[-1]" />

            {/* Global Grid Animation (Moved from Hero) */}
            <div className="absolute inset-0 z-[-1] opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-cyan-500 opacity-20 blur-[100px]"></div>
            </div>

            {/* Deep Background Gradients */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-900/15 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/15 rounded-full blur-[100px]" />

            {/* Floating Tech Icons */}
            <FloatingIcon icon={SiNodedotjs} top="10%" left="80%" speed={1.2} size={60} color="text-green-500" />
            <FloatingIcon icon={SiUbuntu} top="30%" left="5%" speed={0.8} size={50} color="text-orange-500" />
            <FloatingIcon icon={SiPhp} top="50%" left="85%" speed={-1} size={70} color="text-indigo-400" />
            <FloatingIcon icon={SiLaravel} top="70%" left="10%" speed={1.5} size={55} color="text-red-500" />
            <FloatingIcon icon={FaAws} top="85%" left="75%" speed={-0.5} size={65} color="text-yellow-500" />

            {/* Floating Code Snippets */}
            <CodeSnippet
                text="const future = await build();"
                top="15%" left="10%" speed={-2}
                className="text-cyan-500/20 blur-[1px]"
            />
            <CodeSnippet
                text="import { Success } from 'life';"
                top="45%" left="55%" speed={1.5}
                className="text-blue-500/20 hidden md:block"
            />
            <CodeSnippet
                text="<System status='online' />"
                top="25%" left="20%" speed={3}
                className="text-purple-500/20 blur-[1px] hidden lg:block"
            />
            <CodeSnippet
                text="while(alive) { evolve(); }"
                top="60%" left="65%" speed={-3}
                className="text-orange-500/20 hidden md:block"
            />
            <CodeSnippet
                text="git commit -m 'Legacy'"
                top="90%" left="30%" speed={2}
                className="text-red-500/20"
            />

            {/* Geometric Shapes */}
            <Shape top="10%" left="50%" speed={1} size={300} color="#0891b2" />
            <Shape top="60%" left="90%" speed={-1.5} size={200} color="#3b82f6" />
            <Shape top="80%" left="20%" speed={2} size={150} color="#06b6d4" />
        </div>
    );
};
