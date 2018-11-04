import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <ul>
          <li>
            <a href="#Introduction">
              <img src="/introduction.svg" alt="" />
            </a>
          </li>

          <li>
            <a href="#Introduction">
              <img src="/skills.svg" alt="" />
            </a>
          </li>

          <li>
            <a href="#Introduction">
              <img src="/canvas.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
