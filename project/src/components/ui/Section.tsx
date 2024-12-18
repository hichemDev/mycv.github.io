import React from 'react';
import { useInView } from '../../hooks/useInView';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, className = '', children }: SectionProps) {
  const { ref, isInView } = useInView();

  return (
    <section 
      id={id}
      ref={ref}
      className={`min-h-screen flex items-center opacity-0 transition-opacity duration-500 ${
        isInView ? 'opacity-100' : ''
      } ${className}`}
    >
      <div className="w-full py-16">
        {children}
      </div>
    </section>
  );
}