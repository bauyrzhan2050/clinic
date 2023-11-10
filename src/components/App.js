import React from "react";
import { BrowserRouter as Routes, Router, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Article from "./Article";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </Router>
  );
}
