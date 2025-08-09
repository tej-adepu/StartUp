import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ⬅️ Added for navigation
import FormSection from "./FormSection";
import FormInput from "./FormInput";
import validateIdeaFields from "./FormValidation";
import "../../styles/components/IdeaForm.css";

const IdeaForm = ({ onSubmit }) => {
  const navigate = useNavigate();

  const [fields, setFields] = useState({
    title: "",
    problem: "",
    solution: "",
    team: "",
    targetMarket: "",
    businessModel: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
    setErrors(validateIdeaFields(fields));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateIdeaFields(fields);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitting(true);
      try {
        // Optional: Save to backend
        if (onSubmit) {
          await onSubmit(fields);
        }

        // Redirect to submit page and pass idea data
        navigate("/submit", { state: { ideaData: fields } });

      } catch (err) {
        console.error("Error submitting idea:", err);
      } finally {
        setSubmitting(false);
      }
    }
  };

  return (
    <form className="form idea-form" onSubmit={handleSubmit} autoComplete="off">

      {/* Startup Title */}
      <FormSection title="Startup Title">
        <FormInput
          name="title"
          value={fields.title}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.title && errors.title}
          placeholder="Enter a catchy startup idea title"
        />
      </FormSection>

      {/* Problem Statement */}
      <FormSection title="Problem Statement">
        <FormInput
          name="problem"
          type="textarea"
          value={fields.problem}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.problem && errors.problem}
          placeholder="What real-world problem are you solving?"
        />
      </FormSection>

      {/* Solution */}
      <FormSection title="Solution">
        <FormInput
          name="solution"
          type="textarea"
          value={fields.solution}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.solution && errors.solution}
          placeholder="What is your unique solution?"
        />
      </FormSection>

      {/* Team */}
      <FormSection title="Team">
        <FormInput
          name="team"
          value={fields.team}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.team && errors.team}
          placeholder="Who is building this? (skills, roles, etc.)"
        />
      </FormSection>

      {/* Target Market */}
      <FormSection title="Target Market">
        <FormInput
          name="targetMarket"
          type="textarea"
          value={fields.targetMarket}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.targetMarket && errors.targetMarket}
          placeholder="Describe your target audience and market size"
        />
      </FormSection>

      {/* Business Model */}
      <FormSection title="Business Model">
        <FormInput
          name="businessModel"
          type="textarea"
          value={fields.businessModel}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.businessModel && errors.businessModel}
          placeholder="How will you generate revenue?"
        />
      </FormSection>

      {/* Submit */}
      <div className="form-actions">
        <button className="btn primary" type="submit" disabled={submitting}>
          {submitting ? "Validating..." : "Submit Idea"}
        </button>
      </div>
    </form>
  );
};

export default IdeaForm;
