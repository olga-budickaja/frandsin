import React, {useEffect, useState} from "react";
import style from "./Users.module.scss";
import {db} from "../../../firebase-config/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import {NavLink} from "react-router-dom";


const Users = (props) => {
    const usersCollectionRef = collection(db, "users");

    const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        props.setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        console.log(data);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            {props.users.map(user => <div key={user.id} className={style.item}>
                <div className={style.itemAvatar}>
                    <div className={style.itemAvatarImage}>
                        <NavLink to={'frendsin/profile' + user.id}>
                            <img className={style.itemAvatarImg} src={user.src} alt="user"/>
                        </NavLink>

                    </div>
                    <div>
                        <h3 className={style.itemAvatarTitle}>{user.name}</h3>
                        <div className={style.itemAvatarSubtitle}>{`${user.following} Mutual Friends`}</div>
                    </div>
                </div>
                <div>
                    {user.confirmed
                        ? <button className={`${style.itemBtn} btn btnBlue`} onClick={() => {props.confirmUser(user.id)}}>Confirm</button>
                        : <button className={`${style.itemBtn} btn btnWhite`} onClick={() => {props.unconfirmedUser(user.id)}}>Delete</button>
                    }
                </div>
                </div> )
            }
        </div>
    )
}

export default Users;