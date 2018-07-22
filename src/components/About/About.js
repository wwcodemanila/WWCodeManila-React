import React from "react";

import PageContent from "components/Elements/PageContent";
import ReactTools from "components/About/ReactTools";
import Slides from "components/About/Slides";

const whatIsReact = (
  <section className="container">
    <p className="subtitle">
      React is a Javascript library developed by Facebook for building user
      interfaces.
    </p>
    <h3 className="subtitle">Why React?</h3>
    <p>
      <ul>
        <li>
          Everything is made of components which have a well-defined life cycle
        </li>
        <li>React uses JSX which allows "writing HTML" with Javascript</li>
        <li>
          VirtualDOM makes react faster (<a href="https://www.youtube.com/watch?v=BYbgopx44vo">
            watch "The Story of Virtual DOM"
          </a>)
        </li>
      </ul>
    </p>
  </section>
);

const About = () => (
  <React.Fragment>
    <PageContent title="About React">
      {whatIsReact}
      <ReactTools />
      <Slides />
    </PageContent>
  </React.Fragment>
);

export default About;
