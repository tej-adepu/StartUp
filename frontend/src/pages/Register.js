import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 for navigation
import "../styles/pages/Register.css";

const Register = () => {
  const navigate = useNavigate(); // 👈 hook for navigation

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        alert("Registration successful!");
        navigate("/login"); // 👈 redirect to login
      } else {
        alert(data.message || "Registration failed");
      }

    } catch (error) {
      console.error(error);
      alert("Server error. Try again.");
    }
  };

  return (
    <section className="auth-page">
      <h2>Register</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} required />
        <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
        <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
        <button className="btn" type="submit">Register</button>
        <p className="switch-text">Already have an account? <span onClick={() => navigate('/login')} className="link-btn">Login</span></p>
      </form>
    </section>
  );
};

export default Register;
