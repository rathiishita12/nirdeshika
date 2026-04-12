import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/css/result.css';
import { API_URL } from '../config';

const Result = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [jobs, setJobs] = useState({});
    const [loading, setLoading] = useState(true);

    const resultData = location.state?.resultData;

    useEffect(() => {
        if (!resultData) {
            navigate('/assessment');
            return;
        }

        const fetchJobs = async () => {
            const categories = [resultData.recommendation, ...resultData.alternatives].filter(Boolean);
            const jobsData = {};

            for (const category of categories) {
                try {
                    const response = await fetch(`${API_URL}/api/jobs?category=${encodeURIComponent(category)}`);
                    const data = await response.json();
                    jobsData[category] = data.jobs;
                } catch (error) {
                    console.error("Failed to fetch jobs for", category, error);
                    jobsData[category] = [];
                }
            }

            setJobs(jobsData);
            setLoading(false);
        };

        fetchJobs();
    }, [resultData, navigate]);

    if (!resultData) return null;

    return (
        <>
            <div className='page-result'>
                <Navbar />
                <div>
                    <div className="container">
                        <div className="shadow-lg border-0 rounded-4 p-5">

                            <div className="text-center mb-5">
                                <i className="ri-award-fill text-warning mb-3 d-inline-block" style={{ fontSize: '4rem', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}></i>
                                <h2 className="display-5 fw-bold" style={{ color: '#1a2b4c' }}>Your Perfect Career Match</h2>
                                <p className="text-muted fs-5 mt-2">Based on your assessment, here is our top recommendation for your future:</p>
                            </div>

                            <div className="text-center rounded-4 py-4 mb-5" style={{ background: 'linear-gradient(135deg, #0eb582 0%, #118a66 100%)', color: 'white', position: 'relative', overflow: 'hidden' }}>
                                <h3 className="display-4 fw-bold mb-0" style={{ position: 'relative', zIndex: 2 }}>{resultData.recommendation}</h3>
                                <span className="material-symbols-outlined" style={{ position: 'absolute', right: '-20px', top: '-10px', fontSize: '150px', opacity: 0.1, zIndex: 1 }}>stars</span>
                            </div>

                            {resultData.alternatives && resultData.alternatives.length > 0 && (
                                <div className="mb-5 p-4 rounded-4" style={{ backgroundColor: '#f0f5f3' }}>
                                    <h4 className="fw-semibold mb-3" style={{ color: '#0b825c' }}>Other strong matches to consider:</h4>
                                    <ul className="list-unstyled fs-5 mb-0">
                                        {resultData.alternatives.map((alt, idx) => (
                                            <li key={idx} className="mb-2 d-flex align-items-center">
                                                <i className="ri-checkbox-circle-line me-3" style={{ color: '#0eb582', fontSize: '1.2rem' }}></i>
                                                <span className="text-dark fw-medium">{alt}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="jobs-section mt-5">
                                <h3 className="fw-bold mb-4 border-bottom pb-3" style={{ color: '#1a2b4c' }}>
                                    <i className="ri-briefcase-4-fill me-2" style={{ color: '#0eb582' }}></i>
                                    Live Job Opportunities by Role
                                </h3>

                                {loading ? (
                                    <div className="text-center py-5">
                                        <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
                                            <span className="visually-hidden">Loading jobs...</span>
                                        </div>
                                        <p className="mt-3 text-muted fs-5">Fetching live remote jobs worldwide...</p>
                                    </div>
                                ) : (
                                    Object.keys(jobs).map(category => (
                                        jobs[category] && jobs[category].length > 0 ? (
                                            <div key={category} className="mb-5">
                                                <h4 className="fw-semibold mb-3 text-secondary">{category}</h4>
                                                <div className="row g-4">
                                                    {jobs[category].map((job, idx) => (
                                                        <div key={idx} className="col-md-6">
                                                            <div className="card h-100 border-0 shadow-sm rounded-3" style={{ backgroundColor: '#fff', borderLeft: '4px solid #0eb582 !important' }}>
                                                                <div className="card-body p-4">
                                                                    <h5 className="card-title fw-bold text-dark text-truncate" title={job.title}>{job.title}</h5>
                                                                    <p className="card-text text-muted mb-2"><i className="ri-building-4-line me-1"></i> {job.company}</p>
                                                                    <p className="card-text text-secondary mb-4 small">
                                                                        <i className="ri-map-pin-line me-1"></i> {job.location}
                                                                        {job.remote && <span className="badge bg-success ms-2 bg-opacity-75">Remote</span>}
                                                                    </p>
                                                                    <a href={job.url} target="_blank" rel="noreferrer" className="btn btn-outline-primary w-100 fw-medium">View & Apply</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : null
                                    ))
                                )}
                            </div>

                            <div className="d-flex justify-content-between mt-5 pt-4 border-top">
                                <button onClick={() => navigate('/assessment')} className="btn btn-light border px-4 py-2 fs-5 text-secondary fw-medium">
                                    <i className="ri-refresh-line me-2"></i> Retake Assessment
                                </button>
                                <button onClick={() => navigate('/profile')} className="btn btn-primary px-4 py-2 fs-5 fw-medium" style={{ background: '#0eb582', border: 'none' }}>
                                    Back to Dashboard <i className="ri-arrow-right-line ms-2"></i>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Result;
