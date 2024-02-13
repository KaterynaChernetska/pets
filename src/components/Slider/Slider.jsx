import React, { useState } from "react";
import Slider from "react-slick";
import "./Slider.scss";

const PictureSlider = ({ breedInfo }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (prev, next) => {
      setCurrentSlide(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "#ffff",
          borderRadius: "20px",
          padding: "10px",
          width: "40%",
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translate(-50%, 35%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: i === currentSlide ? "#FF868E" : "#FBE0DC",
          borderRadius: "20px",
        }}
      ></div>
    ),
  };
  return (
    <div className="sliderContainer">
      <Slider {...settings}>
        {breedInfo.length > 0 &&
          breedInfo.map((item) => (
            <img
              key={item.id}
              src={item.url}
              alt={item.breeds[0].name}
              className="imageSlider"
            />
          ))}
      </Slider>
    </div>
  );
};

export default PictureSlider;
