import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import "./styles/App.scss"

import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import LandingPage from "./components/pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
