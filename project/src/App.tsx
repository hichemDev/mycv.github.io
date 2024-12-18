import React, { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      
      const delta = e.deltaY;
      const sections = document.querySelectorAll('section');
      const currentSection = Array.from(sections).find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top >= -100 && rect.top <= 100;
      });
      
      if (currentSection) {
        const currentIndex = Array.from(sections).indexOf(currentSection);
        const nextIndex = delta > 0 ? currentIndex + 1 : currentIndex - 1;
        
        if (nextIndex >= 0 && nextIndex < sections.length) {
          sections[nextIndex].scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#111111] overflow-y-auto scroll-smooth">
      <Navigation />
      <Header />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
      <footer className="bg-black text-white py-6 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;