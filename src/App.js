// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import GitPage from "./components/git/GitPagetest";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/git" element={<GitPage />} />
      </Routes>
    </Router>
  );
};

export default App;
