import React, { useState, useEffect } from "react";
import "./App.css";
import Loader from "./components/loader/Loader";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
    return (
        <>
            <Header />
            <main className='main'>
                <Home />
                <About />
                <Skills />
                <Qualification />
                <Portfolio />
                <Contact />
            </main>
        </>
    );
};

export default App;
