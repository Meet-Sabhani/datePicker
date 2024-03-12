import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavbarStyle } from "./NavbarStyle";

export const Navbar = () => {
  const location = useLocation();
  return (
    <NavbarStyle>
      <Link to={"/"} className={location.pathname === "/" ? "active" : ""}>
        Holiday Define
      </Link>
      <Link
        to={"/tripeBook"}
        className={location.pathname === "/tripeBook" ? "active" : ""}
      >
        Select Trip Days
      </Link>
    </NavbarStyle>
  );
};
