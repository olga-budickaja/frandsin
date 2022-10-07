import React from "react";
import style from "./Sidebar.module.css"
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={style.sideBar}>
            <nav className={style.sideBarNav}>
                <NavLink to={'/user1'} className={style.sideBarNavItem} />
                <NavLink to={'/user2'} className={style.sideBarNavItem} />
                <NavLink to={'/user3'} className={style.sideBarNavItem} />
                <NavLink to={'/user4'} className={style.sideBarNavItem} />
                <NavLink to={'/user5'} className={style.sideBarNavItem} />
            </nav>
        </div>
    )
}

export default Sidebar;