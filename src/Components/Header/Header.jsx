import React, {useEffect, useState} from "react";
import logo from "./Logo.png";
import avatar from "../../Redux/asscess/img/user1.jpg";
import style from './Header.module.scss';
import { ReactComponent as Home } from "../../Redux/asscess/icons/home.svg";
import { ReactComponent as UsersPlus } from "../../Redux/asscess/icons/user.svg";
import { ReactComponent as Search } from "../../Redux/asscess/icons/search.svg";
import  { ReactComponent as Message } from "../../Redux/asscess/icons/message.svg";
import { ReactComponent as Theme } from "../../Redux/asscess/icons/theme.svg";
import { ReactComponent as Bell } from "../../Redux/asscess/icons/bell.svg";
import {NavLink} from "react-router-dom";
import UsersContainer from "../Main/Users/UsersContainer";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase-config/firebase-config";

function handleClick() {
    document.querySelector(".hidden").classList.toggle("visible");
}

const Header = (props) => {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

    const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        // console.log(data);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <header className={style.header}>
            <div className={style.menuLeft}>
                <div className={style.logo}>
                    <img src={logo} alt="logo" className={style.logoImg}/>
                </div>
                <form className={style.search}>
                    <input type="search" placeholder="Find Friends" className={`${style.searchInput} .searchInput`}/>
                    <div className={style.wrappBtn}>
                        <div className={style.btnSearch}>
                            <input type="submit" name="" value="" className="submit"/>
                            <Search />
                        </div>
                    </div>

                </form>
                <div className={style.menuLeftItem}>
                    <Home className={style.home} />
                </div>

                <div onClick={handleClick} className={`${style.menuLeftItem} ${style.relative}`}>
                    <UsersPlus className={style.users} />
                </div>
                <div className={`${style.listWrapper} hidden`}>
                    <h2 className={style.listWrapper__title}>Friend Request</h2>
                    <UsersContainer />
                </div>
            </div>
            <div className={style.menuRight}>
                <div className={style.menuCounter}>
                    <div className={style.menuCounterItem}>
                        <div className={style.menuCounterItemDescription}>
                            <div className={style.menuCounterItemValue}>25</div>
                            Total Posts
                        </div>
                    </div>
                    <div className={style.menuCounterItem}>
                        <div className={style.menuCounterItemDescription}>
                            <div className={style.menuCounterItemValue}>325</div>
                            Total Friends
                        </div>
                    </div>
                </div>
                <div className={style.menuOption}>
                    <div className={style.menuOptionIcon}>
                        <div className={style.menuRightItem}>
                            <Message className={style.message} />
                            <div className={style.menuRightItemCount}>
                                <span className={style.menuRightItemCountValue}>10</span>
                            </div>
                        </div>
                        <div className={style.menuRightItem}>
                            <Theme className={style.theme} />
                        </div>
                        <div className={style.menuRightItem}>
                            <Bell className={style.bell} />
                            <div className={style.menuRightItemCount}>
                                <span className={style.menuRightItemCountValue}>5</span>
                            </div>
                        </div>
                    </div>{users.slice(6, 7).map(user =>
                    <div className={style.menuAvatar}>
                        <NavLink to={`frandsin/profile`} className={style.menuAvatarImage}>
                            <img src={user.src} className={style.menuAvatarImg} alt={user.name}/>
                        </NavLink>
                        <div className={style.menuAvatarName}>
                            {user.name}
                            <span className={style.menuAvatarNameStatus}>Active now</span>
                        </div>

                    </div>)}
                </div>
            </div>
        </header>
    )
}

export default Header;