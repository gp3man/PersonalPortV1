import '../src/dist/output.css';
import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import { Route, Routes } from "react-router-dom";
import Four0FourPage from "./components/Four0FourPage.jsx";
import LandingPage from "./components/LandingPage.jsx";

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <Router>
      <NavBar />
      <Routes>
         <Route path="*" element={<Four0FourPage />} />
         <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
);
