import '../public/dist/output.css';
import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';
import NavBar from './components/NavBar';

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <Router>
      <NavBar />
      <Main />
    </Router>
);
