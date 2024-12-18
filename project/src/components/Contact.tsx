import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import Section from './ui/Section';
import AnimatedText from './ui/AnimatedText';
import { SECTION_IDS } from '../utils/constants';

export default function Contact() {
  return (
    <Section id={SECTION_IDS.contact} className="bg-[#111111]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedText>
            <h2 className="text-3xl font-bold mb-8 text-white border-l-4 border-yellow-400 pl-4">Get In Touch</h2>
          </AnimatedText>
          <AnimatedText delay={200}>
            <div className="bg-gray-900 p-8 rounded-lg shadow-md border border-gray-800">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Contact Information</h3>
                  <div className="space-y-4">
                    <a href="mailto:john@example.com" className="flex items-center gap-3 text-gray-300 hover:text-yellow-400">
                      <Mail size={20} />
                      <span>john@example.com</span>
                    </a>
                    <a href="tel:+1234567890" className="flex items-center gap-3 text-gray-300 hover:text-yellow-400">
                      <Phone size={20} />
                      <span>+1 (234) 567-890</span>
                    </a>
                    <a href="https://linkedin.com" className="flex items-center gap-3 text-gray-300 hover:text-yellow-400">
                      <Linkedin size={20} />
                      <span>LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Send a Message</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full bg-yellow-400 text-[#111111] py-2 px-6 rounded-md hover:bg-yellow-500 transition-colors font-semibold"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </AnimatedText>
        </div>
      </div>
    </Section>
  );
}