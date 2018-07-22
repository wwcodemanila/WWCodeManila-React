import React from "react";
import { Link } from "react-router-dom";

const wwcodeLogo = require("assets/images/wwcode.png");

const NavbarBrand = () => (
  <Link className="navbar-brand" to="/">
    <img src={wwcodeLogo} alt="Women Who Code Manila" className="logo" />
  </Link>
);

export default NavbarBrand;
