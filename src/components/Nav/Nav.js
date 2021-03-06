import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li className="brand animated lightSpeedIn">
        <a href="/clicky-game">{props.title}</a>
      </li>

      <li id="rw">{props.correctIncorrect}</li>

      <li class="score-num">Current Score: {props.score}</li>

      <li class="score-num top">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;