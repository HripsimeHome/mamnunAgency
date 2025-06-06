import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { BrowserRouter } from "react-router-dom";
import "./styles/_style.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
); 