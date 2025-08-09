import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";

import Dashboard from "./pages/Dashboard";
import IdeaValidator from "./pages/IdeaValidator";
import Results from "./pages/Results";
import Submit from "./pages/Submit";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/submit" element={<Submit/>} />
          <Route path="/validate" element={<IdeaValidator />} />
          <Route path="/results" element={<Results />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
