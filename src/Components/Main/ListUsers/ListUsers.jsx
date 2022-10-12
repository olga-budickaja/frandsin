import React from "react";
import style from "./ListUsers.module.scss";
import ItemUser from "./ItemUser";

export const ListUsers = (props) => {
    return <ul className={style.listUsers}>{
        props.users.map(user => <ItemUser key={user.id.toString()} id={user.id} src={user.src} name={user.name} friends={user.friends}/>)
    }</ul>
}
