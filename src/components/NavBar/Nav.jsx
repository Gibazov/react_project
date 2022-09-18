import React from "react";
import classes from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const NavActiveLink = ({ isActive }) =>
  isActive ? classes.nav_active : classes.nav_activeLink;

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.nav_item}>
        <NavLink to="/profile" className={NavActiveLink}>
          Profile{" "}
        </NavLink>
      </div>
      <div className={classes.nav_item}>
        <NavLink to="/dialogs" className={NavActiveLink}>
          Messages
        </NavLink>
      </div>
      <div className={classes.nav_item}>
        <NavLink to="/news" className={NavActiveLink}>
          News
        </NavLink>
      </div>
      <div className={classes.nav_item}>
        <NavLink to="/music" className={NavActiveLink}>
          Music
        </NavLink>
      </div>
      <div className={classes.nav_item}>
        <NavLink to="/settings" className={NavActiveLink}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};
export default Nav;
