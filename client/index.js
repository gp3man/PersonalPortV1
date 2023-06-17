import './index.css';
import React from 'react';
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import store from './store'
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>
);
