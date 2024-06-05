import React, { useState, useId, forwardRef } from "react";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = forwardRef(function PasswordInput(
  { value, onChange },
  ref
) {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const id = useId();

  return (
    <div className="flex items-center mb-4">
      <label className="w-1/4 text-sm font-medium text-gray-700 ">
        Password
      </label>
      <div className="flex flex-row p-2 border border-blue-300 rounded-md w-3/4 bg-brown-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 relative bg-white">
        <input
          ref={ref}
          id={id}
          value={value}
          onChange={onChange}
          type={passwordHidden ? "password" : "text"}
          placeholder="password"
          className="flex-grow pr-10 bg-transparent outline-none"
        />
        <div
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-700"
          onClick={() => setPasswordHidden(!passwordHidden)}
        >
          {passwordHidden ? <FaRegEye /> : <FaEyeSlash />}
        </div>
      </div>
    </div>
  );
});
export default PasswordInput;
