import React from "react";

function Itemcardcazare(props) {
  return (
    <>
      <div className="accommodation_item">
        <div className="container_left_accommodation">
          <img src={props.src} alt="" className="img_cards_accommodation" />
        </div>

        <div className="container_center_accommodation">
          <div className="text_accommodation">
            <p className="titlu_accommodation"> {props.titlu_accommodation} </p>
            <p className="locatie_accommodation">  {props.locatia_accommodation} </p>
          </div>
          <div className="flex_info">
            <p className="info_acomodation"> {props.info_accommodation} </p>
          </div>
        </div>
        <div className="pret_orientativ_right">
          <p> {props.pret_orientativ} </p>
          <p className="culoare_pret"> {props.pret} </p>
          <p> {props.persoane} </p>
          <p className=" mic_dejun"> {props.cu_mic_dejun} </p>
        </div>
      </div>
    </>
  );
}

export default Itemcardcazare;
