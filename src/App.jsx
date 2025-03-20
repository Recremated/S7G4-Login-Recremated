import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Success from "../components/Success";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Success" element={<Success />} />
    </Routes>
  );
}

export default App;
