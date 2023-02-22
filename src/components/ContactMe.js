import "../assets/stylesheets/contactMe.css";
import resume from "../assets/pdf/celesteMoore-resume.pdf";

export default function Contact() {
  return (
    <div className="contactParent">

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
