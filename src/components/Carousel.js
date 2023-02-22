import { useState } from "react";
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
  foodly,
  instagramClone,
  aggretsukos,
  calculator,
];

const titles = [
  "Two Moore Books",
  "Scissors Palace",
  "Chat Widget",
  "Foodly",
  "Instagram Clone",
  "Aggretsukos Karaoke",
  "React Calculator",
];

// for (let i = 0; i < titles.length; i++) {
//   <div className="projectTitle">{titles[i]}</div>;
// }

export default function Carousel() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <i className="bi bi-arrow-right"></i>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <i className="bi bi-arrow-left"></i>
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
  };

  return (
    <div className="projectsParent">
      <h2 className="projectsTitle">Featured Projects</h2>
      <div className="sliderDiv">
        <Slider {...settings}>
          {images.map((img, i) => (
            <div
              key={i}
              className={i === imageIndex ? "slide activeSlide" : "slide"}
            >
              {/* {titles.map(function(title, i) {
                return <div key={i} className="projectTitle">{title}</div>
              })} */}


              <div className="projectLink">
                <div className="indProject">
                  <img
                    className="projectImg"
                    src={img}
                    alt={img}
                    title="Image of Linked Website"
                  />

                  <div className="externalLinkIcons">
                    <a
                      href="https://github.com/celestealexmoore/e-book"
                      className="githubLink"
                    >
                      <i className="bi bi-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
