

import React, { useState, useEffect } from 'react';
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineTool, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Navbar.css';
import logo from './logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    closeMobileMenu();
  };

 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMobileMenu();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={scrollToTop}>
          <img className='logo' src={logo}></img>
        </div>

        <div className={`navbar-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
          <FiMenu />
        </div>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <li className="navbar-item">
            <Link to="home" smooth={true} duration={500} onClick={closeMobileMenu}>
              <AiOutlineHome className="navbar-icon" />
              <span>Home</span>
            </Link>
          </li>
          
            <li className="navbar-item">
            <Link to="about" smooth={true} duration={500} onClick={closeMobileMenu}>
              <AiOutlineInfoCircle className="navbar-icon" />
              <span>About Me</span>
            </Link>
          </li>
          <li className="navbar-item">
          <Link to="skills" smooth={true} duration={500} onClick={closeMobileMenu}>
              <AiOutlineTool className="navbar-icon" />
              <span>Skills</span>
            </Link>
          </li>
          <li className="navbar-item">
          <Link to="projects" smooth={true} duration={500} onClick={closeMobileMenu}>
              <AiOutlineProject className="navbar-icon" />
              <span>Projects</span>
            </Link>
          </li>
          <li className="navbar-item">
          <Link to="contact" smooth={true} duration={500} onClick={closeMobileMenu}>
              <AiOutlineMail className="navbar-icon" />
              <span>Contact Me</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;












