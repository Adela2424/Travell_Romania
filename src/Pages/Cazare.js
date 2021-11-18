import Carousel from "../Components/Carousel";
import React from "react";
import Itemscardscazare from "../Components/Itemscardscazare";
import SliderAccommodation from "../Components/SliderAccommodation";

function Cazare() {
  return (
    <>
      <div className="dd">
        <Carousel />
      </div>
      <div className="width_accommodation">
      <div className="sectiuneaccomodation">
      
        <SliderAccommodation />
        <Itemscardscazare />
        </div>
      </div>
    </>
  );
}

export default Cazare;
