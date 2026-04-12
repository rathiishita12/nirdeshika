import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/login.css';
import { auth } from '../firebase';
import { API_URL } from '../config';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// Note: If you want to use Firebase Google Auth, you should configure standard firebase imports here.
// Doing standard email/pass login for now as per your original JS flow.

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        document.cookie = `token=${data.token}; path=/; max-age=3600`;
        alert("Login successful!");
        navigate('/');
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Connection error. Is the server running?");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const response = await fetch(`${API_URL}/api/google-login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email, username: user.displayName })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        document.cookie = `token=${data.token}; path=/; max-age=3600`;
        alert(`Welcome ${user.displayName || user.email}`);
        navigate('/');
      } else {
        alert(data.message || "Google Login failed on server");
      }
    } catch (error) {
      console.error(error);
      alert("Google Sign-In failed");
    }
  };

  return (
    <div className="page-login">
      <div className="auth-split">
        <div className="left-panel">
          <img src="/logo.png" width="400px" alt="logo" />
          <p>Your personalized pathway to success. Discover the right career path, gain skills, and reach your goals.</p>
        </div>

        <div className="right-panel">
          <div className="login-card">
            <h2>Login to Nirdeshika</h2>

            <form id="loginForm" onSubmit={handleLogin}>
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

              <button id="loginBtn" type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <div className="divider">
              <span>OR</span>
            </div>

            <button id="googleBtn" className="google-btn" onClick={handleGoogleLogin} type="button">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" />
              Sign up with Google
            </button>

            <div className="signup-section">
              <p className="signup-text">Don't have an account?</p>
              <Link to="/signup" className="signup-btn-link">Create an Account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
