import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 border-t border-[#1a1a1a] bg-[#050505] font-mono">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#555] text-xs uppercase tracking-widest">
          EOF {currentYear} © {personalInfo.name}
        </p>
        <p className="text-[#555] text-xs uppercase tracking-widest flex items-center gap-2">
          STATUS: <span className="text-primary-500">ONLINE</span>
        </p>
      </div>
    </footer>
  );
}
