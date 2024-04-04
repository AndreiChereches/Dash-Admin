import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin.jsx";
import EditPage from "./components/EditPage.jsx";
import NoPage from "./components/NoPage.jsx";
import "./css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Admin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/edit-bike" element={<EditPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
