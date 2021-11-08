import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Sounds from "./pages/Sounds";
import Flicks from "./pages/Flicks";
import MenuBar from "./components/MenuBar";
import Experiences from "./pages/Experiences";
import Socials from "./components/Socials";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/sounds" element={<Sounds />} />
          <Route path="/flicks" element={<Flicks />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </header>
      <Socials />
    </div>
  );
}

export default App;
