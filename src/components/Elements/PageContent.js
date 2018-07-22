import React from "react";

const PageContent = ({ title, description, children }) => (
  <React.Fragment>
    <section className="hero is-light">
      <div className="hero-body">
        <h3 className="title has-text-centered">{title}</h3>
        <p className="has-text-centered">{description}</p>
      </div>
    </section>
    <section className="container content">{children}</section>
  </React.Fragment>
);

export default PageContent;
