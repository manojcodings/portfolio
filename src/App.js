import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// A simple loading screen
const Loader = () => (
  <motion.div 
    className="fixed inset-0 z-[100] flex items-center justify-center bg-dark"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
  >
    <div className="relative flex flex-col items-center">
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360] 
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"
      />
      <motion.h2 
        className="mt-6 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Manoj Kumar
      </motion.h2>
    </div>
  </motion.div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>
      
      {!loading && (
        <div className="bg-dark min-h-screen text-light font-poppins selection:bg-primary/30 selection:text-white relative">
          {/* Animated Background Blobs for Red/Black Theme */}
          <div className="fixed inset-0 z-0 pointer-events-none opacity-30 overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-blob" />
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 rounded-full bg-secondary/20 blur-[120px] animate-blob animation-delay-2000" />
            <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-accent/10 blur-[100px] animate-blob animation-delay-4000" />
          </div>
          
          <div className="relative z-10">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;