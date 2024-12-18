import React from 'react';
import { useInView } from '../../hooks/useInView';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function FadeInSection({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up' 
}: FadeInSectionProps) {
  const { ref, isInView } = useInView();

  const getTransformClass = () => {
    switch (direction) {
      case 'up': return 'translate-y-10';
      case 'down': return '-translate-y-10';
      case 'left': return 'translate-x-10';
      case 'right': return '-translate-x-10';
      default: return 'translate-y-10';
    }
  };

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ease-out opacity-0 ${getTransformClass()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transform: isInView ? 'translate(0, 0)' : undefined,
        opacity: isInView ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
}