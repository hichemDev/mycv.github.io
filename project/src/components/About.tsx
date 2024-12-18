import React from 'react';
import Section from './ui/Section';
import AnimatedText from './ui/AnimatedText';
import { SECTION_IDS } from '../utils/constants';

export default function About() {
  return (
    <Section id={SECTION_IDS.about} className="bg-[#111111]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedText>
            <h2 className="text-3xl font-bold mb-8 text-white border-l-4 border-yellow-400 pl-4">About Me</h2>
          </AnimatedText>
          <AnimatedText delay={200}>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate software engineer with over 8 years of experience in building scalable web applications.
              Specialized in React, Node.js, and cloud technologies. I love solving complex problems and creating
              user-friendly applications that make a difference.
            </p>
          </AnimatedText>
          <AnimatedText delay={400}>
            <p className="text-lg text-gray-300 leading-relaxed">
              Throughout my career, I've led multiple successful projects and mentored junior developers.
              I'm always eager to learn new technologies and stay up-to-date with the latest industry trends.
            </p>
          </AnimatedText>
        </div>
      </div>
    </Section>
  );
}