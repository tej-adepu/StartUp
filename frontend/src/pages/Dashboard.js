import React, { useState, useEffect } from 'react';
import IdeaList from '../components/dashboard/IdeaList';
import Analytics from '../components/dashboard/Analytics';
import "../styles/pages/Dashboard.css";
const Dashboard = () => {
  const [ideas, setIdeas] = useState([]);
  const [stats, setStats] = useState({});

  useEffect(() => {
    const mockIdeas = [
      {
        _id: 'a1',
        title: 'Collaborative Study Rooms',
        problem: 'Students struggle to collaborate across online platforms',
        score: 82,
        viabilityLevel: 'High',
      },
      {
        _id: 'a2',
        title: 'Remote Fitness Guide',
        problem: 'Home workouts lack structure and motivation',
        score: 60,
        viabilityLevel: 'Moderate',
      },
    ];

    setIdeas(mockIdeas);
    setStats({ total: 2, high: 1, moderate: 1, low: 0 });
  }, []);

  const handleView = (idea) => {
    alert(`View details: ${idea.title}`);
  };

  return (
    <section className="page">
      <h2>Your Dashboard</h2>
      <Analytics stats={stats} />
      <IdeaList ideas={ideas} onView={handleView} />
    </section>
  );
};

export default Dashboard;
