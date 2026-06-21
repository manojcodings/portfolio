import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-32 relative bg-dark">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]" />
            <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

                    {/* Left: Text & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                            Let's build something <br />
                            <span className="text-gradient">incredible together.</span>
                        </h2>
                        <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                            I'm currently available for freelance work and full-time opportunities.
                            If you have a project that needs some creative magic, I'd love to hear about it.
                        </p>

                        <div className="space-y-6">


                            {/* Email Row */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-14 h-14 rounded-full glass-effect flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-light transition-all duration-300 shadow-glow flex-shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">Email Me</p>
                                    <a href="mailto:manojcodewith@gmail.com" className="flex items-center text-light font-medium text-lg hover:text-primary transition-colors">
                                        manojcodewith@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone Row */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-14 h-14 rounded-full glass-effect flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-light transition-all duration-300 shadow-glow flex-shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">Phone</p>
                                    <a href="tel:+919211762900" className="flex items-center text-light font-medium text-lg hover:text-primary transition-colors">
                                        +91 92117 62900
                                    </a>
                                </div>
                            </div>

                            {/* Resume Row */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-14 h-14 rounded-full glass-effect flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-light transition-all duration-300 shadow-glow flex-shrink-0">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 2a1 1 0 00-1 1v10a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1H9zM8 0h8a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2V2a2 2 0 012-2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">Resume</p>
                                    <a href="/portfolio/Manoj_Kumar_5Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center text-light font-medium text-lg hover:text-primary transition-colors">
                                        View / Download
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <form className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />

                            <div className="relative z-10 space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300 ml-1">Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-dark-100/50 border border-white/10 rounded-xl px-5 py-4 text-light placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                            placeholder="Manoj Kumar"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300 ml-1">Email</label>
                                        <input
                                            type="email"
                                            className="w-full bg-dark-100/50 border border-white/10 rounded-xl px-5 py-4 text-light placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                            placeholder="manojcodewith@gmail.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">Message</label>
                                    <textarea
                                        rows="4"
                                        className="w-full bg-dark-100/50 border border-white/10 rounded-xl px-5 py-4 text-light placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="button"
                                    className="w-full py-4 rounded-xl font-bold text-light bg-gradient-to-r from-primary to-secondary shadow-glow flex items-center justify-center gap-2 group"
                                >
                                    Send Message
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;