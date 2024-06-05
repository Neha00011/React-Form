import React from "react";
import Input from "./Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import countries from "../constant/Country";
import PasswordInput from "./PasswordInput";
import useData from "../context/data";

function Form() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [country, setCountry] = useState(countries[0]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    mobile: "",
    country: "",
    city: "",
    pan: "",
    aadhar: "",
  });

  const isDisabled =
    formData.firstName === "" ||
    formData.lastName === "" ||
    formData.username === "" ||
    formData.email === "" ||
    formData.password === "" ||
    formData.mobile === "" ||
    formData.country === "" ||
    formData.city === "" ||
    formData.pan === "" ||
    formData.aadhar === "" ||
    error !== "";

  const { setFormData1 } = useData();

  const handleSelectCountry = (e) => {
    if (e.target.value === "") {
      setError("select country");
    } else {
      setError("");
      const selectedCountry = countries.find(
        (country) => country.id === parseInt(e.target.value)
      );
      setCountry(selectedCountry);
      setFormData({ ...formData, country: selectedCountry.name });
    }
  };

  const handleFirstNameChange = (e) => {
    const value = e.target.value.trim();
    const regex = /^[A-Za-z]{2,50}$/;
    if (!regex.test(value)) {
      setError("enter valid first name");
    } else {
      setError("");
      setFormData({ ...formData, firstName: e.target.value });
    }
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value.trim();
    const regex = /^[A-Za-z]{2,50}$/;
    if (!regex.test(value)) {
      setError("enter valid last name");
    } else {
      setError("");
      setFormData({ ...formData, lastName: e.target.value });
    }
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value.trim();
    const regex = /^[A-Za-z0-9]{6,20}$/;
    if (!regex.test(value)) {
      setError("enter valid username");
    } else {
      setError("");
      setFormData({ ...formData, username: e.target.value });
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value.trim();
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(value)) {
      setError("enter valid email");
    } else {
      setError("");
      setFormData({ ...formData, email: e.target.value });
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value.trim();
    const regex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (!regex.test(value)) {
      setError(
        "add atleast one special character, uppercase, lowercase and number"
      );
    } else {
      setError("");
      setFormData({ ...formData, password: e.target.value });
    }
  };

  const handleMobileChange = (e) => {
    const value = e.target.value.trim();
    const regex = /^[0-9]\d{10}$/;
    if (!regex.test(value)) {
      setError("enter valid mobile number");
    } else {
      setError("");
      setFormData({ ...formData, mobile: e.target.value });
    }
  };

  const handlePanChange = (e) => {
    const value = e.target.value.trim();
    const regex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!regex.test(value)) {
      setError("enter valid pan number");
    } else {
      setError("");
      setFormData({ ...formData, pan: e.target.value });
    }
  };
  const handleAadharChange = (e) => {
    const value = e.target.value.trim();
    const regex = /^[2-9]{1}[0-9]{11}$/;
    if (!regex.test(value)) {
      setError("enter valid aadhar number");
    } else {
      setError("");
      setFormData({ ...formData, aadhar: e.target.value });
    }
  };

  const handleCity = (e) => {
    if (e.target.value === "") {
      setError("select city");
    } else {
      setError("");
      const selectedCity = country.cities.find(
        (city) => city.id === parseInt(e.target.value)
      );
      setFormData({ ...formData, city: selectedCity.name });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isDisabled) {
      alert("form submitted");
    }
    setFormData1(formData);
    setTimeout(() => {
      navigate("/submit");
    }, 2000);
  };

  return (
    <>
      <div className="max-w-2xl mx-auto p-8 bg-purple-300 border border-brown-500 shadow-md rounded-lg">
        <form>
          <Input
            label="First Name "
            type="text"
            placeholder="firstname"
            onChange={handleFirstNameChange}
          />

          <Input
            label="Last Name "
            type="text"
            placeholder="lastname"
            onChange={handleLastNameChange}
          />
          <Input
            label="Username "
            type="text"
            placeholder="username"
            onChange={handleUsernameChange}
          />
          <Input
            label="Email "
            type="email"
            placeholder="email"
            onChange={handleEmailChange}
          />
          <PasswordInput onChange={handlePasswordChange} />

          <Input
            label="Mobile Number "
            type="number"
            placeholder="mobile"
            onChange={handleMobileChange}
          />
          <div className="flex items-center mb-4">
            <label className="w-1/4 text-sm font-medium text-gray-700">
              Country
            </label>
            <select
              className="p-2 border border-blue-300 rounded-md w-3/4 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              name="country"
              value={country.id}
              onChange={handleSelectCountry}
            >
              {countries.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center mb-4">
            <label className="w-1/4 text-sm font-medium text-gray-700">
              City
            </label>
            <select
              className="p-2 border border-blue-300 rounded-md w-3/4 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              name="city"
              onChange={handleCity}
            >
              {country.cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
          <Input
            label="Pan Number "
            type="text"
            placeholder="pan card"
            onChange={handlePanChange}
          />
          <Input
            label="Aadhar Number "
            type="text"
            placeholder="aadhar"
            onChange={handleAadharChange}
          />
          {error && <p className="text-red-400">{error}</p>}
          <button
            disabled={isDisabled}
            className={`${
              isDisabled ? " bg-slate-600 hover:bg-black " : ""
            }bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
