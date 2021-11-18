import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="container_footer">
        <div className="content_footer">
          <div className="icons_footer">
          <i className="fab fa-facebook fa-2x "></i>
          <i className="fab fa-instagram fa-2x"></i>
          <i className="fab fa-whatsapp fa-2x "></i>
          <i className="fab fa-twitter fa-2x"></i>
          </div>
          <div className="lista_footer">
            
           <ul>
           
              <li> <Link to="Info"> Info  </Link></li>
              <li> <Link to="Reduceri"> Reduceri </Link ></li>
              <li> <Link to="Contact"> Contact </Link></li>
           </ul>
           <div className="copyright">
               <p> © 2021 Ionce Adela Maria </p>
           </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
