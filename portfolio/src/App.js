import React, {useEffect} from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About"
import Skills from "./Components/Skills";
import Services from "./Components/Services";
import Qualification from "./Components/Qualification";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Scrollup from "./Components/Scrollup";
import AOS from "aos";

const App = ()=> {
  useEffect(() => { AOS.init(); },[])
  return(
    <>
    <Header/>
    <main className="main">
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
      <Projects/>
      <Contact/>
    </main>
    <Footer/>
    <Scrollup/>
    </>
  )
}

export default App