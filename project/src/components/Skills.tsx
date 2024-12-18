import React from 'react';
import Section from './ui/Section';
import AnimatedText from './ui/AnimatedText';
import { SECTION_IDS } from '../utils/constants';

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
  { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Git"] },
  { category: "Soft Skills", items: ["Team Leadership", "Communication", "Problem Solving", "Agile"] }
];

export default function Skills() {
  return (
    <Section id={SECTION_IDS.skills} className="bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedText>
            <h2 className="text-3xl font-bold mb-8 text-[#111111] border-l-4 border-yellow-400 pl-4">Skills</h2>
          </AnimatedText>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <AnimatedText key={index} delay={200 * (index + 1)}>
                <div className="bg-gray-100 p-6 rounded-lg border border-gray-200 hover:border-yellow-400 transition-colors">
                  <h3 className="text-xl font-semibold mb-4 text-[#111111]">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-yellow-400/10 text-[#111111] rounded-full text-sm font-medium border border-yellow-400"
                      >
                        {skill}
                      </span>
                    ))}
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