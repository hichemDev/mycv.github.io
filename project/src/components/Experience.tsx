import React from 'react';
import { Briefcase } from 'lucide-react';
import Section from './ui/Section';
import AnimatedText from './ui/AnimatedText';
import { SECTION_IDS } from '../utils/constants';

const experiences = [
  {
    company: "Tech Corp",
    position: "Senior Software Engineer",
    period: "2020 - Present",
    description: "Led development of microservices architecture, mentored junior developers, implemented CI/CD pipelines."
  },
  {
    company: "StartUp Inc",
    position: "Full Stack Developer",
    period: "2018 - 2020",
    description: "Developed and maintained multiple client projects, worked with React and Node.js ecosystem."
  },
  {
    company: "Digital Solutions",
    position: "Frontend Developer",
    period: "2016 - 2018",
    description: "Built responsive web applications, implemented UI/UX designs, worked with REST APIs."
  }
];

export default function Experience() {
  return (
    <Section id={SECTION_IDS.experience} className="bg-[#111111]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedText>
            <h2 className="text-3xl font-bold mb-8 text-white border-l-4 border-yellow-400 pl-4">Experience</h2>
          </AnimatedText>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <AnimatedText key={index} delay={200 * (index + 1)}>
                <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-800 hover:border-yellow-400 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-yellow-400/10 rounded-lg">
                      <Briefcase className="text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                      <p className="text-yellow-400 font-medium">{exp.company}</p>
                      <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                      <p className="text-gray-300">{exp.description}</p>
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