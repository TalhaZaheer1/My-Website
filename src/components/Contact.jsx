import Section from './Section';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  return (
    <Section id="contact" className="bg-[#0a0a0a]/50 border-t border-[#1a1a1a]">
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-2 text-white uppercase tracking-widest flex items-center gap-3">
          <span className="text-primary-500">06.</span> Contact
        </h2>
        <p className="text-[#666] text-sm">
          // Awaiting user input...
        </p>
      </div>

      <div className="max-w-xl mx-auto space-y-6">
          <div className="terminal-window">
            <div className="terminal-header">
              <span>contact_info.json</span>
            </div>
            <div className="p-6">
              <div className="space-y-4 text-sm">
                <div className="flex flex-col gap-1">
                  <span className="text-[#555]">"email":</span>
                  <a href={`mailto:${personalInfo.email}`} className="text-primary-500 hover:underline">
                    "{personalInfo.email}"
                  </a>
                </div>
                
                <div className="pt-4 border-t border-[#222]">
                  <span className="text-[#555] block mb-3">"socials": [</span>
                  <div className="flex gap-4 pl-4">
                    <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-[#888] hover:text-white transition-colors">
                      <FaGithub size={20} />
                    </a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-[#888] hover:text-white transition-colors">
                      <FaLinkedin size={20} />
                    </a>
                    {/* <a href={personalInfo.twitter} target="_blank" rel="noreferrer" className="text-[#888] hover:text-white transition-colors"> */}
                    {/*   <FaTwitter size={20} /> */}
                    {/* </a> */}
                  </div>
                  <span className="text-[#555] block mt-3">]</span>
                </div>
              </div>
            </div>
          </div>
        </div>

    </Section>
  );
}
