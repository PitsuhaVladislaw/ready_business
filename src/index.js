import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Header />
  </React.StrictMode>
);