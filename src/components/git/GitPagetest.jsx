import React, { useState } from "react";
import gitBackgroundImage from "./git-background.jpg";
import "./GitPagetest.css";


const GitPage = () => {
  const [selectedSection, setSelectedSection] = useState("Getting Started");

  const containerStyle = {
    backgroundImage: `url(${gitBackgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "300vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    borderRight: "4px solid #000",
    backgroundAttachment: "fixed",
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
    color: "white",
    fontSize: "200px",
    height: "100%"
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
        <h2 style={{ marginBottom: "20px", fontSize: "60px" }}>Git Guide</h2>
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
        </ul>
      </div>

      <div className="content-container">
        <h2 style={animatedTextStyle}>{selectedSection}</h2>
        {selectedSection === "Getting Started" && (
          <section>
            <h2>What is Version Control?</h2>
            <p>
              Version control is a system that helps track changes to files over
              time. It allows multiple contributors to collaborate on a project,
              keeps a historical record of changes, and enables the management
              of different versions of files.
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

        {/* <h2>GIT COMMANDS</h2> */}
        <section>
          <h2>1) Initialization : </h2>
          <pre class="hljs">
            <code>git init </code>
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

          <h2>11) Remote Branches</h2>
          <pre class="hljs">
            <code>git fetch</code>
          </pre>
          <p>Fetches changes from a remote repository.</p>

          <pre class="hljs">
            <code>git branch -r</code>
          </pre>
          <p>Lists remote branches.</p>

          <pre class="hljs">
            <code>git pull origin branchname</code>
          </pre>
          <p>Pulls changes from a remote branch.</p>

          <h2>12) Tagging</h2>
          <pre class="hljs">
            <code>git tag tagname</code>
          </pre>
          <p>Creates a lightweight tag on the current commit.</p>
          <pre class="hljs">
            <code>git tag -a tagname -m "Tag message"</code>
          </pre>
          <p>Creates an annotated tag with a message.</p>

          <h2>13) Stashing</h2>
          <pre class="hljs">
            <code>git stash</code>
          </pre>
          <p>Temporarily saves changes that are not ready to be committed.</p>
          <pre class="hljs">
            <code>git stash apply</code>
          </pre>
          <p>Applies the latest stash.</p>
          <pre class="hljs">
            <code>git stash list</code>
          </pre>
          <p>Lists all stashes.</p>

          <h2>14) Cloning</h2>
          <pre class="hljs">
            <code>git clone repository_url</code>
          </pre>
          <p>Copies a remote repository to your local machine.</p>

          <h2>15) Removing and Deleting</h2>
          <pre class="hljs">
            <code>git rm filename</code>
          </pre>
          <p>
            Removes a file from both the working directory and the staging area.
          </p>
          <pre class="hljs">
            <code>git mv old_filename new_filename</code>
          </pre>
          <p>Renames a file.</p>

          <h2>16) Ignoring Files</h2>
          <p>
            Create a file named <code>.gitignore</code> to specify files or
            patterns to ignore.
          </p>

          <h2>17) Fetching and Pulling</h2>
          <pre class="hljs">
            <code>git fetch origin</code>
          </pre>
          <p>Fetches changes from the remote repository without merging.</p>
          <pre class="hljs">
            <code>git pull origin branchname --rebase</code>
          </pre>
          <p>Pulls changes and integrates them by rebasing.</p>

          <h2>18) Branch Deletion</h2>
          <pre class="hljs">
            <code>git branch -d branchname</code>
          </pre>
          <p>Deletes a local branch.</p>
          <pre class="hljs">
            <code>git push origin --delete branchname</code>
          </pre>
          <p>Deletes a remote branch.</p>

          <h2>19) Configuring Aliases</h2>
          <pre class="hljs">
            <code>git config --global alias.youralias "original command"</code>
          </pre>
          <p>Creates a custom alias for a command.</p>

          <h2>20) Interactive Rebase</h2>
          <pre class="hljs">
            <code>git rebase -i commit_hash</code>
          </pre>
          <p>Interactively rewrites commit history.</p>

          <h2>21) Git Help</h2>
          <pre class="hljs">
            <code>git help command</code>
          </pre>
          <p>Displays help for a specific command.</p>

          <h2>22) Checking Out</h2>
          <pre class="hljs">
            <code>git checkout filename</code>
          </pre>
          <p>Discards changes in a specific file.</p>

          <h2>23) Viewing Remote URLs</h2>
          <pre class="hljs">
            <code>git remote -v</code>
          </pre>
          <p>Shows URLs of remote repositories.</p>

          <h2>24) Creating a New Branch and Switching</h2>
          <pre class="hljs">
            <code>git checkout -b newbranch</code>
          </pre>
          <p>Creates and switches to a new branch in one command.</p>

          <h2>25) Amending the Last Commit</h2>
          <pre class="hljs">
            <code>git commit --amend</code>
          </pre>
          <p>Adds changes to the previous commit.</p>

          <h2>26) Discarding Changes</h2>
          <pre class="hljs">
            <code>git restore filename</code>
          </pre>
          <p>Discards changes in a file (available in Git 2.23 and later).</p>
          <pre class="hljs">
            <code>git checkout -- filename</code>
          </pre>
          <p>Discards changes in a file (prior to Git 2.23).</p>

          <h2>27) Cherry-Picking</h2>
          <pre class="hljs">
            <code>git cherry-pick commit_hash</code>
          </pre>
          <p>Applies the changes of a specific commit to the current branch.</p>

          <h2>28) Viewing Branches</h2>
          <pre class="hljs">
            <code>git branch</code>
          </pre>
          <p>Lists all local branches.</p>
          <pre class="hljs">
            <code>git branch -a</code>
          </pre>
          <p>Lists all branches, including remote branches.</p>

          <h2>29) Changing the Last Commit Message</h2>
          <pre class="hljs">
            <code>git commit --amend -m "New commit message"</code>
          </pre>
          <p>Changes the last commit message.</p>

          <h2>30) Squashing Commits</h2>
          <pre class="hljs">
            <code>git rebase -i HEAD~n</code>
          </pre>
          <p>Opens an interactive rebase window to squash commits.</p>

          <h2>31) Showing the Commit that Modified a File</h2>
          <pre class="hljs">
            <code>git log -p filename</code>
          </pre>
          <p>
            Shows the commit history along with changes for a specific file.
          </p>

          <h2>32) Git GUI</h2>
          <pre class="hljs">
            <code>git gui</code>
          </pre>
          <p>
            Opens the Git GUI for a visual representation of the repository.
          </p>

          <h2>33) Creating and Applying Patches</h2>
          <pre class="hljs">
            <code>git format-patch -1 commit_hash</code>
          </pre>
          <p>Creates a patch file for a specific commit.</p>
          <pre class="hljs">
            <code>git apply patchfile</code>
          </pre>
          <p>Applies a patch file.</p>

          <h2>34) Setting Upstream Branch</h2>
          <pre class="hljs">
            <code>git branch --set-upstream-to=origin/branchname</code>
          </pre>
          <p>Sets the upstream branch for the current local branch.</p>

          <h2>35) Git Bisect</h2>
          <pre class="hljs">
            <code>git bisect start</code>
          </pre>
          <p>Initiates a binary search to find a specific commit.</p>
          <pre class="hljs">
            <code>git bisect good commit_hash</code>
          </pre>
          <p>Marks a commit as good.</p>
          <pre class="hljs">
            <code>git bisect bad commit_hash</code>
          </pre>
          <p>Marks a commit as bad.</p>
          <pre class="hljs">
            <code>git bisect reset</code>
          </pre>
          <p>Ends the bisect session.</p>

          <h2>36) Creating a Repository</h2>
          <pre class="hljs">
            <code>git init --bare new-repo.git</code>
          </pre>
          <p>
            Creates a bare repository (useful for setting up a remote
            repository).
          </p>

          <h2>37) Blaming</h2>
          <pre class="hljs">
            <code>git blame filename</code>
          </pre>
          <p>Shows the commit information for each line in a file.</p>

          <h2>38) Untracking Files</h2>
          <pre class="hljs">
            <code>git rm --cached filename</code>
          </pre>
          <p>Stops tracking a file without deleting it.</p>

          <h2>39) Interactive Staging</h2>
          <pre class="hljs">
            <code>git add -i</code>
          </pre>
          <p>Interactively stage changes.</p>

          <h2>40) Reflog</h2>
          <pre class="hljs">
            <code>git reflog</code>
          </pre>
          <p>Shows a log of all changes to the repository.</p>

          <h2>41) Resetting Changes</h2>
          <pre class="hljs">
            <code>git reset HEAD filename</code>
          </pre>
          <p>Unstages changes for a specific file.</p>

          <h2>42) Finding a File</h2>
          <pre class="hljs">
            <code>git ls-files | grep keyword</code>
          </pre>
          <p>Finds a file containing a specific keyword.</p>

          <h2>43) Git Submodules</h2>
          <pre class="hljs">
            <code>git submodule add repository_url path</code>
          </pre>
          <p>Adds a submodule to the repository.</p>

          <h2>44) Cleaning Untracked Files</h2>
          <pre class="hljs">
            <code>git clean -n</code>
          </pre>
          <p>Shows untracked files to be cleaned.</p>
          <pre class="hljs">
            <code>git clean -f</code>
          </pre>
          <p>Cleans untracked files.</p>

          <h2>45) Merge Conflict Resolution</h2>
          <p>After a failed merge, edit the conflicted files, then:</p>
          <pre class="hljs">
            <code>git add filename</code>
          </pre>
          <p>Marks the conflict as resolved.</p>
          <pre class="hljs">
            <code>git merge --continue</code>
          </pre>
          <p>Continues the merge process.</p>

          <h2>46) Custom Diffs</h2>
          <pre class="hljs">
            <code>git diff --word-diff</code>
          </pre>
          <p>Shows word-level differences.</p>
          <pre class="hljs">
            <code>git diff --stat</code>
          </pre>
          <p>Shows a summary of changes.</p>

          <h2>47) Checking Out a Specific Commit</h2>
          <pre class="hljs">
            <code>git checkout commit_hash</code>
          </pre>
          <p>Checks out a specific commit.</p>

          <h2>48) Creating a Patch File</h2>
          <pre class="hljs">
            <code>git diff > patchfile</code>
          </pre>
          <p>Creates a patch file for uncommitted changes.</p>

          <h2>49) Git Archive</h2>
          <pre class="hljs">
            <code>git archive --format=zip --output=archive.zip HEAD</code>
          </pre>
          <p>Creates a zip archive of the repository.</p>
        </section>
      </div>
    </div>
  );
};

export default GitPage;