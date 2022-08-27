import "../assets/stylesheets/contactMe.css";
import resume from "../assets/pdf/celesteMoore-resume.pdf";

export default function Contact() {
  return (
    <div className="contactParent">
      <svg
        className="contactSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#faf4ec"
          fillOpacity="1"
          d="M0,192L720,160L1440,192L1440,320L720,320L0,320Z"
        ></path>
      </svg>

      <a href="#" className="backToTopIcon">
        <i className="bi bi-chevron-double-up"></i>
      </a>

      <div className="contactTitle">Contact Me</div>

      <div className="contactLinkWrapper">
        <ul className="contactUl">
          <a className="downloadLink" href={resume} download>
            Download My Resume
          </a>
          <p>© 2022 celestealexmoore</p>
        </ul>

        <div className="contactIconLinks">
          <a href="mailto:celestealexmoore@gmail.com">
          <i className="bi bi-envelope icon"></i>
          </a>
          <a href="https://www.linkedin.com/in/celeste-moore-22a036204/">
          <i className="bi bi-linkedin icon"></i>
          </a>
          <a href="https://github.com/celestealexmoore/">
          <i className="bi bi-github icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
