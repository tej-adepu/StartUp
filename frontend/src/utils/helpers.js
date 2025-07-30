// General app helper utilities

export const calculateWeightedScore = (scores, weights) => {
  const total = Object.entries(scores).reduce((sum, [key, value]) => {
    const weight = weights[key] || 0;
    return sum + value * weight;
  }, 0);
  return Number(total.toFixed(2));
};

export const getViabilityLevel = (score) => {
  if (score >= 75) return 'High';
  if (score >= 45) return 'Moderate';
  return 'Low';
};

export const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
