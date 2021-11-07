import newlogo from "./image2vector.svg";
import "./App.css";
import ExperienceSection from "./components/ExperienceSection";
import Socials from "./components/Socials";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my shitty website</h1>
        <img src={newlogo} className="App-logo" alt="logo" />
        <ExperienceSection />
        <Socials />
      </header>
    </div>
  );
}

export default App;
