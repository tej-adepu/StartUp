import React from 'react';
import '../../styles/components/IdeaList.css';

const IdeaList = ({ ideas, onViewFeedback, onViewSuggestions }) => {
  return (
    <div className="idea-list">
      {ideas.length === 0 ? (
        <p>No ideas submitted yet.</p>
      ) : (
        ideas.map((idea) => (
          <div key={idea._id} className="idea-card">
            <h3>{idea.title}</h3>
            <p className="idea-problem">{idea.problem}</p>
            <p>
              <strong>Score:</strong> {idea.score} | <strong>Viability:</strong> {idea.viabilityLevel}
            </p>

            {/* Action Buttons */}
            <div className="card-actions">
              <button
                className="btn secondary"
                onClick={() => onViewFeedback(idea)}
              >
                View Feedback
              </button>
              <button
                className="btn primary"
                onClick={() => onViewSuggestions(idea)}
              >
                View Suggestions
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default IdeaList;
