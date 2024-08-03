import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import FrontPage from "./components/FrontPage";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useEffect, useRef } from "react";

function App() {
  const textGradientColor =
    "bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text";
  return (
    <div>
      <Navbar textGradientColor={textGradientColor} />
      <FrontPage textGradientColor={textGradientColor} />
      <Skills textGradientColor={textGradientColor} />
      <AboutMe textGradientColor={textGradientColor} />
      <Projects textGradientColor={textGradientColor} />
      <Contact textGradientColor={textGradientColor} />
    </div>
  );
}

export default App;
