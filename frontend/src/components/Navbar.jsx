import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/styles.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="nav__bar">
        <div className="nav__logo">
          <Link to="/" onClick={closeMenu}>
            <img src="/logo.png" alt="logo" style={{ height: '70px', width: '250px' }} />
          </Link>
        </div>
        
        {/* Mobile menu toggle button */}
        <button 
          className="nav__toggle" 
          onClick={toggleMenu} 
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <i className={isOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>

        <ul className={`nav__links ${isOpen ? 'nav__links--open' : ''}`}>
          <li className="link" onClick={closeMenu}><Link to="/">Home</Link></li>
          <li className="link" onClick={closeMenu}><Link to="/about">About Us</Link></li>

          {/* Services Dropdown */}
          <li className="link dropdown">
            <a href="#" onClick={(e) => e.preventDefault()}>Services ▾</a>
            <ul className="dropdown-menu">
              <li onClick={closeMenu}><Link to="/assessment">Take Assessment</Link></li>
              <li onClick={closeMenu}><Link to="/courses">Courses</Link></li>
              <li onClick={closeMenu}><Link to="/know-more">Know More</Link></li>
            </ul>
          </li>

          <li className="link" onClick={closeMenu}><a href="/#contact">Contact</a></li>
          <li className="link profile-link" onClick={closeMenu}>
            <Link to="/profile" aria-label="Profile">
              <i className="ri-user-line" style={{ fontSize: '1.5rem', verticalAlign: 'middle' }}></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
