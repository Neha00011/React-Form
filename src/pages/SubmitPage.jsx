import React from "react";
import useData from "../context/data";

const SubmitPage = () => {
  const { formData } = useData();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Success!</h1>
        <p className="text-2xl text-gray-600 mb-8">
          Your form has been submitted successfully.
        </p>
        <div className="grid gap-4 mb-8">
          {Object.keys(formData).map((key) => (
            <div key={key} className="bg-gray-50 p-4 rounded-lg shadow">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-800">{key}:</span>{" "}
                {formData[key]}
              </p>
            </div>
          ))}
        </div>
        <a href="/" className="text-blue-500 hover:underline">
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default SubmitPage;
