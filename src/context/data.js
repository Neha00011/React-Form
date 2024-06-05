import { createContext, useContext } from "react";
const initialData = {
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
};

export const DataContext = createContext({
  formData: initialData,
  setFormData1: () => {},
});

export const DataProvider = DataContext.Provider;
export default function useData() {
  return useContext(DataContext);
}
