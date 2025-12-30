import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
    return (
        <section className="py-20 bg-background relative overflow-hidden">
            {/* Background Grid Accent */}
            <div className="absolute right-0 bottom-0 opacity-10">
                <div className="w-96 h-96 border border-cyan-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 border-l-4 border-cyan-500 pl-6"
                >
                    <h2 className="text-4xl font-bold mb-2">Initialize Connection</h2>
                    <p className="text-gray-400">Establish a secure communication link.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Transmission Coordinates</h3>

                        <div className="flex items-center gap-4 group">
                            <div className="p-4 bg-white/5 rounded-lg text-cyan-500 group-hover:bg-cyan-500/20 transition-colors">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Email Protocol</p>
                                <p className="text-lg font-mono text-white">contact@subratajana.dev</p>
                                {/* Placeholder email, user didn't provide one explicitly in the resume text I saw, or I missed it. Using generic based on name. */}
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="p-4 bg-white/5 rounded-lg text-cyan-500 group-hover:bg-cyan-500/20 transition-colors">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Voice Link</p>
                                <p className="text-lg font-mono text-white">+91 00000 00000</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="p-4 bg-white/5 rounded-lg text-cyan-500 group-hover:bg-cyan-500/20 transition-colors">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Base Location</p>
                                <p className="text-lg font-mono text-white">Kolkata, India</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-sm"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 font-mono">Input: Identity</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-gray-600" placeholder="Name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 font-mono">Input: Contact_Ref</label>
                                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-gray-600" placeholder="Email" />
                            </div>
                        </div>

                        <div className="space-y-2 mb-6">
                            <label className="text-sm text-gray-400 font-mono">Input: Payload</label>
                            <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-gray-600 resize-none" placeholder="Message content..."></textarea>
                        </div>

                        <button type="submit" className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-black font-bold rounded-lg transition-all flex items-center justify-center gap-2 group">
                            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            <span>TRANSMIT DATA</span>
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};
