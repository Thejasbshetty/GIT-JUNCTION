// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import GitPage from "./components/git/GitPage";
import LinuxPage from "./components/open/LinuxPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/git" element={<GitPage />} />
        <Route path="/linux" element={<LinuxPage />} />
      </Routes>
    </Router>
  );
};

export default App;
