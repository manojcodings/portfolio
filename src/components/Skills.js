import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
      // Frontend fundamentals
      { name: 'HTML', icon: '🟦', level: 95, color: 'from-[#E34F26] to-[#F16529]' },
      { name: 'CSS', icon: '🎨', level: 95, color: 'from-[#1572B6] to-[#2965F1]' },
      { name: 'JavaScript', icon: '🟡', level: 90, color: 'from-[#00F0FF] to-[#3B82F6]' },
      { name: 'JSON', icon: '🗂️', level: 90, color: 'from-[#f7df1e] to-[#e0a800]' },
      { name: 'AJAX', icon: '⚡', level: 85, color: 'from-[#4A90E2] to-[#50E3C2]' },
      // Frontend frameworks / UI
      { name: 'React.js', icon: '⚛️', level: 90, color: 'from-[#6366F1] to-[#00F0FF]' },
      { name: 'Bootstrap / CSS', icon: '🎨', level: 95, color: 'from-[#A855F7] to-[#6366F1]' },
      { name: 'jQuery', icon: '⚡', level: 85, color: 'from-[#6366F1] to-[#06B6D4]' },
      // Backend / Database
      { name: 'PHP', icon: '🐘', level: 85, color: 'from-[#00F0FF] to-[#6366F1]' },
      { name: 'Laravel', icon: '🔴', level: 85, color: 'from-[#A855F7] to-[#6366F1]' },
      { name: 'MySQL', icon: '🗄️', level: 80, color: 'from-[#6366F1] to-[#A855F7]' },
      // Tools & Platforms
      { name: 'Git & GitHub', icon: '🔧', level: 85, color: 'from-[#00F0FF] to-[#3B82F6]' },
      { name: 'Postman', icon: '📮', level: 80, color: 'from-[#FF6C37] to-[#FF9F40]' },
      { name: 'WordPress', icon: '📝', level: 80, color: 'from-[#6366F1] to-[#A855F7]' },
    ];

    return (
        <section id="skills" className="py-32 relative bg-dark">
            {/* Background Elements */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                        Technical <span className="text-gradient">Proficiency</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                        My arsenal of tools and technologies. I constantly learn and adapt to build scalable, high-performance web applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="glass-card rounded-2xl p-6 lg:p-8 text-center group cursor-default transition-all duration-300 hover:border-primary/40 relative overflow-hidden"
                        >
                            {/* Hover Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                            
                            <div className="relative z-10">
                                <motion.div 
                                    className="text-5xl mb-6 inline-block drop-shadow-lg"
                                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {skill.icon}
                                </motion.div>
                                <h3 className="font-semibold text-lg text-light mb-4 tracking-wide group-hover:text-primary transition-colors">{skill.name}</h3>
                                
                                {/* Progress Bar Container */}
                                <div className="w-full bg-dark-200 rounded-full h-1.5 overflow-hidden border border-white/5">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                                        className={`bg-gradient-to-r ${skill.color} h-full rounded-full relative`}
                                    >
                                        <div className="absolute inset-0 bg-white/30 w-full h-full animate-[textShimmer_2s_infinite]" />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
