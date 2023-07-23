import '../src/dist/output.css';
import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import Four0FourPage from "./components/Four0FourPage.jsx";
import LandingPage from "./components/LandingPage.jsx";
import LargePortfolio from './components/LargePortfolio.jsx';

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <Router>
    <Routes>
        <Route path="*" element={<Four0FourPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/Portfolio" element={<LargePortfolio />} />
    </Routes>
  </Router>
);
