import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/signup.css';
import { API_URL } from '../config';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState('');
  const [verifying, setVerifying] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!fullName || !email || !password) {
      alert("Please enter all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      const data = await res.json();
      if (data.success) {
        setShowOtpModal(true);
      } else if (res.status === 400 && data.message && data.message.includes("already exists")) {
        alert("User already exists! Navigating to login page.");
        navigate('/login');
      } else {
        alert(data.message || "Failed to send OTP. Please try again.");
      }
    } catch (err) {
      console.error("Error sending OTP:", err);
      alert("Connection error. Is the server running?");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      alert("Please enter the OTP.");
      return;
    }

    setVerifying(true);

    try {
      const verifyRes = await fetch(`${API_URL}/api/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp })
      });

      const verifyData = await verifyRes.json();
      if (verifyData.verified) {
        setShowOtpModal(false);
        alert("Email verified successfully! 🎉");

        const regRes = await fetch(`${API_URL}/api/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: fullName, email, password })
        });
        const regData = await regRes.json();

        if (regRes.ok) {
          alert("Registration complete! You can now log in.");
          navigate('/login');
        } else {
          alert("Registration Error: " + regData.message);
        }
      } else {
        alert("Incorrect OTP. Try again.");
      }
    } catch (error) {
      console.error("Verification error:", error);
      alert("Connection error. Is the server running?");
    } finally {
      setVerifying(false);
    }
  };

  return (
    <div className="page-signup">
      <div className="auth-split">
        <div className="left-panel">
          <img src="/logo.png" width="400px" alt="logo" />
          <p>Your personalized pathway to success. Discover the right career path, gain skills, and reach your goals.</p>
        </div>

        <div className="right-panel">
          <div className="login-card">
            <h2>Sign Up To Nirdeshika</h2>

            <form id="signupForm" onSubmit={handleSignup}>
              <input
                type="text"
                placeholder="Full Name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button id="signUpBtn" type="submit" disabled={loading}>
                {loading ? "Sending OTP..." : "Sign Up"}
              </button>
            </form>

            <div className="login-section">
              <p className="login-text">Already have an account?</p>
              <Link to="/login" className="login-btn-link">Login</Link>
            </div>
          </div>
        </div>
      </div>

      {showOtpModal && (
        <div id="otpModal" className="otp-modal" style={{ display: 'flex' }}>
          <div className="otp-modal-content">
            <span className="otp-close-btn" onClick={() => setShowOtpModal(false)}>&times;</span>
            <h3>Verify Your Email</h3>
            <p>Enter the OTP sent to your email</p>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button id="verifyBtn" onClick={handleVerifyOtp} disabled={verifying}>
              {verifying ? "Verifying..." : "Verify"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
