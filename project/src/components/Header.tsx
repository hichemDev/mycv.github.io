import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import Section from './ui/Section';
import AnimatedText from './ui/AnimatedText';
import { SECTION_IDS } from '../utils/constants';

export default function Header() {
  return (
    <Section id={SECTION_IDS.header} className="bg-[#111111]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <AnimatedText className="flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-yellow-400 shadow-lg shadow-yellow-400/20"
              />
            </AnimatedText>
            <div className="text-center md:text-left">
              <AnimatedText delay={200}>
                <h1 className="text-4xl font-bold mb-2 text-yellow-400">John Doe</h1>
              </AnimatedText>
              <AnimatedText delay={400}>
                <h2 className="text-2xl mb-4 text-white">Senior Software Engineer</h2>
              </AnimatedText>
              <AnimatedText delay={600}>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors">
                    <MapPin size={18} /> New York, USA
                  </a>
                  <a href="mailto:john@example.com" className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors">
                    <Mail size={18} /> john@example.com
                  </a>
                  <a href="https://github.com" className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors">
                    <Github size={18} /> GitHub
                  </a>
                  <a href="https://linkedin.com" className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors">
                    <Linkedin size={18} /> LinkedIn
                  </a>
                </div>
              </AnimatedText>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}