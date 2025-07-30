import React from 'react';
import '../../styles/components/Suggestions.css';

const Suggestions = ({ suggestions }) => {
  return (
    <div className="suggestions">
      <h3>Improvement Suggestions</h3>
      <ul>
        {suggestions.length > 0 ? (
          suggestions.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))
        ) : (
          <li>No major improvements needed. Great job!</li>
        )}
      </ul>
    </div>
  );
};

export default Suggestions;
