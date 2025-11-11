import { useState } from "react";

export const useForm = (InitialValue) => {
  const [form, setForm] = useState(InitialValue);

  const handleReset = () => {
    setForm(InitialValue);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return { form, handleChange, handleReset };
};
