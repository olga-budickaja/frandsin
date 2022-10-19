import React from "react";
import style from "./Sidebar.module.scss"
import {SideBarList} from "./SideBarList";



const Sidebar = (props) => {
    return (
        <div className={style.sideBar}>
            <nav className={style.sideBarNav}>
                <SideBarList users={props.users} />{
            }
            </nav>
        </div>
    )
}
export default Sidebar;