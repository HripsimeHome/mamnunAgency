import { useDispatch } from "react-redux";
import { useState } from "react";

export const useFormValue = (initialData, setError, error) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialData);

  const onChange = (e) => {
    setFormData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
    clearInputError(e.target.name);
  };

  const onNumberChange = (e) => {
    if (e.target.value.match(/[^0-9+]/g)) {
      e.target.value = e.target.value.replace(/[^0-9+]+/g, "");
    }
    onChange(e);
  };

  const onChangeSelect = (key, value) => {
    setFormData((state) => ({
      ...state,
      [key]: value,
    }));
    clearInputError(key);
  };

  const clearInputError = (inputName) => {
    if (
      setError &&
      error &&
      typeof error === "object" &&
      inputName in error &&
      error?.[inputName]
    ) {
      dispatch(
        setError({
          ...error,
          [inputName]: null,
        })
      );
    }
  };

  const getError = (name) =>
    !!error && typeof error === "object" && error?.[name];

  const onResetForm = () => {
    setFormData(initialData);
  };

  return {
    formData,
    onChange,
    onNumberChange,
    onChangeSelect,
    onResetForm,
    setFormData,
    clearInputError,
    getError,
  };
};
