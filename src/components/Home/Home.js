import React from "react";
import Banner from "components/Home/Banner";
import ProjectsList from "components/Home/ProjectsList";

const Instructions = (
  <div className="container">
    <div className="message is-info">
      <div className="message-header">
        <span>Instructions</span>
      </div>
      <div className="message-body">
        <p>
          If it's your first time pulling this repository, please create a
          branch from this repository by using the git command: <br />
          <code>git checkout -b your-name-hacks</code>
        </p>
        <br />
        <p>
          Feel free to share your code and push it to your branch in the
          repository. Happy hacking!
        </p>
      </div>
    </div>
  </div>
);

const Home = () => (
  <React.Fragment>
    <Banner />
    {Instructions}
    <ProjectsList />
  </React.Fragment>
);

export default Home;
