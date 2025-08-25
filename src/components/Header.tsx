import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
{/* Logo with responsive sizing and hover effect */}
<div className="flex-shrink-0">
  <Link to="/" className="block">
    <img 
      src="https://res.cloudinary.com/dqokf2vgg/image/upload/e_improve,e_sharpen/v1751643644/Makio_Logo_jmdq5e.png" 
      alt="Makio Tours Logo"
      className="h-8 md:h-10 w-auto transition-opacity hover:opacity-90"
      width={120}  
      height={40}  
      loading="lazy"
    />
  </Link>
</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/"
              className={`font-opensans font-medium transition-colors ${
                isActive('/') 
                  ? 'text-safari-green border-b-2 border-safari-green' 
                  : 'text-gray-700 hover:text-safari-green'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about"
              className={`font-opensans font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-safari-green border-b-2 border-safari-green' 
                  : 'text-gray-700 hover:text-safari-green'
              }`}
            >
              About
            </Link>
            <Link 
              to="/packages"
              className={`font-opensans font-medium transition-colors ${
                isActive('/packages') 
                  ? 'text-safari-green border-b-2 border-safari-green' 
                  : 'text-gray-700 hover:text-safari-green'
              }`}
            >
              Packages
            </Link>
            <Link 
              to="/gallery"
              className={`font-opensans font-medium transition-colors ${
                isActive('/gallery') 
                  ? 'text-safari-green border-b-2 border-safari-green' 
                  : 'text-gray-700 hover:text-safari-green'
              }`}
            >
              Gallery
            </Link>
            <Link 
              to="/contact"
              className={`font-opensans font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-safari-green border-b-2 border-safari-green' 
                  : 'text-gray-700 hover:text-safari-green'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-safari-green">
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-opensans text-sm">+254 774 156 869</span>
            </div>
            <div className="flex items-center text-safari-green">
              <Mail className="h-4 w-4 mr-2" />
              <span className="font-opensans text-sm">info@makiotours.com</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-safari-green transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link 
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 font-opensans font-medium w-full text-left transition-colors ${
                  isActive('/') 
                    ? 'text-safari-green bg-green-50' 
                    : 'text-gray-700 hover:text-safari-green hover:bg-gray-50'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 font-opensans font-medium w-full text-left transition-colors ${
                  isActive('/about') 
                    ? 'text-safari-green bg-green-50' 
                    : 'text-gray-700 hover:text-safari-green hover:bg-gray-50'
                }`}
              >
                About
              </Link>
              <Link 
                to="/packages"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 font-opensans font-medium w-full text-left transition-colors ${
                  isActive('/packages') 
                    ? 'text-safari-green bg-green-50' 
                    : 'text-gray-700 hover:text-safari-green hover:bg-gray-50'
                }`}
              >
                Packages
              </Link>
              <Link 
                to="/gallery"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 font-opensans font-medium w-full text-left transition-colors ${
                  isActive('/gallery') 
                    ? 'text-safari-green bg-green-50' 
                    : 'text-gray-700 hover:text-safari-green hover:bg-gray-50'
                }`}
              >
                Gallery
              </Link>
              <Link 
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 font-opensans font-medium w-full text-left transition-colors ${
                  isActive('/contact') 
                    ? 'text-safari-green bg-green-50' 
                    : 'text-gray-700 hover:text-safari-green hover:bg-gray-50'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;