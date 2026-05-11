import { motion } from 'framer-motion';
import { Cpu, Database, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    transitionDelayFactor = 0.15,
    showDependenciesLabel = true,
}: {
    project: Project;
    index: number;
    versionPrefix?: string;
    showFooter?: boolean;
    titleSize?: string;
    transitionDelayFactor?: number;
    showDependenciesLabel?: boolean;
}) => {
    return (
        <Link to={`/project/${project.id}`} className="block h-full">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * transitionDelayFactor }}
                className="group relative bg-black/40 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 flex flex-col h-full cursor-pointer"
            >
                <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10 font-mono text-xs text-gray-400">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                        <span>MODULE_{index.toString().padStart(2, '0')}</span>
                    </div>
                    <div>
                        STATUS: <span className="text-green-400">ACTIVE</span>
                    </div>
                </div>

                <div className="p-6 flex-1 flex flex-col relative">
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500/50" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500/50" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-500/50" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500/50" />

                    <div className="mb-4">
                        <h3 className={`${titleSize} font-bold text-white group-hover:text-cyan-400 transition-colors mb-1`}>
                            {project.title}
                        </h3>
                        <p className="text-xs font-mono text-cyan-600 uppercase tracking-wider">
                            {project.category}
                        </p>
                        {project?.company && (
                            <p className="mt-2 text-[11px] font-mono text-gray-400">
                                Developed while working with{' '}
                                {project?.domain ? (
                                    <a
                                        href={project.domain}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-cyan-300 hover:text-cyan-200 underline underline-offset-2"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {project.company}
                                    </a>
                                ) : (
                                    <span className="text-gray-300">{project.company}</span>
                                )}
                            </p>
                        )}
                    </div>

                    <div className="flex-1">
                        <div className="mb-4 p-3 bg-black/30 rounded border border-white/5 font-mono text-sm text-gray-300">
                            <span className="text-cyan-600 mr-2">$</span>
                            {project.description.slice(0, 100)}...
                        </div>

                        <div className="mb-6">
                            {showDependenciesLabel ? (
                                <p className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
                                    Dependencies
                                </p>
                            ) : null}
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, i) => (
                                    <span
                                        key={`${project.id}-${t}-${i}`}
                                        className="px-2 py-1 text-[10px] font-mono font-medium bg-cyan-950/30 text-cyan-300 border border-cyan-900/50 rounded"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {showFooter ? (
                        <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                            <div className="flex gap-4 text-xs font-mono text-gray-500">
                                <span className="flex items-center gap-1">
                                    <Cpu size={12} /> {versionPrefix}
                                    {index}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Database size={12} /> {project.tech.length * 12}MB
                                </span>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    className="p-2 hover:bg-cyan-500/10 rounded-lg transition-colors text-gray-400 hover:text-cyan-400"
                                    title="Source Code"
                                >
                                    <Github size={18} />
                                </button>
                                {project?.projectUrl ? (
                                    <a
                                        href={project.projectUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-2 hover:bg-cyan-500/10 rounded-lg transition-colors text-gray-400 hover:text-cyan-400"
                                        title="Live Deployment"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                ) : null}
                            </div>
                        </div>
                    ) : null}
                </div>
            </motion.div>
        </Link>
    );
};

