import React from "react";

const PageContent = ({ title, children }) => (
  <React.Fragment>
    <section className="hero is-light">
      <div className="hero-body">
        <h3 className="title has-text-centered">{title}</h3>
      </div>
    </section>
    <section className="container">{children}</section>
  </React.Fragment>
);

export default PageContent;
