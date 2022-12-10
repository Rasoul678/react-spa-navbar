import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "./navbar.css";

interface IProps {}

const Navbar: React.FC<IProps> = (props) => {
  return (
    <Router>
      <div className="navbar__wrapper">
        <NavLink to="/">
          <h2>Single SPA (Part One in ReactJS)</h2>
        </NavLink>
        <div className="flex-between">
          <NavLink to="/contact">contact</NavLink>
          <NavLink to="/about">about</NavLink>
        </div>
      </div>
    </Router>
  );
};

export default Navbar;
