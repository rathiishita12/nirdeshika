import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/css/styles.css';
import { PREDICTION_URL } from '../config';

// Using direct paths to static assets in public or from assets folder
const Home = () => {
  useEffect(() => {
    if (window.ScrollReveal) {
      const scrollRevealOption = {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
      };

      // header container
      window.ScrollReveal().reveal(".header__container h1", scrollRevealOption);
      window.ScrollReveal().reveal(".header__container h4", {
        ...scrollRevealOption,
        delay: 500,
      });
      window.ScrollReveal().reveal(".header__container .btn", {
        ...scrollRevealOption,
        delay: 1000,
      });

      // about container
      window.ScrollReveal().reveal(".about__container .section__header", scrollRevealOption);
      window.ScrollReveal().reveal(".about__container .section__subheader", {
        ...scrollRevealOption,
        delay: 500,
      });
      window.ScrollReveal().reveal(".about__container .about__flex", {
        ...scrollRevealOption,
        delay: 1000,
      });
      window.ScrollReveal().reveal(".about__container .btn", {
        ...scrollRevealOption,
        delay: 1500,
      });

      // discover container
      window.ScrollReveal().reveal(".discover__container .card", {
        ...scrollRevealOption,
        interval: 500,
      });
    }
  }, []);

  return (
    <>
      <header id="home">
        <Navbar />
        <div className="section__container header__container">
          <h1>Empowering Futures, One Career at a Time</h1>
          <h4>AI-Powered Personalized Career Guidance for Students & Professionals</h4>
          <a href={PREDICTION_URL}>
            <button className="btn">
              Get Started <i className="ri-arrow-right-line"></i>
            </button>
          </a>
        </div>
      </header>

      <section className="about" id="about">
        <div className="section__container about__container">
          <div className="about__content">
            <h2 className="section__header">About us</h2>
            <p className="section__subheader">
              Nirdeshika is an AI-driven career guidance platform that offers personalized career recommendations. It
              leverages machine learning models like Random Forest to match individuals with ideal career paths based on
              their aptitude, aspirations, qualifications, and industry trends.<br /> With real-time insights, skill gap
              analysis, and tailored roadmaps, Nirdeshika helps you plan and progress confidently in your career journey.
            </p>
            <div className="about__flex">
              <div className="about__card">
                <h4>1200+</h4>
                <p>Users Guided </p>
              </div>
              <div className="about__card">
                <h4>850+</h4>
                <p>Career Suggested</p>
              </div>
              <div className="about__card">
                <h4>300+</h4>
                <p>Courses Suggested</p>
              </div>
            </div>
            <a href="/about">
              <button className="btn">
                Read More <i className="ri-arrow-right-line"></i>
              </button>
            </a>
          </div>
          <div className="about__image">
            {/* Note: In React, if assets are in public, use /assets/... */}
            <img src="/assets/Aboutus1.jpg" alt="about" />
          </div>
        </div>
      </section>

      <section className="discover" id="discover">
        <div className="section__container discover__container">
          <h2 className="section__header">Why Nirdeshika?</h2>
          <p className="section__subheader">
            Discover, Decide, and Grow with Confidence
          </p>
          <div className="container">
            <div className="card">
              <img src="/assets/assistance.jpg" alt="Assistance Image" />
              <div className="icon">
                <span className="material-symbols-outlined">automation</span>
              </div>
              <h3>AI-Powered Personalization</h3>
              <p>Nirdeshika leverages the power of artificial intelligence to provide career recommendations tailored
                specifically to your skills, interests, and aspirations. It evolves with your journey, offering dynamic
                suggestions as you gain new experiences.
              </p>
            </div>
            <div className="card">
              <img src="/assets/analysis.jpg" alt="Analysis Image" />
              <div className="icon">
                <span className="material-symbols-outlined">monitoring</span>
              </div>
              <h3>Skill Gap & Progression Analysis</h3>
              <p>The platform analyzes your current abilities and highlights the skills needed to reach your desired career.
                It then guides you through suggesting relevant learning paths, certifications, and milestones for growth to
                fulfill dream.
              </p>
            </div>
            <div className="card">
              <img src="/assets/secure.jpg" alt="Secure Image" />
              <div className="icon">
                <span className="material-symbols-outlined">encrypted</span>
              </div>
              <h3>Secure & Scalable</h3>
              <p> Your data is protected with strong encryption and compliance with privacy standards. Nirdeshika is
                scalable across multiple domains and industries, making it a reliable solution for personalized career
                guidance in today’s rapidly changing job market.
              </p>
            </div>
            <div className="card">
              <img src="/assets/interactive.jpg" alt="Interactive Image" />
              <div className="icon">
                <span className="material-symbols-outlined">interactive_space</span>
              </div>
              <h3>Inclusive & User-Friendly Design</h3>
              <p> Designed for everyone—from students to professionals—Nirdeshika features a clean, intuitive interface with
                accessibility support for PWD. It ensures a smooth and inclusive experience regardless of background or
                stage of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="hero">
        <div className="section__container hero__container">
          <p>Nirdeshika.</p>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="section__container contact__container">
          <div className="contact__col">
            <h4>Contact Us </h4>
            <p>We always aim to reply within 24 hours.</p>
          </div>
          <div className="contact__col">
            <div className="contact__card">
              <span><i className="ri-phone-line"></i></span>
              <h4>Call us</h4>
              <h5>+91 9473****34</h5>
              <p>We are available now</p>
            </div>
          </div>
          <div className="contact__col">
            <div className="contact__card">
              <span><i className="ri-mail-line"></i></span>
              <h4>Send us an enquiry</h4>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
