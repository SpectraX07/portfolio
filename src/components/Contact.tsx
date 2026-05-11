import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone, Radio, ShieldCheck, Cpu, Terminal as TerminalIcon } from 'lucide-react';
import { DecryptText } from './ui/DecryptText';
import { useState } from 'react';

export const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => setIsSubmitting(false), 3000);
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Grid Accent */}
            <div className="absolute right-[-10%] top-[20%] opacity-5 pointer-events-none">
                <div className="w-[600px] h-[600px] border border-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Standardized Header */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 flex items-end gap-4"
                >
                    <div className="text-6xl font-bold opacity-10 font-mono absolute -top-10 left-0 select-none">COMM_LINK</div>
                    <div>
                        <h2 className="text-4xl font-bold mb-2 flex items-center gap-4">
                            <Radio className="text-cyan-500 animate-pulse" />
                            <DecryptText text="Establish Uplink" />
                        </h2>
                        <p className="text-gray-400 font-mono text-sm ml-11">
                            &gt; Initializing secure handshake protocol...
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Contact Info - HUD Style */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 space-y-8"
                    >
                        <div className="p-8 bg-cyan-950/10 border border-cyan-500/10 rounded-2xl backdrop-blur-md relative group">
                            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                                <Cpu size={40} className="text-cyan-500" />
                            </div>
                            
                            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                                <ShieldCheck size={20} className="text-cyan-500" />
                                NODE_COORDINATES
                            </h3>

                            <div className="space-y-10">
                                <ContactItem 
                                    icon={<Mail size={20} />} 
                                    label="SECURE_MAIL" 
                                    value="spectraxcodes07@gmail.com" 
                                />
                                <ContactItem 
                                    icon={<Phone size={20} />} 
                                    label="VOICE_UPLINK" 
                                    value="+91 98754 49847" 
                                />
                                <ContactItem 
                                    icon={<MapPin size={20} />} 
                                    label="BASE_LOC" 
                                    value="KOLKATA, INDIA" 
                                />
                            </div>

                            {/* Status Bar */}
                            <div className="mt-12 pt-6 border-t border-white/5 flex items-center justify-between font-mono text-[10px]">
                                <div className="flex gap-4">
                                    <span className="text-green-500">● SIGNAL_STRONG</span>
                                    <span className="text-gray-500">PING: 24MS</span>
                                </div>
                                <span className="text-cyan-500/50">v5.0.2</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form - Terminal Style */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <form onSubmit={handleSubmit} className="bg-black/60 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl relative group">
                            {/* CRT Overlay */}
                            <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] z-20" />
                            
                            <div className="bg-white/5 border-b border-white/10 px-6 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <TerminalIcon size={16} className="text-cyan-500" />
                                    <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">Direct_Secure_Message_Input</span>
                                </div>
                                <div className="flex gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-white/10" />
                                    <div className="w-2 h-2 rounded-full bg-white/10" />
                                    <div className="w-2 h-2 rounded-full bg-white/10" />
                                </div>
                            </div>

                            <div className="p-8 space-y-8 font-mono">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <TerminalInput label="USER_ID" placeholder="Enter identification..." />
                                    <TerminalInput label="RETURN_ADDR" type="email" placeholder="Enter email..." />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] text-cyan-500/70 uppercase tracking-widest block font-bold">DATA_PAYLOAD</label>
                                    <div className="relative">
                                        <textarea 
                                            rows={5} 
                                            className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-gray-700 resize-none"
                                            placeholder="Transmission content..."
                                        />
                                    </div>
                                </div>

                                <button 
                                    disabled={isSubmitting}
                                    type="submit" 
                                    className={`w-full py-5 font-bold rounded-lg transition-all flex items-center justify-center gap-3 group relative overflow-hidden ${
                                        isSubmitting ? 'bg-cyan-900/50 text-cyan-500 cursor-wait' : 'bg-cyan-600 hover:bg-cyan-500 text-black'
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                                            <span className="tracking-[0.2em]">ENCRYPTING_&_SENDING...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            <span className="tracking-[0.2em] uppercase">Transmit_Payload</span>
                                        </>
                                    )}
                                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const ContactItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
    <div className="flex items-start gap-5 group/item">
        <div className="mt-1 p-3 bg-white/5 rounded-lg text-cyan-500/50 group-hover/item:text-cyan-400 group-hover/item:bg-cyan-500/10 transition-all duration-300">
            {icon}
        </div>
        <div>
            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] mb-1">{label}</p>
            <p className="text-lg font-mono text-gray-200 group-hover/item:text-cyan-400 transition-colors break-all">{value}</p>
        </div>
    </div>
);

const TerminalInput = ({ label, type = "text", placeholder }: { label: string, type?: string, placeholder: string }) => (
    <div className="space-y-3">
        <label className="text-[10px] text-cyan-500/70 uppercase tracking-widest block font-bold">{label}</label>
        <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-500/30 text-xs font-mono">$</div>
            <input 
                type={type} 
                className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-9 pr-4 text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-gray-700" 
                placeholder={placeholder} 
            />
        </div>
    </div>
);
