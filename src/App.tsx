import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CustomCursor } from './components/ui/CustomCursor';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Loader } from './components/Loader';

import { ParallaxBackground } from './components/ui/ParallaxBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen text-white selection:bg-cyan-500/30 relative">
      <CustomCursor />
      <ParallaxBackground />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.3 } }
            }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}>
              <Hero />
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}>
              <About />
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}>
              <Projects />
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}>
              <Contact />
            </motion.div>

            <motion.footer
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="bg-black py-8 border-t border-white/10 text-center"
            >
              <p className="text-gray-500 font-mono text-sm">
                &copy; {new Date().getFullYear()} Subrata Jana. System Active.
              </p>
            </motion.footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
