import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Import external CSS

const HomePage = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [animationStyle, setAnimationStyle] = useState("typing");

  useEffect(() => {
    const text =
      "Welcome to Git-Master Hub!\n Master Git with our tutorials and resources for top-notch version control.\n Elevate your open-source skills!";
    const textContainer = document.querySelector(".animated-text");
    const textArray = text.split("");
    if (textIndex < textArray.length) {
      setTimeout(() => {
        textContainer.textContent += textArray[textIndex];
        setTextIndex((prevState) => prevState + 1);
      }, 75); // Adjusted delay for faster text animation
    } else {
      const animationStyles = ["typing", "bouncing", "flashing"];
      const randomIndex = Math.floor(Math.random() * animationStyles.length);
      const newAnimationStyle = animationStyles[randomIndex];

      setAnimationStyle(newAnimationStyle);
      setTimeout(() => {
        setTextIndex(0);
        textContainer.textContent = "";
      }, 2000);
    }
  }, [textIndex, animationStyle]);

  return (
    <div className="HomePage">
      <header className={`HomePage-header ${animationStyle}`}>
        <div
          className="git-linux-junction fade-in"
          style={{ color: "#bdc3c7", marginBottom: "20px" }}
        >
          GIT-LINUX-JUNCTION
        </div>
        <div className="animated-text"></div>
        <div className="buttons-container">
          <Link to="/git" className="button git">
            Explore Git
          </Link>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
