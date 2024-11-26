import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hubert-de-marcillac-56a218252/',
    icon: Linkedin,
    color: 'text-[#0A66C2]',
    hoverColor: 'hover:text-[#004182]'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Hubertdm',
    icon: Github,
    color: 'text-gray-900',
    hoverColor: 'hover:text-gray-700'
  },
  {
    name: 'Email',
    url: 'mailto:hubdemarcillac@gmail.com',
    icon: Mail,
    color: 'text-blue-800',
    hoverColor: 'hover:text-blue-600'
  }
];

const SocialLinks: React.FC = () => {
  return (
    <div className="flex justify-center items-center space-x-8">
      {socialLinks.map(({ name, url, icon: Icon, color, hoverColor }) => (
        <a
          key={name}
          href={url}
          target={name !== 'Email' ? '_blank' : undefined}
          rel={name !== 'Email' ? 'noopener noreferrer' : undefined}
          className={`${color} ${hoverColor} transition-all duration-300 transform hover:scale-110`}
          aria-label={name}
        >
          <Icon className="w-10 h-10" strokeWidth={1.5} />
          <span className="sr-only">{name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;