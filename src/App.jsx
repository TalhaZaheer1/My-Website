import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

import BackendThinking from './components/BackendThinking';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#b0b0b0] selection:bg-primary-500/30 selection:text-white font-mono scanlines">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />

        <BackendThinking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
