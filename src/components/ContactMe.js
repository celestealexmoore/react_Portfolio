import github from "../assets/photos/logos/github.png";
import mailTo from "../assets/photos/logos/mailTo.png";
import linkedIn from "../assets/photos/logos/linkedIn.png";
import "../assets/stylesheets/contactMe.css";
import resume from "../assets/pdf/celesteMoore-resume.pdf";

export default function Contact() {
  return (
    <div className="contactParent">
      <div className="contactTitle">Contact Me</div>

      <div className="contactLinkWrapper">
        <div className="contactUl">
          <a className="downloadLink" href={resume} download>
            Download My Resume
          </a>
          <p>© 2021 celestealexmoore</p>
        </div>

        <div className="contactIconLinks">
          <a href="mailto:celestealexmoore@gmail.com">
            <img
              className="icon"
              src={mailTo}
              alt="Email Icon"
              title="Email"
            ></img>
          </a>
          <a href="https://www.linkedin.com/in/celeste-moore-22a036204/">
            <img
              className="icon"
              src={linkedIn}
              alt="LinkedIn Icon"
              title="Link to LinkedIn"
            ></img>
          </a>
          <a href="https://github.com/celestealexmoore/">
            <img
              className="icon"
              src={github}
              alt="Github Icon"
              title="Link to Github"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}
