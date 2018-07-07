import React from "react";
import { Link } from "react-router-dom";

const NavbarBrand = () => (
  <Link className="navbar-brand" to="/">
    <img
      src={require("assets/images/WWCodeManila-Logo.png")}
      alt="Women Who Code Manila"
      className="logo"
    />
  </Link>
);

export default NavbarBrand;
