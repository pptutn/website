import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useTransition, animated } from "react-spring";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Sounds from "./pages/Sounds";
import Flicks from "./pages/Flicks";
import Photos from "./pages/Photos";
import MenuBar from "./components/MenuBar";
import Experiences from "./pages/Experiences";
import Socials from "./components/Socials";
import Projects from "./pages/Projects";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <header className="App-header">
        <MenuBar />

        <TransitionGroup component={null}>
          <CSSTransition key={location.key} classNames="fade" timeout={1000}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/sounds" element={<Sounds />} />
              <Route path="/flicks" element={<Flicks />} />
              <Route path="/photos" element={<Photos />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </header>
      <Socials />
      <footer>Oh hi there :)</footer>
    </div>
  );
}

export default App;

// https://codesandbox.io/s/react-router-spring-b5941?file=/src/index.js:185-239

// using this one
// https://stackoverflow.com/questions/61089053/animating-route-transitions-with-csstransitiongroup-and-react-router-v6
