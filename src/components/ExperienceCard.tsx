import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  location,
  duration,
  description
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600 mt-1">
            {company} • {location}
          </p>
        </div>
        <p className="text-gray-500 mt-2 md:mt-0">{duration}</p>
      </div>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {description.map((item, index) => (
          <li key={index} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;