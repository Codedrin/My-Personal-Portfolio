import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import NavLinks from '../components/navlinks';
import Drin_logo from '../assets/Drin_logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  // Handle click outside the navbar to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav ref={navbarRef} className="bg-gray-900 p-4 shadow-lg">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center space-x-4">
          {/* Your logo */}
          <img src={Drin_logo} alt="Logo" className={`drin-logo h-12 ${isOpen ? 'text-white' : ''}`} />
        </div>

        <div className="flex items-center space-x-8">
          <a href="#about" className="blog-link text-white">
            BLOG
          </a>

          {/* Menu button for displaying more links */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white transition-transform duration-300 ease-out transform"
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="menu-item w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Sidebar for navigation links with transition */}
      <div
        className={`fixed inset-y-0 right-0 bg-gray-900 text-white z-50 shadow-lg transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } w-72 md:w-96`}
      >
        <div className="flex flex-col h-full">
          {/* Logo and close button */}
          <div className="flex justify-between items-center p-6">
            <img src={Drin_logo} alt="Logo" className="drin-logo h-12 filter-mobile-blue" />
            <button
              onClick={() => setIsOpen(false)}
              className="text-white transition-transform duration-300 ease-out transform"
            >
              <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
            </button>
          </div>
          <hr className="border-t-1 border-gray-200" />
          {/* Navigation Links */}
          <div className="flex flex-col space-y-4 p-6">
            <NavLinks />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
