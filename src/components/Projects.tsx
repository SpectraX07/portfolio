import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

export const Projects = () => {
    const projects = [
        {
            title: "Maitys Elderly Care",
            category: "On-Demand Service Platform",
            tech: ["Node.js", "Firebase", "Socket.io", "Google Maps API"],
            description: "A comprehensive service platform with Member, Vendor, and Admin panels. Features real-time request tracking, geofencing for vendors, and automated commission management.",
            link: "#",
            color: "from-blue-600 to-cyan-500"
        },
        {
            title: "Phoolwalee",
            category: "Subscription Delivery System",
            tech: ["Node.js", "MongoDB", "PasetoToken"],
            description: "Subscription-based flower delivery platform. Includes complex inventory management, automated warehouse notifications, and recurring billing logic.",
            link: "#",
            color: "from-purple-600 to-pink-500"
        },
        {
            title: "Param",
            category: "FinTech Solution",
            tech: ["CodeIgniter 4", "SQL", "PasetoToken"],
            description: "Petty Cash Management System designed for financial transparency. Handles fund requests, settlements, and expense tracking with multi-level approval workflows.",
            link: "#",
            color: "from-orange-500 to-red-500"
        }
    ];

    return (
        <section className="py-20 bg-surface relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 border-l-4 border-cyan-500 pl-6"
                >
                    <h2 className="text-4xl font-bold mb-2">Deployed Modules</h2>
                    <p className="text-gray-400">High-impact project executions.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/50 transition-all duration-300"
                        >
                            <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                                        <Layers size={24} className="text-gray-300 group-hover:text-cyan-400" />
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white">
                                            <Github size={18} />
                                        </button>
                                        <button className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white">
                                            <ExternalLink size={18} />
                                        </button>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                                <p className="text-sm text-gray-500 mb-4 font-mono">{project.category}</p>

                                <p className="text-gray-300 mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-400">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
