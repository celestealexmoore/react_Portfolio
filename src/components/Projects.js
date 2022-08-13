import "../assets/stylesheets/projects.css";
import twoBooks from "../assets/photos/projects/two-moore-books.png";
import scissorsPalace from "../assets/photos/projects/scissors-palace.png";
import chatWidget from "../assets/photos/projects/chat-widget.png";
import calculator from "../assets/photos/projects/react-calculator.png";
import foodly from "../assets/photos/projects/foodly.png";
import instagramClone from "../assets/photos/projects/instagram-clone.png";
import aggretsukos from "../assets/photos/projects/aggretsukos.png";

export default function Projects() {
  return (
    <div className="projectsParent">
      <div className="projectsTitle">Featured Projects</div>

      <div className="indProjectsParent">
        <div className="projectLink">
          <div className="indProject">
            <div className="projectTitle">Two Moore Books</div>

            <img
              className="projectImg"
              src={twoBooks}
              alt="Link to Two Moore Books Website"
              title="Image of Linked Website"
            />

            <div className="externalLinkIcons">
              <a href="#" className="githubLink">
                <i className="bi bi-github"></i>
              </a>
              <a href="#" className="homeLink">
                <i className="bi bi-house-door"></i>
              </a>
            </div>
          </div>
        </div>
        {/* 
        <a href="#" className="projectLink">
          <div className="indProject">
            <div className="projectTitle">Foodly</div>

            <img
              className="projectImg"
              src={foodly}
              alt="Link to Two Moore Books Website"
              title="Image of Linked Website"
            />

            <div>
              <button className="siteBtn">View Repo</button>
            </div>
          </div>
        </a> */}

        <div className="projectLink">
          <div className="indProject">
            <div className="projectTitle">Scissors Palace</div>

            <img
              className="projectImg"
              src={scissorsPalace}
              alt="Link to Two Moore Books Website"
              title="Image of Linked Website"
            />

            <div className="externalLinkIcons">
              <a href="#" className="githubLink">
                <i className="bi bi-github"></i>
              </a>
              <a href="#" className="homeLink">
                <i className="bi bi-house-door"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="projectLink">
          <div className="indProject">
            <div className="projectTitle">Instagram Clone</div>

            <img
              className="projectImg"
              src={instagramClone}
              alt="Link to Two Moore Books Website"
              title="Image of Linked Website"
            />

            <div className="externalLinkIcons">
              <a href="#" className="githubLink">
                <i className="bi bi-github"></i>
              </a>
              <a href="#" className="homeLink">
                <i className="bi bi-house-door"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="projectLink">
          <div className="indProject chatWidget">
            <div className="projectTitle">Chat Widget</div>

            <img
              className="projectImg"
              src={chatWidget}
              alt="Link to Two Moore Books Website"
              title="Image of Linked Website"
            />

            <div className="externalLinkIcons">
              <a href="#" className="githubLink">
                <i className="bi bi-github"></i>
              </a>
              <a href="#" className="homeLink">
                <i className="bi bi-house-door"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
