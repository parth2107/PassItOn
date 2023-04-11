import React, { useState } from "react";

export default function useForm({ initialState, onSubmit }) {
  const [state, setState] = useState({ ...initialState });

  const handleChangeTextInput = (value, keyboardType) => {
    // alert(`parth the value is ${value} and the keyboardType is ${keyboardType}`);
    setState((prevState) => ({
      ...prevState,
      [keyboardType]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...state });
    reset();
  };
  const reset = () => {
    setState({
      ...initialState,
    });
  };

  return { state, handleChangeTextInput, handleSubmit };
}
