import React from "react";
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


const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.menuLeft}>
                <div className={style.logo}>
                    <img src={logo} alt="logo" className={style.logoImg}/>
                </div>
                <form className={style.search}>
                    <input type="search" placeholder="Find Friends" className={style.searchInput}/>
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

                    <div className={`${style.menuLeftItem} ${style.relative}`}>
                        <UsersPlus className={style.users} />
                    </div>
                    <div className={`${style.listWrapper} ${style.hidden}`}>
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
                    </div>
                    <div className={style.menuAvatar}>
                        <NavLink to={'frandsin/profile'} className={style.menuAvatarImage}>
                            <img src={avatar} className={style.menuAvatarImg} alt="avatar"/>
                        </NavLink>
                        <div className={style.menuAvatarName}>
                            Katrin Love
                            <span className={style.menuAvatarNameStatus}>Active now</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;