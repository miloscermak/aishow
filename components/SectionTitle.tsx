import React from 'react';

interface SectionTitleProps {
  title: string;
  color?: 'text-pop-red' | 'text-pop-blue' | 'text-pop-yellow' | 'text-pop-black';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, color = 'text-pop-black' }) => {
  return (
    <h2 className={`text-4xl md:text-6xl font-comic uppercase mb-8 text-center ${color} drop-shadow-[3px_3px_0_rgba(0,0,0,1)] tracking-wider`}>
      {title}
    </h2>
  );
};