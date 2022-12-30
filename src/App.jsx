
import React from "react";
import About from './components/About'
import Navbar from "./components/Navbar";
import Soultion from "./components/Soultion";
import Home from "../src/components/Home"
import Project from "./components/Project";
import Plan from "./components/Plan";
import Adds from "./components/Adds";
import Footer from "./components/Footer";
import Behind from "./components/Behind";
import Swap from "./components/Swap";



function App() {

    return (
        <>

            <Navbar />
            <Home />
            <About />
            <Soultion />
            <Project />
            <Plan />
            <Adds />
            <Swap />
            <Behind />
            <Footer />
        </>
    );
}

export default App;