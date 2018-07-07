import React from "react";
import { Link } from "react-router-dom";

const NavbarMenu = ({ menuList }) => (
  <div className="navbar-menu">
    <div className="navbar-end">
      {menuList.map((menuItem, index) => (
        <Link key={index} className="navbar-item" to={menuItem.link}>
          {menuItem.menuLabel}
        </Link>
      ))}
    </div>
  </div>
);

export default NavbarMenu;
