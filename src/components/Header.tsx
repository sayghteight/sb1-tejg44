import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-gray-900/50 backdrop-blur-sm z-50">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">
            WoWCMS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
            <Link to="/community" className="text-gray-300 hover:text-white">Community</Link>
            <Link to="/marketplace" className="text-gray-300 hover:text-white">Marketplace</Link>
            <Link to="/contribute" className="text-gray-300 hover:text-white">Contribute</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
            <Link to="/docs" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
              Documentation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              <Link to="/community" className="text-gray-300 hover:text-white">Community</Link>
              <Link to="/marketplace" className="text-gray-300 hover:text-white">Marketplace</Link>
              <Link to="/contribute" className="text-gray-300 hover:text-white">Contribute</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
              <Link to="/docs" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg inline-block">
                Documentation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;