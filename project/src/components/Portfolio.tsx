import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Section from './ui/Section';
import AnimatedText from './ui/AnimatedText';
import { SECTION_IDS } from '../utils/constants';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800",
    technologies: ["React", "Node.js", "PostgreSQL", "Redux"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800",
    technologies: ["Next.js", "TypeScript", "Socket.io", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Weather Dashboard",
    description: "A beautiful weather application with detailed forecasts",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800",
    technologies: ["React", "TypeScript", "TailwindCSS", "WeatherAPI"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export default function Portfolio() {
  return (
    <Section id={SECTION_IDS.portfolio} className="bg-[#111111]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedText>
            <h2 className="text-3xl font-bold mb-8 text-white border-l-4 border-yellow-400 pl-4">Portfolio</h2>
          </AnimatedText>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedText key={index} delay={index * 200}>
                <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 group hover:border-yellow-400 transition-colors">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs bg-yellow-400/10 text-yellow-400 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
                      >
                        <Github size={16} />
                        <span>Source</span>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}