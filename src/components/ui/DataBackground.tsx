import { motion, useScroll, useTransform } from 'framer-motion';
import { SiNodedotjs, SiUbuntu } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const CodeSnippet = ({ text, top, left, speed }: { text: string, top: string, left: string, speed: number }) => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, speed * 250]);

    return (
        <motion.div
            style={{ top, left, y }}
            className="absolute font-mono text-[10px] text-cyan-500/10 whitespace-pre pointer-events-none select-none z-0 hidden md:block"
        >
            {text}
        </motion.div>
    );
};

const TechIcon = ({ icon: Icon, top, left, speed }: { icon: any, top: string, left: string, speed: number }) => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, speed * 150]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 45 * speed]);

    return (
        <motion.div
            style={{ top, left, y, rotate }}
            className="absolute text-cyan-500/5 pointer-events-none z-0"
        >
            <Icon size={120} />
        </motion.div>
    );
};

export const DataBackground = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#030303]">
            {/* Tactical Grid */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(90deg,rgba(6,182,212,0.2)_1px,transparent_1px),linear-gradient(rgba(6,182,212,0.2)_1px,transparent_1px)] bg-[length:60px_60px]" />
            
            {/* Floating Data Nodes */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ 
                            opacity: Math.random() * 0.2,
                            x: Math.random() * 100 + "%", 
                            y: Math.random() * 100 + "%" 
                        }}
                        animate={{
                            y: ["0%", "100%"],
                            opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                            duration: Math.random() * 40 + 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute w-[1.5px] h-[1.5px] bg-cyan-500 rounded-full blur-[0.5px]"
                    />
                ))}
            </div>

            {/* Technical Elements */}
            <TechIcon icon={SiNodedotjs} top="15%" left="5%" speed={1.2} />
            <TechIcon icon={FaAws} top="65%" left="80%" speed={-0.8} />
            <TechIcon icon={SiUbuntu} top="40%" left="75%" speed={0.5} />
            
            <CodeSnippet text="await system.initialize();" top="10%" left="70%" speed={1.5} />
            <CodeSnippet text="protocol.secure_handshake()" top="30%" left="15%" speed={-1.2} />
            <CodeSnippet text="db.cluster.shard('active')" top="85%" left="20%" speed={0.8} />
            <CodeSnippet text="return new Payload(data);" top="55%" left="60%" speed={-2} />

            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,3,3,0.9)_100%)]" />
            
            {/* Ambient Scanline */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px]" />
        </div>
    );
};
