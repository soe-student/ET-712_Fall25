import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import '../styles/App.css';
import '../styles/login.css';

function Login() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      localStorage.setItem('user', JSON.stringify({
        name: formData.name,
        email: formData.email
      }));
      localStorage.setItem('isLoggedIn', 'true');
      alert('Account created successfully!');
      // Redirect to cart if they came from checkout, otherwise home
      navigate('/cart');
    } else {
      localStorage.setItem('isLoggedIn', 'true');
      alert('Logged in successfully!');
      // Redirect to cart if they came from checkout, otherwise home
      navigate('/cart');
    }
  };

  return (
    <div className="App">
      <Navbar />
      
      <main className="main-content">
        <section className="login-section">
          <div className="login-container">
            <div className="login-card">
              <h1 className="login-title">
                {isSignUp ? 'Create Account' : 'Welcome Back'}
              </h1>
              <p className="login-subtitle">
                {isSignUp 
                  ? 'Sign up to start purchasing music' 
                  : 'Log in to your account'}
              </p>

              <form className="login-form" onSubmit={handleSubmit}>
                {isSignUp && (
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    required
                  />
                </div>

                {isSignUp && (
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm your password"
                      required
                    />
                  </div>
                )}

                <button type="submit" className="login-submit-btn">
                  {isSignUp ? 'Sign Up' : 'Log In'}
                </button>
              </form>

              <div className="login-toggle">
                {isSignUp ? (
                  <p>
                    Already have an account?{' '}
                    <button 
                      className="toggle-btn" 
                      onClick={() => setIsSignUp(false)}
                    >
                      Log In
                    </button>
                  </p>
                ) : (
                  <p>
                    Don't have an account?{' '}
                    <button 
                      className="toggle-btn" 
                      onClick={() => setIsSignUp(true)}
                    >
                      Sign Up
                    </button>
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Melody Music. All rights reserved. By Soe Kaythi</p>
      </footer>
    </div>
  );
}

export default Login;