import "../assets/stylesheets/opening.css";
import Typewriter from "typewriter-effect";

export default function Opening() {
  let downArrow = document.getElementById("downArrow");

  const handleScroll = (e) => {
    downArrow.remove();
  };

  return (
    <div className="openingParallax">
      <div className="welcomeMessage" data-aos="zoom-in">
        Celeste Moore
        <div className="subtitle">
          <Typewriter
            className="typeWriter"
            options={{
              strings: ["Front-End Developer", "Friend", "Creative"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>

      <i
        onScroll={handleScroll}
        id="downArrow"
        className="bi bi-chevron-double-down downArrow"
      ></i>
    </div>
  );
}
