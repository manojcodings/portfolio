import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-32 relative bg-dark-100/50">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column - Journey & Mission */}
                    <div className="lg:col-span-8 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="glass-card p-8 rounded-3xl border-l-4 border-l-primary relative overflow-hidden group hover:border-l-accent transition-colors duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <h3 className="text-2xl font-bold text-light mb-4 relative z-10">Who I Am</h3>
                            <p className="text-gray-400 font-light leading-relaxed relative z-10">
                                I am a passionate and self-motivated Web Developer with a strong interest in creating modern, responsive, and user-friendly web applications. I possess practical knowledge of HTML, CSS, Bootstrap, JavaScript, jQuery, PHP, Laravel, React, WordPress, Git, and GitHub. 
                                <br /><br />
                                Through continuous learning and hands-on project development, I have gained experience in frontend and backend development, database management, authentication systems, API integration, and version control. I am dedicated to writing clean and efficient code while building solutions that provide an excellent user experience.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="glass-card p-8 rounded-3xl border-l-4 border-l-secondary relative overflow-hidden group hover:border-l-accent transition-colors duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <h3 className="text-2xl font-bold text-light mb-4 relative z-10">My Vision</h3>
                            <p className="text-gray-400 font-light leading-relaxed relative z-10">
                                As a dedicated learner and aspiring Full Stack Developer, I continuously work on improving my skills and staying updated with the latest industry trends. I am currently seeking opportunities where I can apply my technical knowledge, contribute to innovative projects, gain professional experience, and grow as a software development professional while delivering value to organizations through technology-driven solutions.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column - Education & Milestones */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="lg:col-span-4"
                    >
                        <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]" />
                            <h3 className="text-2xl font-bold text-light mb-8 flex items-center gap-3">
                                <span className="p-2 bg-primary/20 rounded-lg text-primary">🎓</span>
                                Education
                            </h3>
                            
                            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:ml-2.5 md:before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-accent before:to-transparent">
                                
                                <div className="relative pl-8">
                                    <div className="absolute left-0 top-1 w-5 h-5 bg-dark-200 border-2 border-primary rounded-full z-10 flex items-center justify-center">
                                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    </div>
                                    <h4 className="font-bold text-light text-lg">Bachelor of Commerce (Honours)</h4>
                                    <p className="text-primary font-medium text-sm mb-2">University of Delhi</p>
                                    <p className="text-gray-400 text-sm font-light">Developed strong analytical, problem-solving, and business management skills while concurrently mastering web development.</p>
                                </div>

                                <div className="relative pl-8">
                                    <div className="absolute left-0 top-1 w-5 h-5 bg-dark-200 border-2 border-secondary rounded-full z-10" />
                                    <h4 className="font-bold text-light text-lg">Senior Secondary (12th)</h4>
                                    <p className="text-gray-500 font-medium text-sm mb-2">Commerce Stream (CBSE)</p>
                                </div>

                                <div className="relative pl-8">
                                    <div className="absolute left-0 top-1 w-5 h-5 bg-dark-200 border-2 border-gray-600 rounded-full z-10" />
                                    <h4 className="font-bold text-light text-lg">Secondary Education (10th)</h4>
                                    <p className="text-gray-500 font-medium text-sm">CBSE</p>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
