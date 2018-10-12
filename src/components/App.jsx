import React from "react";
import Header from "../components/Header";

import "../styles/main.css";
import Skills from "./Skills";
import Projects from "./Projects";

const App = () => {
  return (
    <div className="grid-container">
      <Header />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
