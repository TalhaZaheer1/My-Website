import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: '~/home', href: '#home' },
    { name: '~/about', href: '#about' },
    { name: '~/skills', href: '#skills' },
    { name: '~/projects', href: '#projects' },
    // { name: '~/experience', href: '#experience' },
    { name: '~/contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 font-mono border-b border-b-2 border-black text-sm ${scrolled ? 'bg-[#050505]/90 backdrop-blur-sm  border-primary-500/20  border-b-2 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-primary-500 font-bold tracking-tight hover:text-primary-400 transition-colors">
          user@{personalInfo.name.split(' ')[0].toLowerCase()}:~$
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-[#888] hover:text-primary-500 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-primary-500 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '[CLOSE]' : '[MENU]'}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className={`md:hidden bg-[#050505] ${ !scrolled ? "border-b border-primary-500/20" : ""} px-6 py-4 flex flex-col space-y-4`}>
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-[#888] hover:text-primary-500 transition-colors text-sm  tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
