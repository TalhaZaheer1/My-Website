import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaTerminal } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = "Initializing Rendering Systems...";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:30px_30px]">
      <div className="max-w-4xl mx-auto px-6 z-10 w-full">
        
        <div className="mb-8 font-mono text-primary-500 text-sm">
          <span className="text-slate-500">&gt; </span> {text}<span className="animate-pulse">_</span>
        </div>
        
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight text-white"
        >
          {personalInfo.name.toUpperCase()} <br className="hidden md:block" />
          <span className="text-primary-500">SOFTWARE ENGINEER</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="text-base md:text-lg text-[#888] max-w-2xl mb-10 leading-relaxed font-mono"
        >
          {personalInfo.headline}. {personalInfo.shortBio}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
          className="flex flex-col sm:flex-row items-start gap-4 font-mono text-sm"
        >
          <a
            href="#projects"
            className="px-6 py-3 border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-black transition-colors flex items-center gap-2 uppercase tracking-widest"
          >
            ./view_projects.sh <FaArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[#333] text-[#aaa] hover:border-[#666] hover:text-white transition-colors flex items-center gap-2 uppercase tracking-widest bg-[#0a0a0a]"
          >
            ping --contact <FaTerminal size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
