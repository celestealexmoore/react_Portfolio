import "../assets/stylesheets/projects.css";
import twoBooks from "../assets/photos/projects/two-moore-books.png";
import scissorsPalace from "../assets/photos/projects/scissors-palace.png";
import chatWidget from "../assets/photos/projects/chat-widget.png";
import passwordGenerator from "../assets/photos/projects/password-generator.png";
import calculator from "../assets/photos/projects/react-calculator.png";
import foodly from "../assets/photos/projects/foodly.png";
import jsQuiz from "../assets/photos/projects/js-quiz-1.png";

export default function Projects() {
  return (
    <div className="projectsParent">
      <div className="projectsTitle">Featured Projects</div>

      <div className="indProjectsParent">
        <div className="indProject">
          <div className="projectTitle">Two Moore Books</div>

          <img
            className="projectImg"
            src={twoBooks}
            alt="Link to Two Moore Books Website"
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

        <div className="indProject">
          <div className="projectTitle">Scissors Palace</div>

          <img
            className="projectImg"
            src={scissorsPalace}
            alt="Link to Two Moore Books Website"
            title="Image of Linked Website"
          />

          <div className="externalLinkIcons">
            <a
              href="https://github.com/ferick8246/Scissors-Palace"
              className="githubLink"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://scissors-palace.herokuapp.com/"
              className="homeLink"
            >
              <i className="bi bi-house-door"></i>
            </a>
          </div>
        </div>

        <div className="indProject chatWidget">
          <div className="projectTitle">Chat Widget</div>

          <img
            className="projectImg"
            src={chatWidget}
            alt="Link to Two Moore Books Website"
            title="Image of Linked Website"
          />

          <div className="externalLinkIcons">
            <a
              href="https://github.com/celestealexmoore/chatWidget"
              className="githubLink"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://celestealexmoore.github.io/chatWidget/"
              className="homeLink"
            >
              <i className="bi bi-house-door"></i>
            </a>
          </div>
        </div>

        <div className="indProject">
          <div className="projectTitle">Password Generator</div>

          <img
            className="projectImg"
            src={passwordGenerator}
            alt="Link to Password Generator"
            title="Image of Password Generator Website"
          />

          <div className="externalLinkIcons">
            <a
              href="https://github.com/celestealexmoore/passwords_generator"
              className="githubLink"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://celestealexmoore.github.io/chatWidget/"
              className="homeLink"
            >
              <i className="bi bi-house-door"></i>
            </a>
          </div>
        </div>

        <div className="indProject">
          <div className="projectTitle">Foodly</div>

          <img
            className="projectImg"
            src={foodly}
            alt="Link to Foodly"
            title="Image of Foodly"
          />

          <div className="externalLinkIcons">
            <a
              href="https://github.com/celestealexmoore/Foodly"
              className="githubLink"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://celestealexmoore.github.io/Foodly/"
              className="homeLink"
            >
              <i className="bi bi-house-door"></i>
            </a>
          </div>
        </div>

        <div className="indProject">
          <div className="projectTitle">JavaScript Quiz</div>

          <img
            className="projectImg"
            src={jsQuiz}
            alt="Link to Aggretsukos"
            title="Image of Aggretsukos"
          />

          <div className="externalLinkIcons">
            <a
              href="https://github.com/celestealexmoore/codeQuiz"
              className="githubLink"
            >
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
