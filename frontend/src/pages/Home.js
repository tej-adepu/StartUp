import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/pages/Home.css";

const Home = () => (
  <section className="home-page">
    <div className="home-content">
      <h1>Validate Your Startup Idea Instantly</h1>
      <p>Make smarter choices with AI-powered feasibility checks on your ideas.</p>
      <Link to="/validate" className="btn">
        Start Validating
      </Link>
    </div>
  </section>
);

export default Home;
