import React, { useState, useEffect } from 'react';
import IdeaList from '../components/Submission/IdeaList';
import Analytics from '../components/Submission/Analytics';
import "../styles/pages/Submit.css";

const Submit = () => {
  const [ideas, setIdeas] = useState([]);
  const [stats, setStats] = useState({});

  useEffect(() => {
    // Mock data with feedback & suggestions from AI
    const mockIdeas = [
      {
        _id: 'a1',
        title: 'Collaborative Study Rooms',
        problem: 'Students struggle to collaborate across online platforms',
        score: 82,
        viabilityLevel: 'High',
        feedback: "Strengthen your monetization model and add integrations with popular school platforms.",
        suggestions: "Offer cross-campus networking and gamified study sessions."
      },
      {
        _id: 'a2',
        title: 'Remote Fitness Guide',
        problem: 'Home workouts lack structure and motivation',
        score: 60,
        viabilityLevel: 'Moderate',
        feedback: "Your target market is broad, focus on a niche (e.g., busy professionals) for better adoption.",
        suggestions: "Add live workouts with coaches and AI-personalized exercise plans."
      },
    ];

    setIdeas(mockIdeas);
    setStats({ total: 2, high: 1, moderate: 1, low: 0 });
  }, []);

  // Handler for viewing feedback
  const handleViewFeedback = (idea) => {
    alert(`💬 Feedback for "${idea.title}":\n\n${idea.feedback}`);
  };

  // Handler for viewing suggestions
  const handleViewSuggestions = (idea) => {
    alert(`💡 Suggestions for "${idea.title}":\n\n${idea.suggestions}`);
  };

  return (
    <section className="page">
      <Analytics stats={stats} />

      {/* Reuse IdeaList but pass extra actions */}
      <IdeaList
        ideas={ideas}
        onViewFeedback={handleViewFeedback}
        onViewSuggestions={handleViewSuggestions}
      />
    </section>
  );
};

export default Submit;
