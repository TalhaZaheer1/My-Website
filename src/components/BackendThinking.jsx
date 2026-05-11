import Section from './Section';
import { backendThinking } from '../data/portfolioData';

export default function BackendThinking() {
  return (
    <Section id="system-design">
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-2 text-white uppercase tracking-widest flex items-center gap-3">
          <span className="text-primary-500">05.</span> Systems Thinking 
        </h2>
        <p className="text-[#666] text-sm">
          // Design philosophy and core architectural principles
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {backendThinking.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.id} className="terminal-window flex flex-col group hover:border-primary-500/50 transition-colors">
              <div className="terminal-header group-hover:border-primary-500/50 transition-colors">
                <span className="flex items-center gap-2"><Icon size={12} className="text-primary-500" /> {card.title.toLowerCase().replace(/ /g, '_')}.conf</span>
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold text-white mb-3 uppercase tracking-wide">[{card.title}]</h3>
                <p className="text-[#888] text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
