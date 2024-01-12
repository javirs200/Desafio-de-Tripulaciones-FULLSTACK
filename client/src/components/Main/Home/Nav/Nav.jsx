import React from "react";
import "./Nav.css"
import foto from "../../../../assets/img/several_negro.png"


const Nav = () => {
  return (
    <nav>
      <img src={foto} alt="logo" className="logo_nav" />
    <ul>
      <li>Inicio</li>
      <li>Propuestas</li>
      <li>Usuario</li>
      <li>Perfil</li>
    </ul>
    <p>Candela</p>
    {/* <img src="" alt="logo" className="logo" /> */}
    </nav>
  );
};

export default Nav;
