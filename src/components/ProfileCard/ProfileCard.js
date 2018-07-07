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
    <PageContent title="My Profile Card">
      <div className="card">
        <div className="card-content">
          <p className="title">Barbara Batumbakal</p>
          <p className="subtitle">Member, Women Who Code Manila</p>
        </div>
      </div>
    </PageContent>
  );
};

export default ProfileCard;
