import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800/50 backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold">WoW-CMS</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md">Home</Link>
              <Link to="/features" className="hover:bg-gray-700 px-3 py-2 rounded-md">Features</Link>
              <Link to="/community" className="hover:bg-gray-700 px-3 py-2 rounded-md">Community</Link>
              <Link to="/docs" className="hover:bg-gray-700 px-3 py-2 rounded-md">Documentation</Link>
              <Link to="/contact" className="hover:bg-gray-700 px-3 py-2 rounded-md">Contact</Link>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="hover:bg-gray-700 px-3 py-2 rounded-md">
                <Github className="inline-block w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:bg-gray-700 px-3 py-2 rounded-md">Home</Link>
            <Link to="/features" className="block hover:bg-gray-700 px-3 py-2 rounded-md">Features</Link>
            <Link to="/community" className="block hover:bg-gray-700 px-3 py-2 rounded-md">Community</Link>
            <Link to="/docs" className="block hover:bg-gray-700 px-3 py-2 rounded-md">Documentation</Link>
            <Link to="/contact" className="block hover:bg-gray-700 px-3 py-2 rounded-md">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;