import React from "react";
import logo from "./Logo.png";
import avatar from "../../Redux/img/avatar.jpg";
import style from './Header.module.scss';
import {ListUsers} from "../Main/ListUsers/ListUsers";
import { ReactComponent as Home } from "../../Redux/icons/home.svg";
import { ReactComponent as UsersPlus } from "../../Redux/icons/user.svg";
import { ReactComponent as Search } from "../../Redux/icons/search.svg";
import  { ReactComponent as Message } from "../../Redux/icons/message.svg";
import { ReactComponent as Theme } from "../../Redux/icons/theme.svg";
import { ReactComponent as Bell } from "../../Redux/icons/bell.svg";


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
                    <ListUsers users={props.users}/>
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
                        <div className={style.menuAvatarImage}>
                            <img src={avatar} className={style.menuAvatarImg} alt="avatar"/>
                        </div>
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