import React from "react";
import { Link } from "react-router-dom";
import wwcodeLogo from "../../../assets/images/wwcode.png"
import styles from "../../elements.module.scss"

const NavbarBrand = () => (
  <Link className="navbar-brand" to="/">
    <img src={wwcodeLogo} alt="Women Who Code Manila" className={styles.logo} />
  </Link>
);

export default NavbarBrand;
