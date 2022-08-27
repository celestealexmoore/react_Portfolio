import { Component, useState } from "react";
import Slider from "react-slick";
import "../assets/stylesheets/projects.css";
import twoBooks from "../assets/photos/projects/two-moore-books.png";
import scissorsPalace from "../assets/photos/projects/scissors-palace.png";
import chatWidget from "../assets/photos/projects/chat-widget.png";
import calculator from "../assets/photos/projects/react-calculator.png";
import foodly from "../assets/photos/projects/foodly.png";
import instagramClone from "../assets/photos/projects/instagram-clone.png";
import aggretsukos from "../assets/photos/projects/aggretsukos.png";

const images = [
  twoBooks,
  scissorsPalace,
  chatWidget,
  calculator,
  foodly,
  instagramClone,
  aggretsukos,
];

export default function Carousel() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <i class="bi bi-arrow-right"></i>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <i class="bi bi-arrow-left"></i>
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    // slidesToScroll: 1,
  };

  return (
    <div className="projectsParent">
      <h2 className="projectsTitle">Featured Projects</h2>
      <div className="sliderDiv">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <img
                className="projectImg"
                src={img}
                alt={img}
                // title="Image of Linked Website"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
