import React, { useState, useId, forwardRef } from "react";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import "./other.css"

const PasswordInput = forwardRef(function PasswordInput(
  { value, onChange },
  ref
) {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const id = useId();

  return (
    <div className="form-group">
    <label>Password</label>
    <div className="password-container">
        <input
            ref={ref}
            id={id}
            value={value}
            onChange={onChange}
            type={passwordHidden ? "password" : "text"}
            placeholder="password"
            className="password-input"
        />
        <div
            className="password-toggle"
            onClick={() => setPasswordHidden(!passwordHidden)}
        >
            {passwordHidden ? <FaRegEye /> : <FaEyeSlash />}
        </div>
    </div>
</div>
  );
});
export default PasswordInput;
