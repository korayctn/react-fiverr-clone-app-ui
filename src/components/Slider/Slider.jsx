import React from "react";
import "./Slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SliderData from "../../../public/data/SliderData";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
export const Slider = () => {
  return (
    <div className="slider">
      <div className="container">
        <h1>Popular services</h1>
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          navigation={true}
          modules={[Navigation]}
        >
          {SliderData.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <Link to="/gigs?cat=design">
                  <div className="textContainer">
                    <span className="firstText">{slide.title1}</span>
                    <br />
                    <span className="secondText">{slide.title2}</span>
                  </div>
                  <img
                    className="sliderImg"
                    src={slide.img}
                    alt={slide.title2}
                  />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
