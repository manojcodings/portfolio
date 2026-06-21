import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-dark-200 pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <a href="#home" className="text-3xl font-extrabold tracking-tighter inline-flex items-center gap-1 mb-6">
                            <span className="text-light">M.</span>
                            <span className="text-gradient">Kumar</span>
                        </a>
                        <p className="text-gray-400 font-light max-w-sm leading-relaxed mb-6">
                            A Full Stack Developer dedicated to writing clean and efficient code while building solutions that provide an excellent user experience. Let's create something extraordinary together.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4">
                            {[
                                { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', url: 'https://github.com/manojcodings' },
                                { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z', url: 'https://www.linkedin.com/in/manoj-kumar-684b133a6/' },
                                {
                                    name: 'Instagram',
                                    icon: 'M17.5 2h-11A4.5 4.5 0 002 6.5v11A4.5 4.5 0 006.5 22h11a4.5 4.5 0 004.5-4.5v-11A4.5 4.5 0 0017.5 2zM12 17a5 5 0 110-10 5 5 0 010 10zm5.5-9.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z',
                                    url: 'https://www.instagram.com/m.rajpoott/'
                                }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3 }}
                                    className="w-10 h-10 flex items-center justify-center rounded-full glass-effect text-gray-400 hover:text-light hover:bg-primary/20 hover:border-primary/50 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={social.icon} />
                                    </svg>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-light font-bold mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link, i) => (
                                <li key={i}>
                                    <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-primary transition-colors font-light">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-light font-bold mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent" />
                            Contact
                        </h4>
                        <ul className="space-y-4 font-light text-gray-400">
                            <li>
                                <a href="mailto:manojcodewith@gmail.com" className="hover:text-light transition-colors">manojcodewith@gmail.com</a>
                            </li>

                            <li className="text-primary font-medium">Available for full-time roles</li>
                            <li className="flex items-center text-primary font-medium"><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-2.25a2.25 2.25 0 00-2.25-2.25H18.75a2.25 2.25 0 00-2.25 2.25v.75a7.5 7.5 0 01-7.5-7.5h.75a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v2.25z" /></svg><a href="tel:9211762900" className="hover:text-light transition-colors">9211762900</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm font-light">
                        © {new Date().getFullYear()} Manoj Kumar. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm font-light flex items-center gap-1.5">
                        Built with <span className="text-primary animate-pulse text-lg">❤️</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
