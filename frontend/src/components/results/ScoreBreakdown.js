import React from 'react';
import '../../styles/components/ScoreBreakdown.css';

const ScoreBreakdown = ({ breakdown }) => {
  return (
    <div className="breakdown">
      <h3>Score Breakdown</h3>
      <ul>
        {Object.entries(breakdown).map(([category, score]) => (
          <li key={category}>
            <span className="category">{category}</span>
            <span className="score">{score}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScoreBreakdown;
