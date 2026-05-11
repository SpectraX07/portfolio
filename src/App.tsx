import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { CustomCursor } from './components/ui/CustomCursor';
import { DataBackground } from './components/ui/DataBackground';
import { Loader } from './components/Loader';
import { ProjectDetails } from './components/ProjectDetails';
import { AllProjects } from './components/AllProjects';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import './index.css';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Initial Loading Simulation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <CustomCursor />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <DataBackground />

            <Routes location={location} key={location.pathname}>
              <Route path="/" element={
                <main className="relative z-10">
                  <Hero />
                  <section id="about"><About /></section>
                  <section id="projects"><Projects /></section>
                  <section id="contact"><Contact /></section>
                </main>
              } />
              <Route path="/modules" element={<AllProjects />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
