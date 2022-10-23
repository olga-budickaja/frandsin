import React from "react";
import style from "./Navbar.module.scss";
import {NavLink} from "react-router-dom";
import { ReactComponent as Timeline } from "../../../Redux/asscess/icons/timeline.svg";
import { ReactComponent as Stars } from "../../../Redux/asscess/icons/star.svg";
import { ReactComponent as Groups } from "../../../Redux/asscess/icons/group.svg";
import { ReactComponent as Weather } from "../../../Redux/asscess/icons/weaser.svg";
import { ReactComponent as Music } from "../../../Redux/asscess/icons/headphones.svg";

const Navbar = () => {
    return (
      <div className={style.navBar}>
            <nav className={style.navBarNav}>
                <NavLink to={'frandsin/timeline'} className={style.navBarNavItem}>
                    <Timeline />
                </NavLink>
                <NavLink to={'frandsin/favorites'} className={style.navBarNavItem}>
                    <Stars />
                </NavLink>
                <NavLink to={'frandsin/profile'} className={style.navBarNavItem}>
                    <Groups />
                </NavLink>
                <NavLink to={'frandsin/music'} className={style.navBarNavItem}>
                    <Music />
                </NavLink>
                <NavLink to={'frandsin/weather'} className={style.navBarNavItem}>
                    <Weather />
                </NavLink>
            </nav>
      </div>
    )
}

export default Navbar;