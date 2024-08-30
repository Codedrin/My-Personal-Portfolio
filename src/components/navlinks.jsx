import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faPaste, faAdjust } from '@fortawesome/free-solid-svg-icons';

const NavLinks = () => {
  return (
    <div className="side-bar-navlinks flex flex-col space-y-4 ">
    <a href="#home" className="global-style-navlink text-white hover:text-gray-400 flex items-center">
      <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
    </a>
    <a href="#contact" className="global-style-navlink text-white hover:text-gray-400 flex items-center">
      <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact
    </a>
    <a href="#projects" className="global-style-navlink text-white hover:text-gray-400 flex items-center">
      <FontAwesomeIcon icon={faPaste} className="mr-2" /> Projects
    </a>
    <a href="#theme" className="global-style-navlink text-white hover:text-gray-400 flex items-center">
      <FontAwesomeIcon icon={faAdjust} className="mr-2" /> Theme
    </a>
  </div>
  );
}

export default NavLinks;
