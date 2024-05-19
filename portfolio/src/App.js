import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About"
import Skills from "./Components/Skills";
import Services from "./Components/Services";
import Qualification from "./Components/Qualification";
import Contact from "./Components/Contact";

const App = ()=> {
  return(
    <>
    <Header/>
    <main className="main">
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
      <Contact/>
    </main>
    </>
  )
}

export default App