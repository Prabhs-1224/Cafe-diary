import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // NEW
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import MonthView from "./pages/MonthView";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />            {/* Homepage route */}
        <Route path="/login" element={<Login />} />      {/* Login route */}
        <Route path="/signup" element={<Signup />} />    {/* Signup route */}
        <Route path ="/dashboard" element={<Dashboard/>}/>
        <Route path ="/:month" element ={<MonthView/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;


