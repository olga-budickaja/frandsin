import React from "react";
import {NavLink} from "react-router-dom";
import style from "./SideBarItem.module.scss";

const SideBarItem = (props) => {
    return (
        <li className={style.item}>
            <NavLink to={props.name} className={style.itemLink}>
                <img className={style.itemImg} src={props.src} alt={props.name}/>
            </NavLink>
        </li>
    )
}

export default SideBarItem;