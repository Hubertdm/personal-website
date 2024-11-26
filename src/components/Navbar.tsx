import React from 'react';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-xl font-bold text-gray-900">
            HM
          </a>
          <ul className="flex space-x-8">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                >
                  {label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;