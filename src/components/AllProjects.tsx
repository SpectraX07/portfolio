import { motion } from 'framer-motion';
import { ArrowLeft, Terminal, Activity, ShieldCheck, Database } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { DecryptText } from './ui/DecryptText';
import { projectsData } from '../lib/data';
import { ProjectCard } from './ProjectCard';

export const AllProjects = () => {
    const navigate = useNavigate();

    return (
        <section className="min-h-screen pt-32 pb-20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] z-0" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] z-0" />

            <div className="container mx-auto px-6 relative z-10">
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
                            showFooter={false}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
