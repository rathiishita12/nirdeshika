import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/css/profile.css';
import { API_URL } from '../config';

const Profile = () => {
    const [user, setUser] = useState({ username: 'Loading...', email: '', assessment_count: 0 });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                navigate('/login');
                return;
            }

            // Sync token to cookies so port 5050 Assessment can read it
            document.cookie = `token=${token}; path=/; max-age=3600`;

            try {
                const response = await fetch(`${API_URL}/api/dashboard`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    setUser({
                        username: data.user.username,
                        email: data.user.email,
                        assessment_count: data.user.assessment_count || 0
                    });
                } else {
                    alert("Session expired. Please log in again.");
                    localStorage.removeItem("token");
                    navigate('/login');
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
                alert("Connection error fetching profile details.");
                setUser({ username: "Error loading profile", email: "", assessment_count: 0 });
            }
        };

        fetchProfile();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        navigate('/login');
    };

    return (
        <div className="page-profile">
            <Navbar />
            <div className="profile-wrap">
                <div className="profile-container">
                    <header className="profile-header">
                        <h2>Welcome to Your Dashboard, <span id="profileUsername">{user.username}</span>!</h2>
                        <p id="profileEmail">{user.email}</p>
                    </header>

                    <main className="profile-main">
                        <section className="stats-section">
                            <h3>Your Activity</h3>
                            <div className="stats-grid">
                                <div className="stat-box">
                                    <h4>{user.assessment_count}</h4>
                                    <p>Assessments Completed</p>
                                </div>
                            </div>
                        </section>

                        <section className="actions-section">
                            <h3>Quick Actions</h3>
                            <div className="actions-container">
                                <button className="action-btn" onClick={() => navigate('/assessment')}>Take New Assessment</button>
                                <button className="action-btn" onClick={() => navigate('/courses')}>Explore Courses</button>
                                <button className="action-btn" id="logoutBtn" onClick={handleLogout}>Log Out</button>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;
