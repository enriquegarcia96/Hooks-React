import React from "react";
import {  NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="nav nav-pills nav-justified">
      <NavLink  to={'/'} className="nav-link ">useContext</NavLink>

      <NavLink exact="true"  className="nav-link"  to={"/"}>
        Home
      </NavLink>

      <NavLink exact="true" className="nav-link" to={"/about"}>
        About
      </NavLink>

      <NavLink exact="true" className="nav-link " to={"/login"}>
        Login
      </NavLink>
    </nav>
  );
};
