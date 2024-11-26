import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  level?: number;
}

interface SkillCategoryProps {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon: Icon, skills }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 h-full">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            <span className="w-2 h-2 bg-blue-600 rounded-full" />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCategory;