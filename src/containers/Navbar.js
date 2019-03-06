import React from "react"

function Navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-dark d-flex justify-space-between">
    <span className="navbar-brand mb-0">Clicky Game</span>
    <span className="scoreInfo text-light">
      Current Score: {props.currentScore} || Top Score: {props.topScore}
    </span>
  </nav>
  );
}

export default Navbar;


