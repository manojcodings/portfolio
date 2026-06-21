import React, { Suspense, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, OrbitControls, Icosahedron, MeshDistortMaterial } from '@react-three/drei';

const AnimatedGeometry = () => {
    const meshRef = useRef();
    
    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = time * 0.2;
            meshRef.current.rotation.y = time * 0.3;
        }
    });

    return (
        <Float speed={2.5} rotationIntensity={2} floatIntensity={3}>
            {/* Outer wireframe distorted sphere */}
            <Icosahedron ref={meshRef} args={[1.8, 4]} scale={1.2}>
                <MeshDistortMaterial
                    color="#6366F1"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                    wireframe={true}
                    transparent
                    opacity={0.3}
                />
            </Icosahedron>
            {/* Inner solid geometry */}
            <Icosahedron args={[1.2, 2]} scale={0.8}>
                <meshStandardMaterial 
                    color="#A855F7" 
                    emissive="#A855F7"
                    emissiveIntensity={0.5}
                    roughness={0.2}
                    metalness={1}
                />
            </Icosahedron>
        </Float>
    );
};

// 3D Tilt Card Component for the Photo
const PhotoTiltCard = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div className="relative w-[380px] h-[480px] perspective-1000">
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateY,
                    rotateX,
                    transformStyle: "preserve-3d",
                }}
                className="relative w-full h-full rounded-2xl cursor-pointer"
            >
                {/* Glowing Backing behind the card */}
                <div 
                    style={{ transform: "translateZ(-50px)" }}
                    className="absolute inset-[-20px] bg-gradient-to-br from-primary via-accent to-secondary rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" 
                />

                {/* Main Card / Image */}
                <div 
                    style={{ transform: "translateZ(0px)" }}
                    className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 glass-card"
                >
                    <img
                        src={process.env.PUBLIC_URL + '/photo.jpg'}
                        alt="Manoj Kumar"
                        className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    />
                    
                    {/* Glass overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80" />
                </div>

                {/* Floating 3D Elements protruding from the card */}
                <motion.div 
                    style={{ transform: "translateZ(80px)" }}
                    className="absolute bottom-6 left-6 right-6 glass-effect p-4 rounded-xl border border-white/20 backdrop-blur-md"
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-light font-bold text-lg">Manoj Kumar</p>
                            <p className="text-secondary text-sm font-medium">Full Stack Developer</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 shadow-glow">
                            <span className="text-light text-xl">🚀</span>
                        </div>
                    </div>
                </motion.div>

                {/* Tech Badges floating in 3D space */}
                <motion.div style={{ transform: "translateZ(100px)" }} className="absolute -top-4 -right-4 glass-effect p-3 rounded-xl border border-white/10 shadow-lg">
                    <span className="text-2xl">⚛️</span>
                </motion.div>
                <motion.div style={{ transform: "translateZ(60px)" }} className="absolute top-1/3 -left-6 glass-effect p-3 rounded-xl border border-white/10 shadow-lg">
                    <span className="text-2xl">🐘</span>
                </motion.div>
                <motion.div style={{ transform: "translateZ(120px)" }} className="absolute bottom-1/4 -right-6 glass-effect p-3 rounded-xl border border-white/10 shadow-lg">
                    <span className="text-2xl">🔴</span>
                </motion.div>

            </motion.div>
        </div>
    );
};

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} color="#6366F1" />
                    <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#00F0FF" />
                    <Suspense fallback={null}>
                        <Stars radius={100} depth={50} count={5000} factor={4} saturation={1} fade speed={1} />
                        <AnimatedGeometry />
                        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
                    </Suspense>
                </Canvas>
                {/* Overlay gradient to blend 3D with background */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/60 to-dark pointer-events-none" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">
                    {/* Left Content */}
                    <motion.div style={{ y: y1, opacity }} className="flex flex-col items-start text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-effect border-primary/30 mb-8 shadow-glow"
                        >
                            <span className="relative flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                            </span>
                            <span className="text-sm font-medium text-light tracking-wide">Available for full-time opportunities</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight text-light"
                        >
                            Hello, I'm <br />
                            <span className="text-gradient">Manoj Kumar</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-light"
                        >
                            A passionate <strong className="text-light font-semibold">Web Developer</strong> dedicated to building modern, responsive, and highly user-friendly applications.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap items-center gap-5 mb-14"
                        >
                            <a
                                href="#projects"
                                className="relative group px-8 py-4 bg-primary text-light rounded-full font-semibold overflow-hidden transition-all hover:scale-105 shadow-glow"
                            >
                                <span className="relative z-10">Explore Projects</span>
                                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </a>
                            
                            <a
                                href="#about"
                                className="px-8 py-4 rounded-full font-semibold text-light border border-white/20 hover:bg-white/10 transition-all hover:scale-105 backdrop-blur-sm"
                            >
                                More About Me
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Content / Visuals - 3D Photo Tilt Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="hidden lg:flex justify-center items-center relative perspective-1000"
                    >
                        <PhotoTiltCard />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-xs uppercase tracking-widest text-primary font-semibold">Scroll Down</span>
                <div className="w-[2px] h-14 bg-white/10 relative overflow-hidden rounded-full">
                    <motion.div 
                        className="absolute top-0 left-0 w-full h-1/2 bg-primary rounded-full"
                        animate={{ top: ['-50%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;