import Section from './Section';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-white uppercase tracking-widest flex items-center gap-3">
            <span className="text-primary-500">01.</span> About
          </h2>
          <div className="space-y-4 text-[#888] text-sm leading-relaxed">
            <p>
              &gt; User profile loaded: <span className="text-primary-500">{personalInfo.name}</span>
            </p>
            <p>
              While I am comfortable building user interfaces with React, my true passion lies beneath the surface. I enjoy tackling complex data modeling, orchestrating system elements (increasingly with Golang), implementing robust authentication layers, and designing seamless third-party integrations.
            </p>
         </div>
        </div>
        
        <div className="terminal-window">
          <div className="terminal-header">
            <span>core_focus.txt</span>
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
            </div>
          </div>
          <div className="p-6">
            <ul className="space-y-4 text-sm text-[#bbb]">
              {[
                "Backend-heavy full-stack development",
                "API design",
                "Database architecture (SQL & NoSQL)",
                "Authentication & RBAC implementation",
                "System architecture design"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary-500">~</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
