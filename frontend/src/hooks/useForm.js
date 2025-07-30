import { useState } from "react";

const useForm = (initialValues, validate, onSubmit) => {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setTouched({ ...touched, [name]: true });
    if (validate) setErrors(validate({ ...values, [name]: value }));
  };

  const handleBlur = e => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    if (validate) setErrors(validate(values));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
      if (Object.keys(validationErrors).length) return;
    }
    setSubmitting(true);
    await onSubmit(values);
    setSubmitting(false);
  };

  const reset = () => {
    setValues(initialValues);
    setTouched({});
    setErrors({});
    setSubmitting(false);
  };

  return {
    values,
    errors,
    touched,
    submitting,
    handleChange,
    handleBlur,
    handleSubmit,
    reset
  };
};

export default useForm;
