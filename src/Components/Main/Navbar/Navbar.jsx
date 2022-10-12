import React from "react";
import style from "./Navbar.module.scss";
import {NavLink} from "react-router-dom";
import { ReactComponent as Timeline } from "../../../Redux/icons/timeline.svg";
import { ReactComponent as Stars } from "../../../Redux/icons/star.svg";
import { ReactComponent as Groups } from "../../../Redux/icons/group.svg";
import { ReactComponent as Weather } from "../../../Redux/icons/weaser.svg";
import { ReactComponent as Music } from "../../../Redux/icons/headphones.svg";

const Navbar = () => {
    return (
      <div className={style.navBar}>
            <nav className={style.navBarNav}>
                <NavLink to={'/timeline'} className={style.navBarNavItem}>
                    <Timeline />
                </NavLink>
                <NavLink to={'/favorites'} className={style.navBarNavItem}>
                    <Stars />
                </NavLink>
                <NavLink to={'/groups'} className={style.navBarNavItem}>
                    <Groups />
                </NavLink>
                <NavLink to={'/music'} className={style.navBarNavItem}>
                    <Music />
                </NavLink>
                <NavLink to={'/weather'} className={style.navBarNavItem}>
                    <Weather />
                </NavLink>
            </nav>
      </div>
    )
}

export default Navbar;