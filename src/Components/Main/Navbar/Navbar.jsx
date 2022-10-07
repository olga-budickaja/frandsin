import React from "react";
import style from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
      <div className={style.navBar}>
            <nav className={style.navBarNav}>
                <NavLink to={'/profile'} className={style.navBarNavItem}></NavLink>
                <NavLink to={'/media'} className={style.navBarNavItem}></NavLink>
                <NavLink to={'/groups'} className={style.navBarNavItem}></NavLink>
                <NavLink to={'/music'} className={style.navBarNavItem}></NavLink>
                <NavLink to={'/weather'} className={style.navBarNavItem}></NavLink>
            </nav>
      </div>
    )
}

export default Navbar;