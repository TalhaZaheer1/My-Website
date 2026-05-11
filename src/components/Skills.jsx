import Section from './Section';
import { skills } from '../data/portfolioData';

function SkillCategory({ title, items }) {
  return (
    <div className="mb-10 last:mb-0">
      <h3 className="text-sm font-bold mb-4 text-[#888] uppercase tracking-wider">
        <span className="text-primary-500">#</span> {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="terminal-card p-4 flex flex-col items-center justify-center gap-3 hover:border-primary-500/50 hover:bg-[#111] transition-all cursor-default group"
            >
              <div className="text-[#555] group-hover:text-primary-500 transition-colors">
                <Icon size={24} />
              </div>
              <span className="text-xs font-medium text-[#aaa] group-hover:text-white transition-colors text-center">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills" className="bg-[#0a0a0a]/50 border-y border-[#1a1a1a]">
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-2 text-white uppercase tracking-widest flex items-center gap-3">
          <span className="text-primary-500">02.</span> Technical Arsenal
        </h2>
        <p className="text-[#666] text-sm">
          // Modules and dependencies currently loaded
        </p>
      </div>

      <div className="space-y-12">
        <SkillCategory title="backend_core" items={skills.backend} />
        <SkillCategory title="frontend_ui" items={skills.frontend} />
        <SkillCategory title="databases_orms" items={skills.databases} />
        <SkillCategory title="devops_tooling" items={skills.devops} />
        <SkillCategory title="system_design" items={skills.systemDesign} />
      </div>
    </Section>
  );
}
