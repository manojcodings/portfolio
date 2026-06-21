import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Other'];

    const projects = [
        {
            title: 'Ghost Rider Luxury Bikes',
            description: 'A premium motorcycle showcase platform with multi-page navigation, smooth animations, admin dashboard & WhatsApp integration.',
            tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
            category: 'Full Stack',
            image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000&auto=format&fit=crop',
            url: 'https://github.com/manojcodings/ghost-rider-luxury-bikes',
            liveUrl: null,
        },
        {
            title: 'E-Commerce Platform',
            description: 'Full stack e-commerce project with product management, shopping cart, checkout flow, and admin dashboard.',
            tech: ['Laravel', 'MySQL', 'Bootstrap', 'Blade'],
            category: 'Full Stack',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop',
            url: 'https://github.com/manojcodings/ecommerce-laravel',
            liveUrl: null,
        },
        {
            title: 'Food Delivery Web App',
            description: 'A full-stack food ordering website with admin panel, order management, and responsive UI.',
            tech: ['PHP', 'MySQL', 'HTML/CSS', 'Bootstrap'],
            category: 'Full Stack',
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop',
            url: 'https://github.com/manojcodings/food-delivery-web-app',
            liveUrl: null,
        },
        {
            title: 'Weather App',
            description: 'Real-time weather app showing current conditions, temperature, humidity, wind speed and 5-day forecast.',
            tech: ['React.js', 'OpenWeather API', 'CSS'],
            category: 'Frontend',
            image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?q=80&w=1000&auto=format&fit=crop',
            url: 'https://github.com/manojcodings/weather-app-react',
            liveUrl: 'https://manojcodings.github.io/weather-app-react',
        },
        {
            title: 'Ghost Rider Backend API',
            description: 'Laravel REST API with JWT authentication via Sanctum, bike management CRUD, contact form handling.',
            tech: ['Laravel', 'PHP', 'Sanctum', 'REST API'],
            category: 'Backend',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
            url: 'https://github.com/manojcodings/ghost-rider-backend',
            liveUrl: null,
        },
        {
            title: 'Multi-User Role System',
            description: 'PHP & MySQL multi-user management system with role-based dashboard access for Admin, HR, and Digital Marketing.',
            tech: ['PHP', 'MySQL', 'Bootstrap 5'],
            category: 'Backend',
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop',
            url: 'https://github.com/manojcodings/multiuser-system',
            liveUrl: null,
        },
        {
            title: 'Role-Based Login System',
            description: 'Secure multi-user role-based login system with authentication, authorization, and role-specific dashboards.',
            tech: ['PHP', 'MySQL', 'JavaScript'],
            category: 'Backend',
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop',
            url: 'https://github.com/manojcodings/multi-user-role-based-login-system',
            liveUrl: null,
        },
        {
            title: 'WordPress Custom Theme',
            description: 'Custom WordPress theme built from scratch with clean design, SEO optimization, and responsive layout.',
            tech: ['WordPress', 'PHP', 'CSS'],
            category: 'Other',
            image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=1000&auto=format&fit=crop',
            url: 'https://github.com/manojcodings/wordpress-custom-theme',
            liveUrl: null,
        },
        {
            title: 'My First Project',
            description: 'The project that started it all — my very first step into the world of coding and web development.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            category: 'Other',
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop',
            url: 'https://github.com/manojcodings/my-first-project',
            liveUrl: null,
        },
    ];

    const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

    return (
        <section id="projects" className="py-32 relative bg-dark-100/50">
            {/* Background glow */}
            <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                            Featured <span className="text-gradient">Work</span>
                        </h2>
                        <p className="text-gray-400 text-lg font-light">
                            Explore my latest projects showcasing expertise in frontend design, backend architecture, and full-stack integration.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-2 md:justify-end">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeFilter === cat
                                    ? 'bg-primary border-primary text-light shadow-glow'
                                    : 'bg-transparent border-white/10 text-gray-400 hover:border-primary/50 hover:text-light'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Project Grid */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project, index) => (
                            <motion.a
                                key={project.title}
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="group relative rounded-3xl overflow-hidden glass-card border border-white/5 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all duration-500 cursor-pointer flex flex-col h-full"
                            >
                                {/* Image Container */}
                                <div className="relative h-56 overflow-hidden">
                                    <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/10 transition-colors duration-500 z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out grayscale group-hover:grayscale-0"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 text-xs font-semibold bg-dark/80 backdrop-blur-md text-primary rounded-full border border-primary/20 shadow-glow">
                                            {project.category}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-200 to-transparent opacity-100 z-10" />
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow relative z-20 -mt-8 bg-dark-200/80 backdrop-blur-sm rounded-t-3xl border-t border-white/5">
                                    <h3 className="text-xl font-bold text-light mb-3 group-hover:text-primary transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm font-light leading-relaxed mb-6 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover Overlay Icon */}
                                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    <div className="bg-primary p-2 rounded-full shadow-glow">
                                        <svg className="w-5 h-5 text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-20 text-center"
                >
                    <a
                        href="https://github.com/manojcodings"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary hover:text-light px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-glow group"
                    >
                        <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View Full GitHub Profile
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
