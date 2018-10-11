import React, { Component } from "react";
import Title from "../components/Title";
import About from "../components/About";
import Projects from "../components/Projects";
import "../styles/main.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="grid-container">
        <Title />
        <About />
        <Projects />
      </div>
    );
  }
}

export default App;
