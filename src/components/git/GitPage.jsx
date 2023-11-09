import React from "react";
import "./GitPage.css";
import gitBackgroundImage from "./git-background.jpg";

const GitPage = () => {
  const containerStyle = {
    backgroundImage: `url(${gitBackgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "row", // Updated to row
    alignItems: "center",
  };

  const sidebarStyle = {
    width: "350px", // Adjusted width
    padding: "20px",
    marginRight: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRight: "1px solid #555",
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
  };

  const fadeInAnimation = `
    @keyframes fadeInFromTop {
      from {
        opacity: 0;
        transform: translateY(-100px); /* Change the translateY value to adjust the initial position */
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Apply the animation to all elements within the container */
    .container {
      animation: fadeInFromTop 1s ease-out; /* Adjust the duration and easing as needed */
    }

    /* Apply the animation to specific elements within the container */
    .container h2,
    .container p,
    .container button {
      animation: fadeInFromTop 1s ease-out; /* Adjust the duration and easing as needed */
    }
  `;

  return (
    <div style={containerStyle} className="container">
      <style>{fadeInAnimation}</style>
      <div style={sidebarStyle}>
        <h2 style={{ marginBottom: "20px", fontSize: "35px" }}>Git Guide</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={navItemStyle}>
            <button style={buttonStyle}>Getting Started</button>
          </li>
          <li style={navItemStyle}>
            <button style={buttonStyle}>Git Basics</button>
          </li>
          <li style={navItemStyle}>
            <button style={buttonStyle}>Git Branching</button>
          </li>
          <li style={navItemStyle}>
            <button style={buttonStyle}>Git on the Server</button>
          </li>
          <li style={navItemStyle}>
            <button style={buttonStyle}>Distributed Git</button>
          </li>
          <li style={navItemStyle}>
            <button style={buttonStyle}>GitHub</button>
          </li>
        </ul>
      </div>

      <div
        style={{
          flex: 1,
          padding: "20px",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          fontSize: "25px",
        }}
      >
        <h2 style={animatedTextStyle}>Getting Started with GitHub</h2>
        <section>
          <h2>What is Version Control?</h2>
          <p>
            Version control is a system that records changes to a file or set of
            files over time so that you can recall specific versions later. It
            allows you to track modifications, revert to previous stages, and
            work collaboratively with others.
          </p>
        </section>

        <section>
          <h2>What is Git?</h2>
          <p>
            Git is a distributed version control system that enables multiple
            developers to work on a project simultaneously. It tracks changes,
            maintains a history of edits, and facilitates collaboration without
            conflicts.
          </p>
        </section>

        <section>
          <h2>Git Basics</h2>
          <p>
            Git has a few basic commands that help you manage your
            version-controlled projects. Learn about commands like commit, push,
            pull, branch, and merge.
          </p>
        </section>

        <section>
          <h2>Git Branching Strategies</h2>
          <p>
            Understanding branching strategies is crucial for efficient
            collaboration. Explore different branching models, such as feature
            branching and Gitflow.
          </p>
        </section>

        <section>
          <h2>Collaborating on GitHub</h2>
          <p>
            GitHub is a popular platform for hosting Git repositories. Learn how
            to collaborate with others, contribute to open source projects, and
            use pull requests for code review.
          </p>
        </section>

        <section>
          <h2>Git Best Practices</h2>
          <p>
            Discover best practices for using Git, including commit message
            conventions, keeping commits atomic, and managing large repositories
            effectively.
          </p>
        </section>

        <section>
          <h2>Advanced Git Techniques</h2>
          <p>
            Dive deeper into Git with advanced topics like rebasing,
            cherry-picking, and interactive rebase. These techniques can help
            you maintain a clean and organized commit history.
          </p>
        </section>

        <section>
          <h2>Git Hooks</h2>
          <p>
            Git hooks allow you to automate actions at various points in the Git
            workflow. Explore pre-commit hooks, post-commit hooks, and more to
            enhance your development process.
          </p>
        </section>
        <section>
          <h2>Advanced Git Techniques</h2>
          <p>
            Git offers powerful features beyond the basics. Explore these
            advanced techniques to enhance your version control workflow.
          </p>

          <h3>Rebasing</h3>
          <p>
            Git rebase allows you to move or combine a sequence of commits to a
            new base commit. This can result in a cleaner and more linear commit
            history compared to merging.
          </p>

          <h3>Cherry-Picking</h3>
          <p>
            Cherry-picking enables you to select specific commits and apply them
            to a different branch. It's a useful tool for incorporating only the
            changes you need.
          </p>

          <h3>Interactive Rebase</h3>
          <p>
            Interactive rebase provides a flexible way to modify and organize
            your commit history. You can squash, edit, delete, or reorder
            commits interactively.
          </p>

          <h3>Submodules</h3>
          <p>
            Git submodules allow you to include other Git repositories within
            your own. This is helpful when you want to maintain a separate,
            version-controlled project within a larger one.
          </p>

          <h3>Git Workflows</h3>
          <p>
            Explore different Git workflows, such as GitHub flow or Gitflow, and
            choose the one that best fits your project's requirements and
            collaboration style.
          </p>

          <h3>Git Bisect</h3>
          <p>
            Git bisect helps you find the commit that introduced a bug by
            performing a binary search through your commit history. It's a
            valuable tool for identifying when an issue was introduced.
          </p>

          <h3>Git Stash</h3>
          <p>
            Git stash allows you to save changes that are not ready to be
            committed yet. This is useful when you need to switch branches or
            address an urgent issue without committing incomplete work.
          </p>
        </section>
      </div>
    </div>
  );
};

export default GitPage;
