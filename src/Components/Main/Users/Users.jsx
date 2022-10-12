import React from "react";
import style from "./Users.module.css"

const Users = (props) => {
    return (
        <div className={style.user}>
            <img src={props.src} alt={props.name}/>
        </div>
    )
}

export default Users;