import React from "react";
import NavbarMenu from "./NavbarMenu";
import NavbarBrand from "./NavbarBrand";

const menuList = [
  {
    menuLabel: "Home",
    link: "/"
  },
  {
    menuLabel: "About",
    link: "/about"
  }
];

const Navbar = () => (
  <nav className="navbar" aria-label="main navigation">
    <NavbarBrand />
    <NavbarMenu menuList={menuList} />
  </nav>
);

export default Navbar;
