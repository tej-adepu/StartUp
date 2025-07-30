// Form validation logic usable across components

export const validateIdeaForm = (fields) => {
  const errors = {};

  if (!fields.problem || fields.problem.trim().length < 15)
    errors.problem = 'Problem statement must be at least 15 characters.';

  if (!fields.solution || fields.solution.trim().length < 15)
    errors.solution = 'Please describe your solution clearly.';

  if (!fields.market || fields.market.trim().length < 10)
    errors.market = 'Target market should be specified.';

  if (!fields.team || fields.team.trim().length < 5)
    errors.team = 'Please provide information about your team.';

  if (!fields.businessModel || fields.businessModel.trim().length < 10)
    errors.businessModel = 'Please describe your revenue model.';

  return errors;
};

export const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const validatePassword = (password) => password.length >= 6;
