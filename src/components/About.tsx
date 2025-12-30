import { motion, useInView } from 'framer-motion';
import { Cpu, Database, Server, Smartphone, Globe, Shield } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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

export const About = () => {
    const specs = [
        { icon: <Server size={24} />, label: "Backend Architecture", value: "Node.js, PHP, Python" },
        { icon: <Database size={24} />, label: "Database Management", value: "SQL, MongoDB, Firebase" },
        { icon: <Cpu size={24} />, label: "System Optimization", value: "High-Performance APIs" },
        { icon: <Smartphone size={24} />, label: "Cross-Platform", value: "Flutter, React Native" },
        { icon: <Globe size={24} />, label: "Web Technologies", value: "React, Next.js, Vite" },
        { icon: <Shield size={24} />, label: "Security", value: "JWT, OAuth, RBAC" },
    ];

    const terminalRef = useRef(null);
    const isTerminalInView = useInView(terminalRef, { once: true, margin: "-100px" });

    return (
        <section className="py-20 bg-black/50 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 border-l-4 border-cyan-500 pl-6"
                >
                    <h2 className="text-4xl font-bold mb-2">A <span className="text-cyan-500">little</span> about me</h2>
                    <p className="text-gray-400">Defining the core architecture.</p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-12 items-start mb-20" ref={terminalRef}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isTerminalInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-cyan-400">About Subrata</h3>
                        <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                            Experienced Senior Backend Engineer with over <span className="text-white font-bold">14 years</span> of industry expertise.
                            Specialized in building scalable, secure, and high-performance applications.
                            From intricate backend logic to seamless frontend interactions, I engineer digital solutions that solve complex real-world problems.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            Currently architecting next-gen solutions using the latest tech stack.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isTerminalInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full md:w-1/3 font-mono text-sm text-green-400 bg-black p-6 rounded-lg border border-green-500/20 shadow-[0_0_30px_rgba(0,255,0,0.1)] min-h-[220px]"
                    >
                        <TerminalLine
                            command="uptime"
                            output="14 years, 320 projects, 99.9% success"
                            delay={500}
                            startAnimation={isTerminalInView}
                        />
                        <TerminalLine
                            command="location"
                            output="Kolkata, India"
                            delay={2000}
                            startAnimation={isTerminalInView}
                        />
                        <div className="mb-2 font-mono text-sm">
                            <div className={`${isTerminalInView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 delay-[3500ms]`}>
                                <span className="text-green-500 mr-2">$</span>
                                current_status
                            </div>
                            <div className={`mt-1 ml-4 ${isTerminalInView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 delay-[4000ms]`}>
                                <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded">Available for Hire</span>
                                <span className="animate-pulse ml-2 inline-block w-2 h-4 bg-green-500 align-middle"></span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {specs.map((spec, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 border border-white/10 bg-white/5 rounded-lg hover:border-cyan-500/50 hover:bg-white/10 transition-all group"
                        >
                            <div className="mb-4 text-cyan-500 group-hover:text-cyan-400 transition-colors">
                                {spec.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 font-display">{spec.label}</h3>
                            <p className="text-gray-400 font-mono text-sm">{spec.value}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
