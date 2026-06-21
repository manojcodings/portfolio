import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled ? 'py-4 glass-effect shadow-[0_4px_30px_rgba(99,102,241,0.05)]' : 'py-6 bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <motion.a
                    href="#home"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-3xl font-extrabold tracking-tighter cursor-pointer flex items-center gap-1"
                >
                    <span className="text-light">M.</span>
                    <span className="text-gradient">Kumar</span>
                </motion.a>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8 bg-dark-200/50 px-8 py-3 rounded-full border border-white/5 backdrop-blur-md">
                    {navLinks.map((link, index) => (
                        <motion.li
                            key={index}
                            whileHover={{ y: -2 }}
                            className="relative group"
                        >
                            <a
                                href={`#${link.toLowerCase()}`}
                                className="text-gray-400 hover:text-light transition-colors duration-300 font-medium text-sm tracking-wide"
                            >
                                {link}
                            </a>
                            <motion.div 
                                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                            />
                        </motion.li>
                    ))}
                </ul>

                {/* Resume / Contact Button */}
                <motion.a
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    href="https://wa.me/9211762900"
                    className="hidden md:flex items-center gap-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 backdrop-blur-md text-primary px-6 py-2.5 rounded-full font-medium transition-all duration-300"
                >
                    Let's Talk
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </motion.a>

                {/* Mobile Menu Toggle */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 bg-white/5 rounded-full border border-white/10"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className={`w-5 h-0.5 bg-light transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`w-5 h-0.5 bg-light transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`w-5 h-0.5 bg-light transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed inset-0 bg-dark/95 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1 + 0.2 }}
                                    href={`#${link.toLowerCase()}`}
                                    className="text-3xl font-bold text-gray-400 hover:text-light hover:text-gradient transition-all"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link}
                                </motion.a>
                            ))}
                            <motion.a
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                href="https://wa.me/9211762900"
                                onClick={() => setMenuOpen(false)}
                                className="mt-8 px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-bold text-light shadow-glow"
                            >
                                Let's Talk
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;