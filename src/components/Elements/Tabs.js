import React from "react";

const Tabs = ({ label, status, onClick }) => (
  <li className={status} onClick={onClick}>
    <a>
      <span className="icon is-small"><i className="fas fa-image" aria-hidden="true"></i></span>
      <span>{label}</span>
    </a>
  </li>
)

export default Tabs;