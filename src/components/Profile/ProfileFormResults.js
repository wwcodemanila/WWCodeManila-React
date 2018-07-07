/**
 * This is the basic structure of a stateless component
 *
 * To differentiate components from HTML elements when rendering,
 * component file names start with an uppercase letter.
 *
 * Every component should return a view.
 *
 * Take note that the rendered view is not HTML,
 * attributes similar to HTML elements are named differently
 * i.e. className for class
 *
 * Feel free to modify this and explore components.
 */

import React from "react";

const ProfileCard = ({ name, message }) => {
  return (
    <div className="columns is-centered">
      <div className="column is-narrow is-half">
        <div className="card card-content">
          <div className="media">
            <div className="media-left">
              <img
                className="image is-48x48"
                src={require("assets/images/headshot.jpg")}
                alt="headshot"
              />
            </div>
            <div className="media-content">
              <p className="title is-4">{name}</p>
              <p className="subtitle is-6">{message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
