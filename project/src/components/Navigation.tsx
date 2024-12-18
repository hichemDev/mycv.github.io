import React from 'react';
import { SECTION_IDS } from '../utils/constants';

const navItems = [
  { id: SECTION_IDS.header, label: 'Home' },
  { id: SECTION_IDS.about, label: 'About' },
  { id: SECTION_IDS.experience, label: 'Experience' },
  { id: SECTION_IDS.skills, label: 'Skills' },
  { id: SECTION_IDS.portfolio, label: 'Portfolio' },
  { id: SECTION_IDS.contact, label: 'Contact' }
];

export default function Navigation() {
  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-4">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="group relative flex items-center"
          >
            <span className="absolute right-8 py-1 px-2 text-sm text-white bg-black rounded opacity-0 transition-opacity group-hover:opacity-100 whitespace-nowrap">
              {item.label}
            </span>
            <div className="w-3 h-3 rounded-full bg-yellow-400 transition-all group-hover:scale-150" />
          </a>
        ))}
      </div>
    </nav>
  );
}