// Formatters for displaying data across UI

export const formatDate = (dateString) => {
  const d = new Date(dateString);
  return d.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const formatPercentage = (num) => `${Math.round(num)}%`;

export const truncateText = (text, maxLength = 100) =>
  text.length <= maxLength ? text : text.slice(0, maxLength) + '...';
