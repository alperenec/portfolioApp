import React from "react";
import Nav from "./Components/Nav/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
