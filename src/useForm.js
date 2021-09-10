import { useState, useEffect } from "react";

function useForm(validate) {
  const [values, setValues] = useState({
    username: "",
    password: "",
    verifyPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
  };

  return {
    values,
    errors,
    handleInput,
    handleSubmit,
  };
}

export default useForm;
