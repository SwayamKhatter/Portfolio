import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About"

const App = ()=> {
  return(
    <>
    <Header/>
    <main className="main">
      <Home/>
      <About/>
    </main>
    </>
  )
}

export default App