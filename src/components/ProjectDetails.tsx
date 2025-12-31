import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Terminal, Cpu } from 'lucide-react';
import { DecryptText } from './ui/DecryptText';
import { useEffect, useState } from 'react';

// Shell Typing List Item Component
const ShellListItem = ({ text, delay }: { text: string, delay: number }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [showCursor] = useState(true);
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            let i = 0;
            const interval = setInterval(() => {
                setDisplayedText(text.slice(0, i + 1));
                i += 3; // Type 3 chars at once for super speed
                if (i >= text.length) {
                    clearInterval(interval);
                    setIsDone(true);
                    setDisplayedText(text);
                }
            }, 5); // Fast interval
            return () => clearInterval(interval);
        }, delay);
        return () => clearTimeout(timeout);
    }, [text, delay]);

    // Function to highlight numbers
    const formatText = (content: string) => {
        const parts = content.split(/(\d+%?)/); // Split by numbers/percentages
        return parts.map((part, index) => {
            if (/^\d+%?$/.test(part)) {
                return <span key={index} className="text-cyan-400 font-bold">{part}</span>;
            }
            return part;
        });
    };

    return (
        <div className="flex items-start gap-4 mb-4 font-mono text-gray-300">
            <span className="text-green-500 mt-1">➜</span>
            <p className="leading-relaxed">
                {isDone ? formatText(text) : displayedText}
                {!isDone && showCursor && <span className="inline-block w-2 h-4 bg-green-500 ml-1 align-middle animate-pulse" />}
            </p>
        </div>
    );
};

import { projectsData } from '../lib/data';

// ... ShellListItem component remains the same ...

export const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id) || projectsData[0];

    if (!project) return <div>Project Not Found</div>;

    return (
        <section className="min-h-screen pt-32 pb-20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] z-0" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-500 mb-10 transition-colors group">
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-sm">/root/return_home</span>
                </Link>

                {/* Big Terminal Header - Styled like Deployed Modules */}
                <div className="mb-16 relative">
                    <div className="hidden md:block text-6xl md:text-8xl font-bold opacity-5 font-mono absolute -top-10 md:-top-16 left-0 select-none pointer-events-none whitespace-nowrap z-0">
                        {project.category.toUpperCase().split(' ')[0]}
                    </div>

                    <div className="relative pl-4 border-l-4 border-cyan-500 z-10">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 flex items-center gap-4">
                            <Terminal className="text-cyan-500 w-8 h-8 md:w-12 md:h-12" />
                            <DecryptText text={project.title} speed={20} />
                        </h1>
                        <p className="font-mono text-cyan-600 text-sm md:text-base ml-1 md:ml-2">
                            &lt;SystemStatus: <span className="text-green-400">ONLINE</span> /&gt; {project.description.slice(0, 50)}...
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Shell Typing Specs */}
                    <div className="space-y-8">
                        <div className="p-6 bg-black/40 border border-white/10 rounded-xl backdrop-blur-md relative overflow-hidden group">
                            {/* HUD Corners */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500/50" />
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500/50" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-500/50" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500/50" />

                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
                                <Terminal className="text-cyan-500" size={20} />
                                Execution Logs
                            </h3>

                            <div className="space-y-2 min-h-[200px]">
                                {project.specs.map((spec: string, i: number) => (
                                    <ShellListItem key={i} text={spec} delay={i * 1200} />
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {project.tech.map((t: string, i: number) => (
                                <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 font-mono text-sm flex items-center gap-2">
                                    <Cpu size={14} className="text-cyan-500" /> {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right: Floating Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-10 rounded-xl overflow-hidden border border-white/10 shadow-2xl group"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                            />
                            {/* Scanline Overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(0,0,0,0.4)_50%,transparent_100%)] bg-[length:100%_4px] pointer-events-none opacity-20" />
                        </motion.div>

                        {/* Decorative Background Elements behind image */}
                        <div className="absolute -inset-4 border border-cyan-500/20 rounded-xl -z-10 translate-x-4 translate-y-4" />
                        <div className="absolute -inset-4 border border-blue-500/20 rounded-xl -z-20 -translate-x-4 -translate-y-4" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
