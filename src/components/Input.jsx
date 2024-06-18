import React from "react";
import { forwardRef } from "react";
import { useId } from "react";
import "./other.css"

const Input = forwardRef(function Input(
  { label, type, placeholder, className, value, onChange },
  ref
) {
  const id = useId();
  return (
    <div className="form-group">
    <label>{label}</label>
    <input
        ref={ref}
        id={id}
        type={type}
        placeholder={placeholder}
        className={`input ${className}`}
        value={value}
        onChange={onChange}
    />
</div>
  );
});

export default Input;
