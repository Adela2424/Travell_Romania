import React from "react";
import { Link } from "react-router-dom";

function Itemcard(props) {
  return (
    <>
      <div className="container_cards_items">
        <Link className="cards_link" to={props.path}>
          <div className="container_img" data-catgory={props.label}>
            <img src={props.src} alt="" className="img_in_cards" />
          </div>
          <div className="cards_info">
            <h4 className="cards_nume">{props.text} </h4>
            <div className="flex_locatie">
              <i className="fas fa-map-marker-alt"></i>
              <p className="text_locatie_card"> {props.text_locatie} </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Itemcard;
