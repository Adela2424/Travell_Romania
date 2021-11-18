import React, { useState } from "react";
import "./Navbar.scss";


function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="container_page">
      <div className="continut_all">
        <div className="container_principal_nav">
          <nav className="container_nav">
            <div className="left">
              
            </div>
            <div className="centru_menu" id={showLinks ? "hidden" : ""}>
              <li>
                <a href="/"> Home </a>
              </li>
              <li>
                <a  href="atractii-turistice"> Atractii Turistice</a>
              </li>
              <li>
                <a href="cazare"> Cazare </a>
              </li>
              <li>
                <a href="contact"> Contact </a>
              </li>
            </div>
            <div
              onClick={() => setShowLinks(!showLinks)}
              className="button_nav"
            >
              <i className="fas fa-bars btn_mobile  "></i>
            </div>
          </nav>
        </div>
        <hr className="hr_nav" />
        <div className="header_sub_nav">
          <h2> Traveler in Romania! </h2>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
