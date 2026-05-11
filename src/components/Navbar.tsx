import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Shield, Zap, Radio, LayoutGrid, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isMainPage = location.pathname === '/';

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'OVERVIEW', href: '/#', icon: <Terminal size={14} /> },
        { name: 'CAPABILITIES', href: '/#about', icon: <Shield size={14} /> },
        { name: 'MODULES', href: '/#projects', icon: <Zap size={14} /> },
        { name: 'UPLINK', href: '/#contact', icon: <Radio size={14} /> },
    ];

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (isMainPage && href.startsWith('/#')) {
            e.preventDefault();
            const id = href.replace('/#', '');
            const element = id === '' ? document.body : document.getElementById(id);
            element?.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.nav 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-xl border-b border-white/5 px-4 sm:px-6 py-3"
            >
                <div className="container mx-auto flex items-center justify-between">
                    {/* Brand/System ID */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-9 h-9 rounded bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center group-hover:border-cyan-500 transition-colors">
                            <Terminal size={18} className="text-cyan-500" />
                        </div>
                        <div className="font-mono text-xs hidden sm:block">
                            <div className="text-white font-bold tracking-[0.2em] group-hover:text-cyan-400 transition-colors uppercase">SUBRATA_DOSSIER</div>
                            <div className="text-cyan-500/50 text-[10px] tracking-widest uppercase">SYS_STABLE // SECURE_ACCESS</div>
                        </div>
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-1 md:gap-4 lg:gap-8">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="group flex items-center gap-2 px-2 md:px-3 py-2 rounded hover:bg-cyan-500/5 transition-all"
                            >
                                <span className="text-cyan-500/30 group-hover:text-cyan-400 transition-colors hidden md:block">
                                    {link.icon}
                                </span>
                                <span className="font-mono text-[11px] text-gray-400 group-hover:text-white tracking-[0.15em] uppercase">
                                    {link.name}
                                </span>
                            </a>
                        ))}
                        <div className="w-px h-4 bg-white/10" />
                        <Link 
                            to="/modules" 
                            className="p-2 text-cyan-500/50 hover:text-cyan-400 transition-colors"
                            title="View Full Archives"
                        >
                            <LayoutGrid size={18} />
                        </Link>
                    </div>

                    {/* System Stats (desktop only) */}
                    <div className="hidden lg:flex items-center gap-8 font-mono text-[10px] text-gray-500">
                        <div className="flex items-center gap-2.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)] animate-pulse" />
                            <span className="tracking-widest uppercase">Signal_Active</span>
                        </div>
                        <div className="text-gray-400 tracking-[0.2em] tabular-nums bg-white/5 px-2 py-1 rounded">{time}</div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-gray-400 hover:text-cyan-400 transition-colors relative z-[110]"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[99] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
                    >
                        {/* Background HUD decoration */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
                        
                        <nav className="flex flex-col items-center gap-6 relative z-10">
                            {navLinks.map((link, i) => (
                                <motion.a 
                                    key={link.name} 
                                    href={link.href}
                                    onClick={(e) => handleScroll(e, link.href)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ delay: i * 0.08 }}
                                    className="group flex items-center gap-4 px-6 py-3 rounded-lg hover:bg-cyan-500/5 transition-all"
                                >
                                    <span className="text-cyan-500/50 group-hover:text-cyan-400 transition-colors">
                                        {link.icon}
                                    </span>
                                    <span className="font-mono text-lg text-gray-300 group-hover:text-white tracking-[0.25em] uppercase">
                                        {link.name}
                                    </span>
                                </motion.a>
                            ))}

                            <div className="w-16 h-px bg-white/10 my-2" />

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.35 }}
                            >
                                <Link 
                                    to="/modules"
                                    onClick={() => setIsMobileMenuOpen(false)} 
                                    className="flex items-center gap-3 px-6 py-3 text-cyan-500/70 hover:text-cyan-400 transition-colors font-mono text-sm tracking-[0.2em] uppercase"
                                >
                                    <LayoutGrid size={18} />
                                    SYSTEM_ARCHIVES
                                </Link>
                            </motion.div>
                        </nav>

                        {/* Status bar at bottom */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-8 font-mono text-[10px] text-gray-600 flex items-center gap-3"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            <span className="tracking-widest uppercase">SYS_STABLE</span>
                            <span className="text-gray-700">|</span>
                            <span className="tabular-nums">{time}</span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
