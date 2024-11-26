import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  icon: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, icon, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 px-4 ${className}`}>
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-center mb-12">
          <div className="mr-4 text-blue-600">
            {icon}
          </div>
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;