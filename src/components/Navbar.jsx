import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ButtonLogout from "./ButtonLogout";

const Navbar = () => {
  const { user, token } = useSelector((state) => state.auth);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {!user && (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </>
      )}
      {user && (
        <>
          <NavLink to="/about">About</NavLink>
          <ButtonLogout />
        </>
      )}
    </nav>
  );
};

export default Navbar;
