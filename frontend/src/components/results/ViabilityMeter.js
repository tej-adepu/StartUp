import React from 'react';
import '../../styles/components/ViabilityMeter.css';

const ViabilityMeter = ({ percentage }) => {
  return (
    <div className="viability-meter">
      <label>Viability Meter</label>
      <div className="meter-bar-container">
        <div
          className="meter-bar"
          style={{ width: `${percentage}%`, backgroundColor: getColor(percentage) }}
        ></div>
      </div>
      <div className="meter-text">{percentage}%</div>
    </div>
  );
};

const getColor = (percent) => {
  if (percent >= 75) return '#28a745';
  if (percent >= 45) return '#ffc107';
  return '#dc3545';
};

export default ViabilityMeter;
