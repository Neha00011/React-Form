import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import FormPage from "./pages/FormPage.jsx";
import SubmitPage from "./pages/SubmitPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />}>
      <Route path="/" element={<FormPage />} />
      <Route path="/submit" element={<SubmitPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>,
  ])
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
