import React, { useState } from "react";
import FormSection from "./FormSection";
import FormInput from "./FormInput";
import validateIdeaFields from "./FormValidation";
import "../../styles/components/IdeaForm.css"; // Or your central CSS

const IdeaForm = ({ onSubmit }) => {
  const [fields, setFields] = useState({
    problem: "",
    solution: "",
    market: "",
    team: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateIdeaFields(fields);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitting(true);
      onSubmit && onSubmit(fields);
      setSubmitting(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit} autoComplete="off">
      <FormSection title="Problem">
        <FormInput
          label="Problem"
          name="problem"
          type="textarea"
          value={fields.problem}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.problem && errors.problem}
          placeholder="What real-world problem are you solving?"
        />
      </FormSection>

      <FormSection title="Solution">
        <FormInput
          label="Solution"
          name="solution"
          type="textarea"
          value={fields.solution}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.solution && errors.solution}
          placeholder="What is your unique solution?"
        />
      </FormSection>

      <FormSection title="Market">
        <FormInput
          label="Market"
          name="market"
          type="textarea"
          value={fields.market}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.market && errors.market}
          placeholder="Describe your target market"
        />
      </FormSection>

      <FormSection title="Team">
        <FormInput
          label="Team"
          name="team"
          value={fields.team}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.team && errors.team}
          placeholder="Who is building this? (skills, roles, etc.)"
        />
      </FormSection>

      <FormSection title="Business Model">
        <FormInput
          label="Business Model"
          name="businessModel"
          value={fields.businessModel}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.businessModel && errors.businessModel}
          placeholder="How will you make money?"
        />
      </FormSection>

      <button className="btn" type="submit" disabled={submitting}>
        {submitting ? "Validating..." : "Validate Idea"}
      </button>
    </form>
  );
};

export default IdeaForm;
