import React, { useState } from "react";

const useForm = (intialValue, successMessage) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(successMessage);
  const [values, setValues] = useState(intialValue);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };
  return [showSuccessMessage, values, handleChanges, handleSubmit];
};

export default useForm;
