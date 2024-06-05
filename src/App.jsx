import React from "react";
import { DataProvider } from "./context/data";

import { Outlet } from "react-router-dom";

function App() {
  const [formData, setForm] = React.useState({
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
  const setFormData1 = (data) => {
    setForm((prevData) => {
      return { ...prevData, ...data };
    });
  };
  return (
    <DataProvider value={{ formData, setFormData1 }}>
      <Outlet />
    </DataProvider>
  );
}

export default App;
