import React from "react";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Main from './page/Main.jsx';
import Footer from './components/Footer/Footer';

export default function App() {
    return(
        <div>
            <NavBar />
            <Header />
            <Main />
            <Footer />
        </div>
    )
}