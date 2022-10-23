import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import style from "./SideBarItem.module.scss";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../../firebase-config/firebase-config";

const SideBarItem = (props) => {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

    const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        console.log(data);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return ( <>{users.slice(1, 6).map(user =>

        <li className={style.item}>
            <NavLink to={`frandsin/profiles/${user.name.replace(" ", "-")}`} className={style.itemLink}>
                <img className={style.itemImg} src={user.src} alt={user.name}/>
            </NavLink>
        </li>
    )
    }
    </>
    )
}

export default SideBarItem;