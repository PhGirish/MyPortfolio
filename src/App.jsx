import { useState } from "react";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import "./assets/intro.css";

function App() {
  return (
    <>
      <Intro />
      <AboutMe />
    </>
  );
}

export default App;
