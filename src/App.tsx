import { CustomCursor } from './components/ui/CustomCursor';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-background min-h-screen text-white selection:bg-cyan-500/30">
      <CustomCursor />
      <Hero />
      <About />
      <Projects />
      <Contact />

      <footer className="bg-black py-8 border-t border-white/10 text-center">
        <p className="text-gray-500 font-mono text-sm">
          &copy; {new Date().getFullYear()} Subrata Jana. System Active.
        </p>
      </footer>
    </div>
  );
}

export default App;
