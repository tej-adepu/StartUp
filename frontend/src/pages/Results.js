import React from 'react';
import ScoreCard from '../components/results/ScoreCard';
import ScoreBreakdown from '../components/results/ScoreBreakdown';
import Suggestions from '../components/results/Suggestions';
import ViabilityMeter from '../components/results/ViabilityMeter';
import "../styles/pages/Results.css";

const mockResult = {
  overallScore: 68,
  breakdown: {
    technical: 70,
    originality: 60,
    market: 75,
    team: 65,
    businessModel: 70,
  },
  suggestions: [
    'Clarify revenue model in more detail.',
    'Strengthen value proposition against competitors.',
    'Improve technical roadmap.',
  ],
};

const Results = () => (
  <section className="page">
    <h2>Results</h2>
    <ScoreCard overallScore={mockResult.overallScore} />
    <ViabilityMeter percentage={mockResult.overallScore} />
    <ScoreBreakdown breakdown={mockResult.breakdown} />
    <Suggestions suggestions={mockResult.suggestions} />
  </section>
);

export default Results;
