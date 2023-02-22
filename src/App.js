import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/stylesheets/index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Opening from "./components/Opening";
import AboutMe from "./components/AboutMe";
import Parallax1 from "./components/Parallax-1";
import Projects from "./components/Projects";
// import Carousel from "./components/Carousel";
import ContactMe from "./components/ContactMe";
import Closing from "./components/Closing";
AOS.init();

function App() {
  return (
    <div className="App">
      <Opening />
      <AboutMe />
      <Parallax1 />
      {/* <Carousel /> */}
      <Projects />
      <Closing />
      <ContactMe />
    </div>
  );
}

export default App;
