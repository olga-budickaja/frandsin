import React from "react";
import style from "./Users.module.css"
import {NavLink} from "react-router-dom";

const Users = () => {
    return (
        <div className={style.user}>
            <NavLink to={'/user1'} className={style.user}></NavLink>
            <NavLink to={'/user2'} className={style.user}></NavLink>
            <NavLink to={'/user3'} className={style.user}></NavLink>
            <NavLink to={'/user4'} className={style.user}></NavLink>
            <NavLink to={'/user5'} className={style.user}></NavLink>
        </div>
    )
}

export default Users;