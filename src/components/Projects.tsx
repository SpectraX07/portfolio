import { motion } from 'framer-motion';
import { ExternalLink, Github, Terminal, Cpu, Database } from 'lucide-react';
import { DecryptText } from './ui/DecryptText';

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="group relative bg-black/40 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 flex flex-col h-full"
        >
            {/* Top Bar / HUD Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10 font-mono text-xs text-gray-400">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                    <span>MODULE_0{index + 1}</span>
                </div>
                <div>STATUS: <span className="text-green-400">ACTIVE</span></div>
            </div>

            <div className="p-6 flex-1 flex flex-col relative">
                {/* Decorative corner markers */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500/50" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500/50" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-500/50" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500/50" />

                <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">{project.title}</h3>
                    <p className="text-xs font-mono text-cyan-600 uppercase tracking-wider">{project.category}</p>
                </div>

                <div className="flex-1">
                    <div className="mb-4 p-3 bg-black/30 rounded border border-white/5 font-mono text-sm text-gray-300">
                        <span className="text-cyan-600 mr-2">$</span>
                        {project.description}
                    </div>

                    <div className="mb-6">
                        <p className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Dependencies</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t: string, i: number) => (
                                <span key={i} className="px-2 py-1 text-[10px] font-mono font-medium bg-cyan-950/30 text-cyan-300 border border-cyan-900/50 rounded">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                    <div className="flex gap-4 text-xs font-mono text-gray-500">
                        <span className="flex items-center gap-1"><Cpu size={12} /> v1.0.{index}</span>
                        <span className="flex items-center gap-1"><Database size={12} /> {project.tech.length * 12}MB</span>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2 hover:bg-cyan-500/10 rounded-lg transition-colors text-gray-400 hover:text-cyan-400" title="Source Code">
                            <Github size={18} />
                        </button>
                        <button className="p-2 hover:bg-cyan-500/10 rounded-lg transition-colors text-gray-400 hover:text-cyan-400" title="Live Deployment">
                            <ExternalLink size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export const Projects = () => {
    const projects = [
        {
            title: "Maitys Elderly Care",
            category: "On-Demand Platform",
            tech: ["Node.js", "Firebase", "Socket.io", "Google Maps"],
            description: "Service platform with Member, Vendor, & Admin panels. Real-time tracking & geofencing.",
            link: "#"
        },
        {
            title: "Phoolwalee",
            category: "Subscription System",
            tech: ["Node.js", "MongoDB", "PasetoToken", "AWS"],
            description: "Flower delivery ecosystem. Automated inventory logic & recurring billing cycles.",
            link: "#"
        },
        {
            title: "Param",
            category: "FinTech Solution",
            tech: ["CodeIgniter 4", "SQL", "PasetoToken", "REST API"],
            description: "Petty Cash Management. Fund requests, settlements & multi-level approval workflows.",
            link: "#"
        }
    ];

    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex items-end gap-4"
                >
                    <div className="text-6xl font-bold opacity-10 font-mono absolute -top-10 left-0 select-none">MODULES</div>
                    <div>
                        <h2 className="text-4xl font-bold mb-2 flex items-center gap-3">
                            <Terminal className="text-cyan-500" />
                            <DecryptText text="Deployed Modules" />
                        </h2>
                        <p className="text-gray-400 font-mono text-sm ml-10">
                            &gt; Executing diagnostic scan on primary projects...
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
