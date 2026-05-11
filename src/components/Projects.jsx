import { useState } from 'react';
import Section from './Section';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Section id="projects">
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-2 text-white uppercase tracking-widest flex items-center gap-3">
          <span className="text-primary-500">03.</span> Projects
        </h2>
        <p className="text-[#666] text-sm">
          // Output logs of recent work
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            onClick={() => setSelectedProject(project)}
            className="terminal-window flex flex-col h-full group cursor-pointer hover:border-primary-500/50 hover:shadow-[0_0_15px_rgba(0,255,0,0.1)] transition-all"
          >
            <div className="terminal-header group-hover:border-primary-500/50 transition-colors">
              <span>{project.title.toLowerCase().replace(/ /g, '_')}</span>
              <span className="text-[#555]">id:{project.id}</span>
            </div>
            
            {/* Thumbnail */}
            <div className="w-full h-40 border-b border-[#222] overflow-hidden relative">
              <div className="absolute inset-0 bg-[#0a0a0a]/20 group-hover:bg-transparent transition-colors z-10" />
              <img 
                src={project.thumbnail} 
                alt={project.title} 
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-5 flex-grow flex flex-col">
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-primary-500 transition-colors uppercase tracking-wide">
                {project.title}
              </h3>
              
              <p className="text-[#888] text-xs mb-4 flex-grow line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto mb-4">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-1.5 py-0.5 bg-[#111] border border-[#333] text-[#888] text-[10px] uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-1.5 py-0.5 bg-[#111] border border-[#333] text-[#888] text-[10px] uppercase tracking-widest">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>

              {(project.liveDemo || project.codeUrl) && (
                <div className="flex gap-4 pt-3 border-t border-[#222]">
                  {project.liveDemo && (
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noreferrer" 
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#888] hover:text-primary-500 transition-colors"
                    >
                      <FaExternalLinkAlt size={12} /> [DEMO]
                    </a>
                  )}
                  {project.codeUrl && (
                    <a 
                      href={project.codeUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#888] hover:text-primary-500 transition-colors"
                    >
                      <FaGithub size={12} /> [SOURCE]
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </Section>
  );
}
