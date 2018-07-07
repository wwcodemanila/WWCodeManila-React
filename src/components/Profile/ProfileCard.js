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
import PageContent from "components/Elements/PageContent";

const ProfileCard = () => {
  return (
    <PageContent
      title="Barbarocks"
      description="Wizarding web dev and proud of it"
    >
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
                <p className="title is-4">Barbara Batumbakal</p>
                <p className="subtitle is-6">Member, Women Who Code Manila</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContent>
  );
};

export default ProfileCard;
