import { motion } from 'framer-motion';
import { ArrowLeft, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DecryptText } from './ui/DecryptText';
import { projectsData } from '../lib/data';

// Reuse ProjectCard logic but as a localized component or imported if exported
const ProjectCard = ({ project, index }: { project: any, index: number }) => {
    return (
        <Link to={`/project/${project.id}`} className="block h-full">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-black/40 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 flex flex-col h-full cursor-pointer"
            >
                {/* Top Bar / HUD Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10 font-mono text-xs text-gray-400">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                        <span>MODULE_{index.toString().padStart(2, '0')}</span>
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
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">{project.title}</h3>
                        <p className="text-xs font-mono text-cyan-600 uppercase tracking-wider">{project.category}</p>
                    </div>

                    <div className="flex-1">
                        <div className="mb-4 p-3 bg-black/30 rounded border border-white/5 font-mono text-sm text-gray-300">
                            <span className="text-cyan-600 mr-2">$</span>
                            {project.description.slice(0, 100)}...
                        </div>

                        <div className="mb-6">
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t: string, i: number) => (
                                    <span key={i} className="px-2 py-1 text-[10px] font-mono font-medium bg-cyan-950/30 text-cyan-300 border border-cyan-900/50 rounded">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}

export const AllProjects = () => {
    return (
        <section className="min-h-screen pt-32 pb-20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] z-0" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-500 mb-10 transition-colors group">
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-sm">/root/return_dashboard</span>
                </Link>

                <div className="mb-16 flex items-end gap-4">
                    <div className="text-6xl md:text-9xl font-bold opacity-5 font-mono absolute -top-10 left-0 select-none z-0">database</div>
                    <div className="relative z-10 w-full">
                        <h2 className="text-4xl md:text-6xl font-bold mb-2 flex items-center gap-3">
                            <Terminal className="text-cyan-500 w-12 h-12" />
                            <DecryptText text="System Archives" speed={30} />
                        </h2>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-6 border-b border-white/10 pb-6">
                            <p className="text-gray-400 font-mono text-sm">
                                &gt; Loading complete project repository...
                            </p>
                            <div className="font-mono text-cyan-400 text-sm">
                                Total Modules: {projectsData.length}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
