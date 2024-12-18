import React from 'react';
import { useInView } from '../../hooks/useInView';

interface AnimatedTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimatedText({ children, delay = 0, className = '' }: AnimatedTextProps) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`opacity-0 ${isInView ? 'animate-fade-in-up' : ''} ${className}`}
      style={{ 
        animationDelay: `${delay}ms`, 
        animationFillMode: 'forwards' 
      }}
    >
      {children}
    </div>
  );
}