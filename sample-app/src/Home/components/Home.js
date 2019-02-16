import React from "react";
import Banner from "./Banner";
import ProjectsList from "./ProjectsList";

const Instructions = (
  <div className="container">
    <div className="message is-info">
      <div className="message-header">
        <span>Instructions</span>
      </div>
      <div className="message-body">
        <p>
          If it's your first time pulling this repository, please fork from this
          repository and then clone it to your local machine by using the git
          command: <br />
          <code>git clone git@github.com:username/WWCodeManila-React.git</code>
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
