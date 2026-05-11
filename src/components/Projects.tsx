import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { DecryptText } from './ui/DecryptText';
import { Link } from 'react-router-dom';
import { projectsData } from '../lib/data';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
    // Show only the first 3 highlights on the main dashboard
    const displayedProjects = projectsData.slice(0, 3);

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {displayedProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link to="/modules">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-3 bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 font-mono text-sm tracking-wider uppercase overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                [ VIEW_FULL_ARCHIVES ] <div className="w-2 h-2 bg-cyan-500 animate-pulse" />
                            </span>
                            <div className="absolute inset-0 bg-cyan-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
