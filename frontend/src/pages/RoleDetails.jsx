import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import rolesData from '../data/rolesData.json';
import '../assets/css/roleDetails.css';

const RoleDetails = () => {
  const { id } = useParams();
  const [role, setRole] = useState(null);

  useEffect(() => {
    // Some basic manipulation since KnowMore might have 'id.html' inside the object mapping
    const cleanId = id.replace('.html', '');
    if (rolesData[cleanId]) {
      setRole(rolesData[cleanId]);
    }
  }, [id]);

  if (!role) {
    return (
      <>
        <div className='page-roleDetails'>
          <Navbar />
          <div className="container text-center my-5 py-5" style={{ minHeight: '60vh' }}>
            <h2 className="display-4 text-muted">Role not found</h2>
            <Link to="/know-more" className="btn btn-primary mt-4 px-4 py-2">Back to Roles</Link>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <div className='page-roleDetails'>
        <Navbar />
        <div className="header-section">
          <h2 id="navigation">
            <Link to="/">Home</Link>&gt;
            <Link to="/know-more">Knowledge Network Page</Link>&gt;
            <span>{role.title}</span>
          </h2>
          <h1>Role Details</h1>
        </div>

        <div className="container mt-4">

          <div className="card p-5 shadow-lg text-dark border-0 rounded-4 bg-white" style={{ transition: 'transform 0.3s ease-in-out' }}>
            <h1 className="text-center mb-5 display-5 fw-bold">{role.title}</h1>

            {role.description && (
              <section className="mb-4">
                <h3 className="fw-semibold border-bottom pb-2 fs-4 text-dark">Job Description</h3>
                <p className="mt-3 text-secondary fs-5" style={{ lineHeight: '1.6' }}>{role.description}</p>
              </section>
            )}

            {role.skills && role.skills.length > 0 && (
              <section className="mb-4">
                <h3 className="fw-semibold border-bottom pb-2 fs-4 text-dark">Skills Required</h3>
                <ul className="mt-3 text-secondary fs-5">
                  {role.skills.map((skill, index) => <li key={index} className="mb-1">{skill}</li>)}
                </ul>
              </section>
            )}

            {role.education && (
              <section className="mb-4">
                <h3 className="fw-semibold border-bottom pb-2 fs-4 text-dark">Educational Requirements</h3>
                <p className="mt-3 text-secondary fs-5" style={{ lineHeight: '1.6' }}>{role.education}</p>
              </section>
            )}

            {role.duties && role.duties.length > 0 && (
              <section className="mb-4">
                <h3 className="fw-semibold border-bottom pb-2 fs-4 text-dark">Duties & Responsibilities</h3>
                <ul className="mt-3 text-secondary fs-5">
                  {role.duties.map((duty, index) => <li key={index} className="mb-1">{duty}</li>)}
                </ul>
              </section>
            )}

            {role.salary && (
              <section className="mb-4">
                <h3 className="fw-semibold border-bottom pb-2 fs-4 text-dark">Average Salary</h3>
                <p className="mt-3 text-secondary fs-5 fw-medium">{role.salary}</p>
              </section>
            )}

            {role.organizations && role.organizations.length > 0 && (
              <section className="mb-4">
                <h3 className="fw-semibold border-bottom pb-2 fs-4 text-dark">Organizations Offering This Role</h3>
                <ul className="mt-3 text-secondary fs-5">
                  {role.organizations.map((org, index) => <li key={index} className="mb-1">{org}</li>)}
                </ul>
              </section>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default RoleDetails;
