import React from "react";
import style from "./ItemUser.module.scss";

const ItemUser = (props) => {
    return (
        <li key={props.id.toString()} className={style.item}>
            <div className={style.item__avatar}>
                <div className={style.item__image}>
                    <img className={style.item__img} src={props.src} alt={`user${props.id}`}/>
                </div>
                <div>
                    <h3 className={style.item__title}>{props.name}</h3>
                    <div className={style.item__subtitle}>{`${props.friends} Mutual Friends`}</div>
                </div>
            </div>
            <div className={style.item__buttons}>
                <button className={style.item__blue}>Confirm</button>
                <button className={style.item__white}>Delete</button>
            </div>
        </li>
    )
}

export default ItemUser;