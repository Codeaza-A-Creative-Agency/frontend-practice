import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DashBoard from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/login";
import Signup from "./components/Signup/Popup";
import Fpass from "./components/Forgot Password/Fpass";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Popup" element={<Signup />} />
        <Route path="/Fpass" element={<Fpass />} />
      </Routes>
    </Router>
  );
}

export default App;
