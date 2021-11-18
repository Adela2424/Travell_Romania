import React, { useState } from "react";
import "./Carousel.scss";
import { images } from "./CarouselData";

function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})`  } }
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <i className="fas fa-arrow-circle-left fa-lg"></i>

          <div />
        </div>
        <div className="center">
          <h1>{images[currImg].title}</h1>
          <p>{images[currImg].subtitle}</p>
        </div>
        <div
          className="right"
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <i className="fas fa-arrow-circle-right fa-lg"></i>
          <div />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
