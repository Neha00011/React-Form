import React from "react";
import { forwardRef } from "react";
import { useId } from "react";

const Input = forwardRef(function Input(
  { label, type, placeholder, className, value, onChange },
  ref
) {
  const id = useId();
  return (
    <div className="flex items-center mb-4">
      <label className="w-1/4 text-sm font-medium text-gray-700">{label}</label>
      <input
        ref={ref}
        id={id}
        type={type}
        placeholder={placeholder}
        className={`${className} p-2 border border-blue-300 rounded-md w-3/4 bg-brown-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
});

export default Input;
