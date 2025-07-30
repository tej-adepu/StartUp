import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/pages/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || 'Login failed');
        return;
      }

      // ✅ Optionally store token or user info in localStorage
      localStorage.setItem('token', data.token);

      // ✅ Navigate to home page ("/")
      navigate('/');
    } catch (err) {
      console.error('Login Error:', err);
      alert('An error occurred during login');
    }
  };

  const handleSignupRedirect = () => {
    navigate('/register');
  };

  return (
    <section className="auth-page">
      <h2>Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button className="btn login-btn" type="submit">Login</button>
        <button
          type="button"
          className="btn signup-btn"
          onClick={handleSignupRedirect}
        >
          Sign Up
        </button>
      </form>
    </section>
  );
};

export default Login;
