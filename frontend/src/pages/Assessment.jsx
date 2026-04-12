import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Select from 'react-select';
import '../assets/css/assessment.css';
import { API_URL, PREDICTION_URL } from '../config';

const skillsList = [
  { value: 'Python', label: 'Python' },
  { value: 'Java', label: 'Java' },
  { value: 'C++', label: 'C++' },
  { value: 'JavaScript', label: 'JavaScript' },
  { value: 'Machine Learning', label: 'Machine Learning' },
  { value: 'Data Analysis', label: 'Data Analysis' },
  { value: 'Cloud Computing', label: 'Cloud Computing' },
  { value: 'UI/UX Design', label: 'UI/UX Design' },
  { value: 'SQL', label: 'SQL' },
  { value: 'Project Management', label: 'Project Management' }
];

const Assessment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    gender: '',
    education: '',
    skills: [],
    years_experience: '',
    experience_level: '',
    career_goals: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSkillsChange = (selectedOptions) => {
    setFormData({ ...formData, skills: selectedOptions.map(option => option.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${PREDICTION_URL}/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      setLoading(false);

      // Update assessment count locally or backend if needed
      const token = localStorage.getItem('token');
      if (token) {
        fetch(`${API_URL}/api/increment-assessment`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }).catch(err => console.error("Could not increment assessment count", err));
      }

      // Navigate to result
      navigate('/result', { state: { resultData: data } });
    } catch (err) {
      console.error(err);
      alert("Something went wrong with the ML prediction API. Ensure Flask is running on port 5050.");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="page-assessment">
        <Navbar />
        <div className="container">
          <h2>Career Path Assessment Form</h2>
          <form onSubmit={handleSubmit}>

            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" value={formData.name} onChange={handleInputChange} required />

            <label htmlFor="age">Age:</label>
            <input type="number" id="age" min="10" max="100" value={formData.age} onChange={handleInputChange} required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={formData.email} onChange={handleInputChange} required />

            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" pattern="[0-9]{10}" value={formData.phone} onChange={handleInputChange} required />

            <label htmlFor="gender">Gender:</label>
            <select id="gender" value={formData.gender} onChange={handleInputChange} required
              className="basic-multi-select"
              classNamePrefix="select">
              <option value="">Select</option>
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
              <option>Prefer not to say</option>
            </select>

            <label htmlFor="education">Highest Education:</label>
            <select id="education" value={formData.education} onChange={handleInputChange} required>
              <option value="">Select</option>
              <option>High School</option>
              <option>Bachelor's Degree</option>
              <option>Master's Degree</option>
              <option>PhD</option>
              <option>Diploma/Certificate</option>
            </select>

            <label htmlFor="skills">Skills:</label>
            <Select
              isMulti
              name="skills"
              options={skillsList}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={handleSkillsChange}
              placeholder="Select skills"
              required
            />

            <label htmlFor="years_experience">Years of Experience:</label>
            <input type="number" id="years_experience" min="0" max="50" value={formData.years_experience} onChange={handleInputChange} required />

            <label htmlFor="experience_level">Experience Level:</label>
            <select id="experience_level" value={formData.experience_level} onChange={handleInputChange} required>
              <option value="">Select</option>
              <option>Entry Level</option>
              <option>Mid Level</option>
              <option>Senior Level</option>
              <option>Director</option>
            </select>

            <label htmlFor="career_goals">Career Goals / Aspirations:</label>
            <textarea id="career_goals" rows="4" value={formData.career_goals} onChange={handleInputChange} required></textarea>

            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Assessment;
