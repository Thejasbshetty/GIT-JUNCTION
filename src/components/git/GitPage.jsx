// components/git/GitPage.js
import React from "react";
import "./GitPage.css";
import gitBackgroundImage from "./git-background.jpg";

const GitPage = () => {
  const containerStyle = {
    backgroundImage: `url(${gitBackgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh", // Adjust as needed
    display: "flex",
  };

  const sidebarStyle = {
    width: "200px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "20px",
    marginRight: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRight: "1px solid #ccc", // Vertical line added here
  };

  const contentStyle = {
    flex: 1,
  };

  return (
    <div style={containerStyle}>
      <div style={sidebarStyle}>
        <h2>Git Info</h2>
        <ul>
          <li>
            <button>Introduction</button>
          </li>
          <li>
            <button>Getting Started</button>
          </li>
          <li>
            <button>Branching</button>
          </li>
          <li>
            <button>Merging</button>
          </li>
          <li>
            <button>Remote Repositories</button>
          </li>
          <li>
            <button>Troubleshooting</button>
          </li>
        </ul>
      </div>

      <div style={contentStyle}>
        <h1>Git Page</h1>

        {/* Navbar for Git Commands */}
        <div style={{ marginBottom: "20px" }}>
          <h2>Git Commands</h2>
          {/* Add content for Git Commands */}
        </div>

        {/* Content for Git Page */}
        <p>
          Git is a distributed version control system for tracking changes in
          source code during software development. It is designed to handle
          everything from small to very large projects.
        </p>

        <p>
          Git is a powerful tool that can be used to manage a wide variety of
          files, including code, documentation, and images. It is also very
          flexible and can be customized to fit the needs of any project.
        </p>
      </div>
    </div>
  );
};

export default GitPage;
