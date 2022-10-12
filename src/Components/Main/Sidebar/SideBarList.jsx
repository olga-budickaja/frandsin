import React from "react";
import SideBarItem from "./SideBarItem";
import style from "./SideBarList.module.scss";

export const SideBarList = (props) => {
    return <ul className={style.list}> {
        props.users.map(user => <SideBarItem  key={user.id.toString()} name={user.name} src={user.src}/>)
    }</ul>
}

