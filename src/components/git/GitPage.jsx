import React, { useState } from "react";
import gitBackgroundImage from "./git-background.jpg";
import "./GitPage.css"; // Import the new CSS file
// import "./Copy";
// import "./copyss";

const GitPage = () => {
  const [selectedSection, setSelectedSection] = useState("Getting Started");

  const containerStyle = {
    backgroundImage: `url(${gitBackgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "relative", // Added position relative
    borderRight: "4px solid #000", // Vertical line
  };


  const sidebarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "300px",
    padding: "20px",
    marginRight: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRight: "1px solid #555",
    opacity: 1,
    transform: "translateY(0)",
    animation: "fadeInFromTop 1s ease-out",
  };

  const navItemStyle = {
    marginBottom: "15px",
    fontSize: "60px",
    color: "#fff",
    cursor: "pointer",
    transition: "color 0.3s ease",
  };

  const buttonStyle = {
    backgroundColor: "#397367",
    color: "#fff",
    padding: "25px",
    border: "none",
    borderRadius: "15px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    fontSize: "20px",
  };

  const animatedTextStyle = {
    fontSize: "80px",
    color: "#fff",
    marginBottom: "20px",
    animation: "fadeInFromTop 3s",
    marginRight: "350px",
  };

  const fadeInAnimation = `
    @keyframes fadeInFromTop {
      from {
        opacity: 0;
        transform: translateY(-100px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .container {
      animation: fadeInFromTop 1s ease-out;
    }

    .container h2,
    .container p,
    .container button {
      animation: fadeInFromTop 1s ease-out;
    }
  `;

  

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div style={containerStyle} className="container">
      <style>{fadeInAnimation}</style>
      <div
        style={{
          ...sidebarStyle,
          fadeInAnimation,
          ...{ animation: "fadeInFromTop 1s ease-out" },
        }}
      >
        <h2 style={{ marginBottom: "20px", fontSize: "35px" }}>Git Guide</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={navItemStyle}>
            <button
              style={buttonStyle}
              onClick={() => handleSectionClick("Getting Started")}
            >
              Getting Started
            </button>
          </li>
          <li style={navItemStyle}>
            <button
              style={buttonStyle}
              onClick={() => handleSectionClick("Git Commands")}
            >
              Git Commands
            </button>
          </li>
          <li style={navItemStyle}>
            <button
              style={buttonStyle}
              onClick={() => handleSectionClick("Git Branching Strategies")}
            >
              Git Branching Strategies
            </button>
          </li>
          <li style={navItemStyle}>
            <button
              style={buttonStyle}
              onClick={() => handleSectionClick("Collaborating on GitHub")}
            >
              Collaborating on GitHub
            </button>
          </li>
          <li style={navItemStyle}>
            <button
              style={buttonStyle}
              onClick={() => handleSectionClick("Git Best Practices")}
            >
              Git Best Practices
            </button>
          </li>
          <li style={navItemStyle}>
            <button
              style={buttonStyle}
              onClick={() => handleSectionClick("Advanced Git Techniques")}
            >
              Advanced Git Techniques
            </button>
          </li>
          <li style={navItemStyle}>
            <button
              style={buttonStyle}
              onClick={() => handleSectionClick("Git Hooks")}
            >
              Git Hooks
            </button>
          </li>

          {/* Add similar buttons for other sections */}
        </ul>
      </div>

      <div className="content-container">
        <h2 style={animatedTextStyle}>{selectedSection}</h2>
        {/* Render content based on the selected section */}
        {selectedSection === "Getting Started" && (
          <section>
            <h2>What is Version Control?</h2>
            <p>
              Version control is a system that records changes to a file or set
            </p>
            <h2>What is Git, and why should I use it?</h2>
            <p>
              Git is a distributed version control system that helps you track
              changes in your code. It allows multiple people to collaborate on
              projects efficiently. You should use it to keep a history of
              changes, work on different features simultaneously, and easily
              merge and manage code from different contributors.
            </p>
            <h2>How do I start using Git on my project?</h2>
            <p>
              First, initialize a Git repository in your project folder using
              git init. This sets up Git for your project. Then, use git add to
              stage changes and git commit to save those changes. Voila! You've
              started using Git.
            </p>
            <h2> What is the difference between Git commit and Git push?</h2>
            <p>
              git commit records changes to the repository, but it's local to
              your machine. git push is used to upload local repository content
              to a remote repository. In simple terms, commit is like saving
              changes on your computer, and push is like sharing those saved
              changes with others on a shared platform.
            </p>

            <h2>How can I collaborate with others using Git?</h2>
            <p>
              Collaborating involves sharing your changes and incorporating
              others'. Use git pull to fetch changes from a remote repository,
              and git push to upload your changes. When collaborating, git
              branch is handy for creating separate lines of development
              (branches), and git merge combines those branches.
            </p>

            <h2>
              What is a Git repository, and what's the difference between a
              local and remote repository?
            </h2>
            <p>
              {" "}
              A Git repository is like a project's folder that Git is tracking.
              A local repository is on your machine, and a remote repository is
              hosted on a server, like GitHub or GitLab. You work in your local
              repository, and when you're ready, you can push your changes to
              the remote repository to share them.
            </p>
          </section>
        )}
        <section>
          <h2>1) Initialization : </h2>
          <pre class="hljs">
            <code>git init</code>
            <button class="hljs-copy-button" type="button">
              Copy
            </button>
          </pre>
          <p>Initializes a new Git repository.</p>
          <h2>2) Configuration :</h2>
          <pre class="hljs">
            <code>git config --global user.name "Your Name"</code>
          </pre>
          <p>Sets your username.</p>
          <pre class="hljs">
            <code>git config --global user.email "your.email@example.com"</code>
          </pre>
          <p>Sets your email.</p>

          <h2>3) Adding and Committing :</h2>
          <pre class="hljs">
            <code>git add filename</code>
          </pre>
          <p>Stages changes for commit.</p>

          <pre class="hljs">
            <code>git add .</code>
          </pre>
          <p>Stages all changes for commit.</p>

          <pre class="hljs">
            <code>git commit -m "Your commit message"</code>
          </pre>
          <p>Commits staged changes.</p>

          <h2>4) Status and Differences:</h2>

          <pre class="hljs">
            <code>git status</code>
          </pre>
          <p>Shows the status of changes.</p>

          <pre class="hljs">
            <code>git diff</code>
          </pre>
          <p>Shows changes between working directory and last commit.</p>

          <h2>5) Branching</h2>
          <pre class="hljs">
            <code>git branch branchname</code>
          </pre>
          <p> Creates a new branch.</p>

          <pre class="hljs">
            <code>git checkout branchname</code>
          </pre>
          <p>Switches to an existing branch.</p>

          <pre class="hljs">
            <code>git checkout -b newbranch</code>
          </pre>
          <p>Creates and switches to a new branch</p>

          <h2>6) Merging</h2>
          <pre class="hljs">
            <code>git merge branchname</code>
          </pre>
          <p>Merges changes from the specified branch.</p>

          <h2>7) Remote Repositories</h2>
          <pre class="hljs">
            <code>git remote add origin remote_repository_url</code>
          </pre>
          <p>Links your local repository to a remote one.</p>

          <pre class="hljs">
            <code>git remote -v</code>
          </pre>
          <p>Shows the remote repositories linked to your local repository.</p>

          <h2>8) Pushing and Pulling:</h2>
          <pre class="hljs">
            <code>git push origin branchname</code>
          </pre>
          <p>Pushes changes to a remote repository.</p>

          <pre class="hljs">
            <code>git pull origin branchname</code>
          </pre>
          <p>Pulls changes from a remote repository.</p>

          <h2>9) Logs and History</h2>
          <pre class="hljs">
            <code>git log</code>
          </pre>
          <p>Shows commit history.</p>

          <pre class="hljs">
            <code>git log --oneline</code>
          </pre>
          <p>Shows abbreviated commit history.</p>

          <h2>10) Undoing Changes</h2>
          <pre class="hljs">
            <code>git reset filename</code>
          </pre>
          <p>Unstages changes.</p>

          <pre class="hljs">
            <code>git reset --hard commit_hash</code>
          </pre>
          <p>Discards changes and resets to a specific commit.</p>

          <pre class="hljs">
            <code>git revert commit_hash</code>
          </pre>
          <p>Reverts changes introduced by a specific commit.</p>
        </section>

        {/* <section>
          <h2>Git Branching Strategies</h2>
          <p>Understanding branching strategies is crucial for efficient</p>
        </section> */}
      </div>
    </div>
  );
};

export default GitPage;