import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaGithub, FaDatabase, FaLayerGroup } from 'react-icons/fa';
import Carousel from './Carousel';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-6 font-mono"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-4xl max-h-[90vh] bg-[#0a0a0a] border border-[#333] shadow-[0_0_20px_rgba(0,255,0,0.1)] flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-[#111] border-b border-[#333] px-4 py-3 flex items-center justify-between">
            <span className="text-sm text-[#888] font-bold">~/{project.title.toLowerCase().replace(/ /g, '_')}.exe</span>
            <button 
              onClick={onClose}
              className="text-[#555] hover:text-red-500 transition-colors"
            >
              <FaTimes size={16} />
            </button>
          </div>

          <div className="overflow-y-auto custom-scrollbar flex-grow">
            <div className="p-6">
              
              {/* Carousel */}
              <div className="mb-8 border border-[#222]">
                <Carousel images={project.images} />
              </div>

              {/* Title & Tags */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-[#1a1a1a] border border-[#333] text-[#aaa] text-xs uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Descriptions */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-primary-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <span className="text-[#555]">&gt;</span> Overview
                  </h3>
                  <p className="text-[#aaa] text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#111] border border-[#222] p-5">
                    <h3 className="text-xs font-bold text-[#666] uppercase tracking-widest mb-3 flex items-center gap-2">
                      <FaLayerGroup /> Problem Solved
                    </h3>
                    <p className="text-[#aaa] text-sm leading-relaxed">{project.problemSolved}</p>
                  </div>
                  
                  <div className="bg-[#111] border border-[#222] p-5">
                    <h3 className="text-xs font-bold text-[#666] uppercase tracking-widest mb-3 flex items-center gap-2">
                      <FaDatabase /> Backend Highlight
                    </h3>
                    <p className="text-[#aaa] text-sm leading-relaxed">{project.backendHighlight}</p>
                  </div>
                </div>
              </div>

              {/* Links */}
              {(project.liveDemo || project.codeUrl) && (
                <div className="mt-8 pt-6 border-t border-[#222] flex gap-4">
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-primary-500 text-black font-bold uppercase tracking-widest text-xs hover:bg-primary-400 transition-colors flex items-center gap-2">
                      <FaExternalLinkAlt size={12} /> Launch Demo
                    </a>
                  )}
                  {project.codeUrl && (
                    <a href={project.codeUrl} target="_blank" rel="noreferrer" className="px-5 py-2.5 border border-[#333] text-[#aaa] hover:border-[#666] hover:text-white uppercase tracking-widest text-xs transition-colors flex items-center gap-2">
                      <FaGithub size={14} /> Source Code
                    </a>
                  )}
                </div>
              )}

            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
