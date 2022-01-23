import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import BurgerMenu from "./components/burgerMenu.jsx";
import AboutMe from "./components/aboutMe.jsx";
import Academia from "./components/academia.jsx";
import Projects from "./components/projects.jsx";
import Professional from "./components/professional.jsx";
import Contact from "./components/contactMe.jsx";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
