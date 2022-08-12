import "./assets/stylesheets/index.css"
import Opening from "./components/Opening";
import AboutMe from "./components/AboutMe";
import Parallax1 from "./components/Parallax-1";
import Projects from "./components/Projects";
import Parallax2 from "./components/Parallax-2";
import ContactMe from "./components/ContactMe";
import Closing from "./components/Closing";

function App() {
  return (
    <div className="App">
      <Opening />
      <AboutMe />
      <Parallax1 />
      <Projects />
      <Parallax2 />
      {/* <ContactMe /> */}
      {/* <Closing /> */}
    </div>
  );
}

export default App;
