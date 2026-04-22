import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/css/about.css';

const About = () => {
  useEffect(() => {
    // Scroll-triggered animations identical to original HTML script
    const sections = document.querySelectorAll('.image-text-section');

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Navbar />

      <div className="page-about">
        <div className="about-page" style={{ marginTop: '100px' }}>
          <h1>About Us</h1>

          <section id="mission" className="image-text-section">
            <div className="text">
              <h2>Our Mission</h2>
              <p>Our mission is to provide a bridge between the aspirations of individuals and their career goals by offering intelligent, data-backed career guidance. We aim to empower users with the right resources and insights to make informed career decisions. By leveraging machine learning and personalized assessments, we ensure each user receives tailored support suited to their unique journey. We are committed to democratizing access to quality career advice, regardless of background or location. Our platform is designed to grow with the user, adapting to their evolving goals and industry trends.</p>
            </div>
            <img src="/assets/mission.jpg" alt="Mission Illustration" />
          </section>

          <section id="how-it-works" className="image-text-section">
            <div className="text">
              <h2>How It Works</h2>
              <p>Our platform uses advanced machine learning algorithms to assess users' skills, interests, and preferences, providing them with tailored career paths, job opportunities, and learning resources. We strive to make career decisions easier, more intuitive, and aligned with the ever-evolving job market.</p>
            </div>
            <img src="/assets/how_it_works.jpg" alt="How it Works" />
          </section>

          <section id="user-guide" className="image-text-section">
            <div className="text">
              <h2>User Guide</h2>
              <p>Follow these simple steps to make the most out of our Career Guidance Platform:</p>
              <ul>
                <li><strong>Step 1:</strong> Sign up or log in to your account.</li>
                <li><strong>Step 2:</strong> Complete your profile by entering basic details, academic background, and interests.</li>
                <li><strong>Step 3:</strong> Take the career assessment quiz to help the platform understand your strengths and preferences.</li>
                <li><strong>Step 4:</strong> Explore personalized career suggestions based on your profile and quiz results.</li>
                <li><strong>Step 5:</strong> Access recommended courses, skills, and resources for your chosen career path.</li>
                <li><strong>Step 6:</strong> Use the platform’s tools to build your resume, prepare for interviews, and find job/internship opportunities.</li>
              </ul>
            </div>
            <img src="/assets/user-guide.jpg" alt="User Guide" />
          </section>

          <section id="vision" className="image-text-section">
            <div className="text">
              <h2>Our Vision</h2>
              <p>We envision expanding our platform to include personalized mentorship, internships, and live industry updates to help users stay ahead in their careers. Our goal is to continue evolving the platform to meet the dynamic needs of career seekers. We aim to foster a community-driven ecosystem that connects learners with experts across various domains. By embracing continuous innovation, we strive to become a one-stop destination for holistic career development.</p>
            </div>
            <img src="/assets/vision.jpg" alt="Vision" />
          </section>

          <section id="meet-our-team" className="image-text-section">
            <div className="text">
              <h2>Meet Our Team</h2>
              <p>We are a passionate team of pre-final year Computer Science students from Galgotias College of Engineering & Technology, driven to solve real-world problems through technology. Noticing the struggles many face in making career decisions, we set out to build a smart, user-friendly platform for personalized guidance.</p>
              <p>With our combined interests in AI, data science, and design, this project is more than just an academic effort — it's our vision to empower individuals with data-backed insights and opportunities. Whether you're a student or a professional, our goal is to help you navigate your career journey with confidence.</p>
            </div>
            <div className="team-container">
              <div className="team-member">
                <img src="/assets/t1.jpg" alt="Team Member 1" />
                <p className="member-name">Nishant Kumar Raj</p>
              </div>
              <div className="team-member">
                <img src="/assets/t2.jpg" alt="Team Member 2" />
                <p className="member-name">Ishita Rathi</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
