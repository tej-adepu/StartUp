import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/pages/Dashboard.css";

const Dashboard = () => {
  const [ideas, setIdeas] = useState([]);
  const navigate = useNavigate();

  // Fetch last 2 ideas when Dashboard mounts
  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const res = await fetch("/api/ideas", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}` // if auth is required
          }
        });
        if (!res.ok) throw new Error("Failed to fetch ideas");

        const data = await res.json();

        // Sort by created date descending and take last 2
        const sorted = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setIdeas(sorted.slice(0, 2));
      } catch (err) {
        console.error(err);
      }
    };

    fetchIdeas();
  }, []);

  return (
    <section className="dashboard">
      {/* Hero Section */}
      <div className="home-content">
        <h1>Validate Your Startup Idea Instantly</h1>
        <p>
          Make smarter choices with AI-powered feasibility checks on your ideas.
        </p>
        <Link to="/validate" className="btn primary">
          Start Validating
        </Link>
      </div>

      {/* Recent Ideas Section */}
      <div className="recent-ideas">
        <div className="section-header">
          <h2>Recent Ideas</h2>
          <button
            className="btn secondary"
            onClick={() => navigate("/ideas")}
          >
            Show All
          </button>
        </div>

        {ideas.length === 0 ? (
          <p className="empty-text">No ideas found yet.</p>
        ) : (
          <div className="ideas-grid">
            {ideas.map((idea) => (
              <div
                key={idea._id}
                className="idea-card"
                onClick={() => navigate(`/idea/${idea._id}`)}
              >
                <h3>{idea.title}</h3>
                <p>
                  {idea.problem.length > 100
                    ? idea.problem.slice(0, 100) + "..."
                    : idea.problem}
                </p>
                <span className="idea-date">
                  {new Date(idea.createdAt).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
