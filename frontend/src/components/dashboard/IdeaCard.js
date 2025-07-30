import React from 'react';
import '../../styles/components/IdeaCard.css';

const IdeaCard = ({ idea, onView }) => {
  return (
    <div className="idea-card">
      <h3>{idea.title || idea.problem.slice(0, 50) + '...'}</h3>
      <p><strong>Viability:</strong> {idea.viabilityLevel}</p>
      <p><strong>Score:</strong> {idea.score}%</p>
      <button className="btn" onClick={() => onView(idea)}>View Details</button>
    </div>
  );
};

export default IdeaCard;
