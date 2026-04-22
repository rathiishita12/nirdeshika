import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/styles.css';

const Navbar = () => {
  return (
    <nav>
      <div className="nav__bar">
        <div className="nav__logo">
          <Link to="/">
            <img src="/logo.png" alt="logo" style={{ height: '70px', width: '250px' }} />
          </Link>
        </div>
        <ul className="nav__links">
          <li className="link"><Link to="/">Home</Link></li>
          <li className="link"><Link to="/about">About Us</Link></li>

          {/* Services Dropdown */}
          <li className="link dropdown">
            <a href="#">Services ▾</a>
            <ul className="dropdown-menu">
              <li><Link to="/assessment">Take Assessment</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/know-more">Know More</Link></li>
            </ul>
          </li>

          <li className="link"><a href="/#contact">Contact</a></li>
          <li className="link profile-link">
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
