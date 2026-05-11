import { ArrowLeft, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DecryptText } from './ui/DecryptText';
import { projectsData } from '../lib/data';
import { ProjectCard } from './ProjectCard';

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    {projectsData.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            titleSize="text-xl"
                            transitionDelayFactor={0.1}
                            showDependenciesLabel={true}
                            showFooter={false}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
