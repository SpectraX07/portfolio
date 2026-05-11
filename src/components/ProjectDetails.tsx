import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
    ArrowLeft, Terminal, Cpu, Building2, Calendar,
    Globe, ExternalLink, ShieldCheck, Box,
    Layers, Zap, Database, Activity, type LucideIcon
} from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { DecryptText } from './ui/DecryptText';
import { projectsData } from '../lib/data';

// --- Components ---

const ShellListItem = ({ text, delay }: { text: string, delay: number }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isDone, setIsDone] = useState(false);

    // Pre-calculate formatted parts to avoid expensive regex during typing
    const formatText = (content: string) => {
        const parts = content.split(/(\d+%?|REST API|Node\.js|PHP|Laravel|SQL|PostgreSQL|Firebase|Socket\.io|AWS S3|Google Maps API|CodeIgniter 4|React|Next\.js|Vite|Flutter|React Native|JWT|OAuth|RBAC|Sequelize|Redis|Swagger|Joi|Multer|Jest|Supertest|Alpine\.js|PostgreSQL|PasetoToken)/i);
        return parts.map((part, index) => {
            if (/^\d+%?$/.test(part) || /^(REST API|Node\.js|PHP|Laravel|SQL|PostgreSQL|Firebase|Socket\.io|AWS S3|Google Maps API|CodeIgniter 4|React|Next\.js|Vite|Flutter|React Native|JWT|OAuth|RBAC|Sequelize|Redis|Swagger|Joi|Multer|Jest|Supertest|Alpine\.js|PostgreSQL|PasetoToken)$/i.test(part)) {
                return <span key={index} className="text-cyan-400 font-bold glow-cyan-sm">{part}</span>;
            }
            return part;
        });
    };

    useEffect(() => {
        let frame: number;
        let start: number;

        const timeout = setTimeout(() => {
            const step = (timestamp: number) => {
                if (!start) start = timestamp;
                const progress = timestamp - start;

                // Calculate characters to show based on time elapsed (approx 60 chars per second)
                const charsToShow = Math.floor(progress / 15);

                if (charsToShow <= text.length) {
                    setDisplayedText(text.slice(0, charsToShow));
                    frame = requestAnimationFrame(step);
                } else {
                    setIsDone(true);
                    setDisplayedText(text);
                }
            };
            frame = requestAnimationFrame(step);
        }, delay);

        return () => {
            clearTimeout(timeout);
            if (frame) cancelAnimationFrame(frame);
        };
    }, [text, delay]);

    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-start gap-3 mb-3 font-mono text-xs md:text-sm text-gray-400"
        >
            <span className="text-cyan-500 mt-1 shrink-0">▧</span>
            <div className="leading-relaxed">
                {isDone ? formatText(text) : <span className="opacity-90">{displayedText}</span>}
                {!isDone && <span className="inline-block w-1.5 h-3 bg-cyan-500 ml-1 animate-pulse" />}
            </div>
        </motion.div>
    );
};

const StatItem = ({ icon: Icon, label, value, delay }: { icon: LucideIcon, label: string, value: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay }}
        className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 group hover:border-cyan-500/50 transition-all duration-300"
    >
        <div className="p-2 rounded bg-cyan-500/10 text-cyan-500 group-hover:scale-110 transition-transform">
            <Icon size={20} />
        </div>
        <div>
            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{label}</p>
            <p className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors truncate max-w-[150px] md:max-w-none">
                {value}
            </p>
        </div>
    </motion.div>
);

// --- Main Page ---

export const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projectsData.find(p => p.id === id);
    const containerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#030303] text-white">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold font-mono">ERROR 404: MODULE_NOT_FOUND</h1>
                    <Link to="/" className="text-cyan-500 hover:underline">Return to Core System</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#030303] text-gray-300 selection:bg-cyan-500/30 overflow-x-hidden" ref={containerRef}>
            {/* Immersive Background */}
            <div className="fixed inset-0 pointer-events-none -z-10">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[150px] opacity-50" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] opacity-50" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay" />
            </div>

            <div className="container mx-auto px-6 pt-32 pb-24">
                {/* Navigation & Breadcrumbs */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between mb-12 relative z-20"
                >
                    <button 
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center gap-3 text-gray-500 hover:text-cyan-400 transition-all group font-mono text-sm outline-none"
                    >
                        <div className="p-2 rounded-full border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all">
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        </div>
                        <span>SYS.BACK_TO_TERMINAL()</span>
                    </button>
                    <div className="hidden md:flex items-center gap-4 text-[10px] font-mono text-gray-600 tracking-tighter">
                        <span className="flex items-center gap-1"><Activity size={10} className="text-green-500" /> STATUS: ONLINE</span>
                        <span className="flex items-center gap-1"><ShieldCheck size={10} className="text-cyan-500" /> SECURE_LINK: TRUE</span>
                        <span className="flex items-center gap-1"><Database size={10} className="text-purple-500" /> DB_SYNC: 100%</span>
                    </div>
                </motion.div>

                {/* Hero Section */}
                <div className="relative mb-20">
                    <div className="absolute -top-12 left-0 text-[12vw] font-bold text-white/[0.03] select-none pointer-events-none whitespace-nowrap font-mono">
                        {project.id.toUpperCase()}
                    </div>

                    <div className="relative z-10 space-y-8">
                        <div className="max-w-8xl">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-3 text-cyan-500 font-mono text-sm mb-6"
                            >
                                <Terminal size={18} />
                                <span className="tracking-widest uppercase">Initializing Module...</span>
                            </motion.div>

                            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.05]">
                                <DecryptText text={project.title} />
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-400 max-w-5xl leading-relaxed font-light italic border-l-2 border-cyan-500/20 pl-6">
                                "{project.description}"
                            </p>
                        </div>

                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Column: Metadata & Tech */}
                    <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
                        <div className="space-y-4">
                            <h3 className="text-xs font-mono text-cyan-500/50 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                                <Layers size={14} /> Module Metadata
                            </h3>
                            <div className="grid grid-cols-1 gap-4">
                                {project.company && <StatItem icon={Building2} label="Organization" value={project.company} delay={0.1} />}
                                <StatItem icon={Box} label="Classification" value={project.category} delay={0.2} />
                                {project.timeTaken && <StatItem icon={Calendar} label="Operational Span" value={project.timeTaken} delay={0.3} />}
                                {project.domain && (
                                    <a href={project.domain} target="_blank" rel="noreferrer" className="block">
                                        <StatItem icon={Globe} label="Primary Host" value={project.domain.replace('https://', '')} delay={0.4} />
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 relative group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                                <Cpu size={64} className="text-cyan-500" />
                            </div>
                            <h3 className="text-xs font-mono text-cyan-500/50 uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
                                <Zap size={14} /> Core Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map((t, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + (i * 0.05) }}
                                        className="px-4 py-2 bg-cyan-500/5 border border-cyan-500/20 rounded-lg text-cyan-300 font-mono text-xs hover:bg-cyan-500/20 transition-colors cursor-default"
                                    >
                                        {t}
                                    </motion.span>
                                ))}
                            </div>

                            {project.projectUrl && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <a
                                        href={project.projectUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group relative flex items-center justify-between w-full p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-500 overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                        <div className="flex items-center gap-3 relative z-10">
                                            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_#06b6d4]" />
                                            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
                                                VIEW_LIVE_PRODUCTION
                                            </span>
                                        </div>
                                        <ExternalLink size={16} className="text-cyan-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
                                    </a>
                                </motion.div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Visuals & Logs */}
                    <div className="lg:col-span-8 space-y-12 order-1 lg:order-2">
                        {/* Image Showcase */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video md:aspect-[21/9]">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* HUD Elements */}
                                <div className="absolute top-4 left-4 flex gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                </div>
                                <div className="absolute bottom-4 right-4 font-mono text-[10px] text-white/50 bg-black/50 backdrop-blur-md px-3 py-1 rounded">
                                    IMG_REF: {project.id}_PRIMARY
                                </div>
                                {/* Scanning Line */}
                                <motion.div
                                    animate={{ top: ['-10%', '110%'] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-0 right-0 h-[2px] bg-cyan-400/30 blur-[2px] z-20 pointer-events-none"
                                />
                            </div>
                        </motion.div>

                        {/* Logs / Specifications */}
                        <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 relative overflow-hidden shadow-2xl">
                            {/* Matrix-like background effect */}
                            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#06b6d4_1px,transparent_1px)] bg-[size:20px_20px]" />

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                                    <h3 className="text-lg font-bold text-white flex items-center gap-3">
                                        <Terminal className="text-cyan-500" size={20} />
                                        EXECUTION_LOGS_SYSTEM_V2.0
                                    </h3>
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 rounded-full bg-white/20" />
                                        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                                    </div>
                                </div>

                                <div className="space-y-4 min-h-[300px] text-justify">
                                    {project.specs.map((spec, i) => (
                                        <ShellListItem key={i} text={spec} delay={800 + (i * 1000)} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

