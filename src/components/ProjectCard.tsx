import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Cpu, Database, ExternalLink, Github, Code2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

type Project = {
    id: string;
    title: string;
    category: string;
    description: string;
    tech: string[];
    company?: string;
    domain?: string;
    projectUrl?: string;
};

export const ProjectCard = ({
    project,
    index,
    versionPrefix = 'v1.0.',
    showFooter = true,
    titleSize = 'text-2xl',
    transitionDelayFactor = 0.1,
}: {
    project: Project;
    index: number;
    versionPrefix?: string;
    showFooter?: boolean;
    titleSize?: string;
    transitionDelayFactor?: number;
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = (mouseX / width) - 0.5;
        const yPct = (mouseY / height) - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <Link to={`/project/${project.id}`} className="block h-full group/card perspective-1000">
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * transitionDelayFactor }}
                className="relative bg-black/60 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md hover:border-cyan-500/50 transition-all duration-500 flex flex-col h-full shadow-[0_0_20px_rgba(0,0,0,0.5)] group"
            >
                {/* Holographic Scan Line */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
                    <div className="w-full h-[1px] bg-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.8)] absolute top-[-10%] group-hover:animate-scan" />
                </div>

                {/* Animated Data Stream Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 z-0 bg-[linear-gradient(90deg,transparent_95%,rgba(6,182,212,0.5)_95%),linear-gradient(transparent_95%,rgba(6,182,212,0.5)_95%)] bg-[length:20px_20px]" />

                {/* Card Header */}
                <div className="flex items-center justify-between px-5 py-3 bg-white/5 border-b border-white/10 font-mono text-[10px] tracking-widest text-gray-400 z-10">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,1)]" />
                        <span className="group-hover:text-cyan-400 transition-colors uppercase">Data_Node_{index.toString().padStart(2, '0')}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <ShieldCheck size={10} className="text-green-500" />
                        <span className="text-green-500/80 uppercase">Verified_Build</span>
                    </div>
                </div>

                {/* Card Content */}
                <div className="p-7 flex-1 flex flex-col relative z-10" style={{ transform: "translateZ(30px)" }}>
                    {/* Decorative Corner Brackets */}
                    <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-cyan-500/30 group-hover:border-cyan-500 transition-colors" />
                    <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-cyan-500/30 group-hover:border-cyan-500 transition-colors" />
                    <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-cyan-500/30 group-hover:border-cyan-500 transition-colors" />
                    <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-cyan-500/30 group-hover:border-cyan-500 transition-colors" />

                    <div className="mb-5">
                        <p className="text-[10px] font-mono text-cyan-500/60 uppercase tracking-[0.2em] mb-1">
                            {project.category} // ARCHIVE_{project.id.slice(0, 4)}
                        </p>
                        <h3 className={`${titleSize} font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight`}>
                            {project.title}
                        </h3>
                    </div>

                    <div className="flex-1 space-y-6">
                        <div className="relative">
                            <div className="absolute -left-3 top-0 bottom-0 w-[2px] bg-cyan-500/20 group-hover:bg-cyan-500/50 transition-colors" />
                            <p className="text-sm text-gray-400 line-clamp-3 font-mono leading-relaxed pl-1">
                                {project.description}
                            </p>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                                <Code2 size={12} className="text-cyan-500/50" />
                                <span>Core_Dependencies</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, i) => (
                                    <span
                                        key={`${project.id}-${t}-${i}`}
                                        className="px-2 py-1 text-[9px] font-mono bg-cyan-950/20 text-cyan-400/70 border border-cyan-500/10 rounded group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-all"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {showFooter && (
                        <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-8" style={{ transform: "translateZ(20px)" }}>
                            <div className="flex gap-5 text-[10px] font-mono text-gray-500 uppercase tracking-tighter">
                                <span className="flex items-center gap-1.5 group-hover:text-gray-300 transition-colors">
                                    <Cpu size={12} className="text-cyan-500/40" /> {versionPrefix}{index}
                                </span>
                                <span className="flex items-center gap-1.5 group-hover:text-gray-300 transition-colors">
                                    <Database size={12} className="text-cyan-500/40" /> 0x{ (index + 1) * 256 }_BUFFER
                                </span>
                            </div>
                            <div className="flex gap-1">
                                <button className="p-2 text-gray-500 hover:text-cyan-400 hover:bg-cyan-500/10 rounded transition-all">
                                    <Github size={16} />
                                </button>
                                {project.projectUrl && (
                                    <button className="p-2 text-gray-500 hover:text-cyan-400 hover:bg-cyan-500/10 rounded transition-all">
                                        <ExternalLink size={16} />
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </Link>
    );
};

