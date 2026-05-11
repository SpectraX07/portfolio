import { motion, useInView } from 'framer-motion';
import { Database, Server, Zap, Cloud, Code, Layers, User } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { DecryptText } from './ui/DecryptText';

const TerminalLine = ({ command, output, delay, startAnimation }: { command: string, output: string, delay: number, startAnimation: boolean }) => {
    const [showCommand, setShowCommand] = useState(false);
    const [showOutput, setShowOutput] = useState(false);

    useEffect(() => {
        if (startAnimation) {
            const commandTimer = setTimeout(() => setShowCommand(true), delay);
            const outputTimer = setTimeout(() => setShowOutput(true), delay + 500);
            return () => {
                clearTimeout(commandTimer);
                clearTimeout(outputTimer);
            };
        }
    }, [startAnimation, delay]);

    return (
        <div className="mb-2 font-mono text-sm">
            <div className={`${showCommand ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}>
                <span className="text-green-500 mr-2">$</span>
                {command}
            </div>
            {showOutput && <div className="text-gray-300 ml-4 animate-in fade-in duration-300">{output}</div>}
        </div>
    );
};

const BlinkingCursor = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(v => !v);
        }, 530); // Classic terminal blink rate
        return () => clearInterval(interval);
    }, []);

    return (
        <span className={`inline-block w-2.5 h-5 bg-green-500 ml-2 align-middle ${visible ? 'opacity-100' : 'opacity-0'}`} />
    );
};

const SkillCard = ({ icon, label, value, index }: { icon: any, label: string, value: string, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-black/40 border border-white/10 p-6 rounded-xl overflow-hidden backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300"
        >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* HUD Corners */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-cyan-500 transition-colors" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-cyan-500 transition-colors" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-cyan-500 transition-colors" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-cyan-500 transition-colors" />

            {/* Header */}
            <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="p-3 bg-white/5 rounded-lg text-cyan-500 group-hover:text-cyan-400 group-hover:bg-cyan-500/20 transition-all duration-300">
                    {icon}
                </div>
                <div className="text-[10px] font-mono text-gray-500 flex items-center gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                    SYS_NODE_0{index + 1}
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{label}</h3>
                <div className="flex flex-wrap gap-2">
                    {value.split(', ').map((tech, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                            className="px-2 py-1 text-xs font-mono text-cyan-300 bg-cyan-950/30 border border-cyan-500/20 rounded hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-colors cursor-default"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export const About = () => {
    const specs = [
        { icon: <Server size={24} />, label: "Backend Systems", value: "Node.js, Express.js, PHP, Laravel, CodeIgniter" },
        { icon: <Database size={24} />, label: "Database Management", value: "PostgreSQL, MySQL, MongoDB" },
        { icon: <Zap size={24} />, label: "Real-time Communication", value: "Socket.io, WebSocket, Automation" },
        { icon: <Cloud size={24} />, label: "Cloud & Infrastructure", value: "AWS, cPanel, Git, API Integration" },
        { icon: <Code size={24} />, label: "API Design", value: "REST APIs, Backend Development" },
        { icon: <Layers size={24} />, label: "Architecture", value: "Software Architecture, JavaScript" },
    ];

    const terminalRef = useRef(null);
    const isTerminalInView = useInView(terminalRef, { once: true, margin: "-100px" });

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* Standardized 'System Module' Header */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 flex items-end gap-4"
                >
                    <div className="text-6xl font-bold opacity-10 font-mono absolute -top-10 left-0 select-none">PROFILE</div>
                    <div>
                        <h2 className="text-4xl font-bold mb-2 flex items-center gap-3">
                            <User className="text-cyan-500" />
                            <DecryptText text="System Specifications" />
                        </h2>
                        <p className="text-gray-400 font-mono text-sm ml-10">
                            &gt; Accessing personnel database record #001...
                        </p>
                    </div>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-12 items-start mb-20" ref={terminalRef}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isTerminalInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                    >
                        <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                            <span className="text-white font-bold text-2xl block mb-2">Backend Engineer</span>
                            With <span className="text-white font-bold">4 years 10 months</span> of professional tenure engineering scalable web applications, business automation systems, and secure infrastructures across agency, freelance, and independent software projects.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                            Specialized in developing production-grade platforms across diverse domains including <span className="text-cyan-400 font-mono">FinTech</span>, <span className="text-cyan-400 font-mono">Healthcare</span>, <span className="text-cyan-400 font-mono">EduTech</span>, and <span className="text-cyan-400 font-mono">Real-time Logistics</span>. I focus on solving complex backend workflow challenges and automating repetitive business operations.
                        </p>
                        <p className="text-gray-400 font-mono italic text-sm">
                            &gt; Dedicated to engineering scalable server-side systems that perform reliably in production.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isTerminalInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full md:w-1/3 font-mono text-sm text-green-400 bg-black p-6 rounded-lg border border-green-500/20 shadow-[0_0_30px_rgba(0,255,0,0.1)] min-h-[220px] relative group hover:border-green-500/40 hover:shadow-[0_0_40px_rgba(0,255,0,0.15)] transition-all duration-500"
                    >
                        {/* Terminal Header Decor */}
                        <div className="flex gap-2 mb-4 opacity-50">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>

                        <TerminalLine
                            command="uptime"
                            output="4y 10m"
                            delay={500}
                            startAnimation={isTerminalInView}
                        />
                        <TerminalLine
                            command="location"
                            output="Kolkata, India [700001]"
                            delay={2000}
                            startAnimation={isTerminalInView}
                        />
                        <div className="mb-2 font-mono text-sm">
                            <div className={`${isTerminalInView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 delay-[3500ms]`}>
                                <span className="text-green-500 mr-2">$</span>
                                current_status
                            </div>
                            <div className={`mt-1 ml-4 ${isTerminalInView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 delay-[4000ms]`}>
                                <span className="bg-green-500/10 text-green-500 border border-green-500/30 px-3 py-1 rounded text-[10px] font-bold">
                                    AVAILABLE_FOR_HIRE
                                </span>
                                <BlinkingCursor />
                            </div>
                        </div>

                        {/* Scanline effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-500/5 opacity-[0.03] pointer-events-none"></div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {specs.map((spec, index) => (
                        <SkillCard key={index} {...spec} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
