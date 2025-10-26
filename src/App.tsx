import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

const rotatingTexts = ["Full Stack Engineer", "Algorithms Researcher", "Machine Learning Enthusiast", "Cybersecurity Competitor", "Photographer"]
const colors = ["cyan", "magenta", "red", "orange", "lime"];

//App component
function App() {

  const [index, setIndex] = useState(0);
  const [isEntering, setIsEntering] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsEntering(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
        setIsEntering(true);
      }, 0); // Duration of slide out animation
    }, 3000); // Duration between text changes
    return () => clearInterval(interval);
  }, []);




  return (
    <>
      <Navbar />
      <div className="intro-container">
        <div className="image-container">
          <img
            className="pranav-image"
            src="IMG_2869.JPG"
            alt="Picture of me"
          />
        </div>
        <div className="about_me">
          <h1>Pranav Akella</h1>
          <h2 style={{ color: colors[index] }} className={`about_me ${isEntering ? 'new' : 'old'}`}>{rotatingTexts[index]}</h2>
          <p>
            Hi! My name is Pranav Akella, and I'm a second year computer science
            student at UCLA. I'm interested in machine learning and software engineering, and I'm currently seeking
            professional opportunites to learn more about these areas. I have experience in
            full-stack engineering and AI development.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
