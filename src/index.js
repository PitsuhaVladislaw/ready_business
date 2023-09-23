import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from "./layout/Header/Header";
import NavBar from "./layout/NavBar/NavBar";
import Main from './layout/Main/Main';
import Footer from './layout/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
);