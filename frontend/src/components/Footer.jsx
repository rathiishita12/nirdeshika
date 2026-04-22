import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/styles.css';
import { PREDICTION_URL } from '../config';

const Footer = () => {
  return (
    <section className="footer">
      <div className="section__container footer__container">
        <h4>Nirdeshika</h4>
        <div className="footer__socials">
          <span><a href="#"><i className="ri-facebook-fill"></i></a></span>
          <span><a href="#"><i className="ri-instagram-fill"></i></a></span>
          <span><a href="#"><i className="ri-twitter-fill"></i></a></span>
          <span><a href="#"><i className="ri-linkedin-fill"></i></a></span>
        </div>
        <p>
          Helping individuals discover the right career path through AI-driven insights. Nirdeshika empowers students and
          professionals with personalized recommendations, skill-gap analysis, and growth-focused roadmaps — guiding every
          step toward a successful future.
        </p>
        <ul className="footer__nav">
          <li className="link"><Link to="/">Home</Link></li>
          <li className="link"><Link to="/about">About Us</Link></li>
          <li className="link"><a href={PREDICTION_URL}>Take Assessment</a></li>
          <li className="link"><Link to="/courses">Courses</Link></li>
          <li className="link"><Link to="/know-more">Know More</Link></li>
          <li className="link"><a href="/#contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer__bar">
        Copyright © 2025 NISHNAT KUMAR RAJ & ISHITA RATHI. All rights reserved.
      </div>
    </section>
  );
};

export default Footer;
