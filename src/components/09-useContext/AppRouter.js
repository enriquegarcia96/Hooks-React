import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./Navbar";

import { AboutScreen } from "./AboutScreen";
import { LoginScreen } from "./LoginScreen";
import { HomeScreen } from "./HomeScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <div className="container">
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/about" element={<AboutScreen />} />
            <Route exact path="/login" element={<LoginScreen />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
