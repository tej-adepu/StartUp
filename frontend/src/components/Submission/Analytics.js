import React from 'react';
import '../../styles/components/Analytics.css';

const Analytics = ({ stats }) => {
  return (
    <div className="analytics">
      <h3>📊 Your Idea Stats</h3>
      <div className="analytics-grid">
        <div className="analytics-box">
          <h4>{stats.total || 0}</h4>
          <p>Total Ideas</p>
        </div>
        <div className="analytics-box">
          <h4>{stats.high || 0}</h4>
          <p>High Viability</p>
        </div>
        <div className="analytics-box">
          <h4>{stats.moderate || 0}</h4>
          <p>Moderate Viability</p>
        </div>
        <div className="analytics-box">
          <h4>{stats.low || 0}</h4>
          <p>Low Viability</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
