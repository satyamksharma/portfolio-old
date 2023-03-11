import React, { useState, useEffect } from "react";
import "./App.css";
import PuffLoader from "react-spinners/PuffLoader";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";

const App = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    return (
        <>
            {loading ? (
                <div className='loader'>
                    {" "}
                    <PuffLoader
                        color={"#62CDFF"}
                        loading={loading}
                        size={70}
                        aria-label='Loading Spinner'
                        data-testid='loader'
                    />
                </div>
            ) : (
                <>
                    <Header />
                    <main className='main'>
                        <Home />
                        <About />
                        <Skills />
                        <Qualification />
                        <Contact />
                    </main>
                </>
            )}
        </>
    );
};

export default App;
