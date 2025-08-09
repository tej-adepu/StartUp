// src/components/FormValidation.js

const validateIdeaFields = (fields) => {
  const errors = {};

  if (!fields.title || fields.title.trim().length < 5) {
    errors.title = "Please provide a descriptive title (min 5 characters).";
  }

  if (!fields.problem || fields.problem.trim().length < 15) {
    errors.problem = "Describe the problem (at least 15 characters).";
  }

  if (!fields.solution || fields.solution.trim().length < 15) {
    errors.solution = "Describe the solution (at least 15 characters).";
  }

  if (!fields.team || fields.team.trim().length < 5) {
    errors.team = "Team details required.";
  }

  if (!fields.targetMarket || fields.targetMarket.trim().length < 10) {
    errors.targetMarket = "Describe the target market (at least 10 characters).";
  }

  if (!fields.businessModel || fields.businessModel.trim().length < 10) {
    errors.businessModel = "Briefly outline your business model.";
  }

  return errors;
};

export default validateIdeaFields;
