import React from "react";
import About from './seekcoin/About'
import Token from "./seekcoin/Token";
import { Card } from "./seekcoin/Card";
import ImgesFile from "./seekcoin/ImgesFile";
import Leadership from "./seekcoin/Leadership ";
import Footer from "./seekcoin/Footer";
import Navbar from "./seekcoin/Navbar";
import { MyRoadmap } from "./seekcoin/MyRoadmap";





function App() {

    return (
        <>

                <Navbar />
                <About />
                 <Card />
                <Token />
                <MyRoadmap/>
                <Leadership />
                <ImgesFile />
                <Footer />

        </>
    );
}

export default App;