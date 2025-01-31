import React from "react";
import "./Navbar.css"; // Asegúrate de tener el archivo CSS importado

const Navbar = () => {
  return (
    <div className="nav">
      <div className="container">
        <div class="btn">Home</div>
        <div class="btn">Contatanos</div>
        <div class="btn">Prendas</div>
        <div class="btn">FAQ</div>

        <svg
          className="outline"
          width="400"
          height="60"
          viewBox="0 0 400 60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className="rect"
            pathLength="100"
            x="0"
            y="0"
            width="400"
            height="60"
            fill="transparent"
            strokeWidth="5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
