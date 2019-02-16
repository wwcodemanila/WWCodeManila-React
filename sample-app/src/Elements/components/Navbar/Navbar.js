import React from "react";
import NavbarMenu from "./NavbarMenu";
import NavbarBrand from "./NavbarBrand";

const menuList = [
  {
    menuLabel: "Home",
    link: "/"
  },
  {
    menuLabel: "About React",
    link: "/about"
  },
  {
    menuLabel: "References",
    link: "/references"
  }
];

const Navbar = () => (
  <nav className="navbar" aria-label="main navigation">
    <NavbarBrand />
    <NavbarMenu menuList={menuList} />
  </nav>
);

export default Navbar;
