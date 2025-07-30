import React from 'react';
import '../../styles/components/ScoreCard.css';

const ScoreCard = ({ overallScore }) => {
  const getViability = (score) => {
    if (score >= 75) return 'High';
    if (score >= 45) return 'Moderate';
    return 'Low';
  };

  return (
    <div className="score-card">
      <h2>Overall Score</h2>
      <div className="score-value">{overallScore}%</div>
      <div className={`viability-tag ${getViability(overallScore).toLowerCase()}`}>
        {getViability(overallScore)} Viability
      </div>
    </div>
  );
};

export default ScoreCard;
