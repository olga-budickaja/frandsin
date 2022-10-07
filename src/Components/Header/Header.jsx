import React from "react";
import logo from "./Logo.png";
import avatar from "./avatar.jpg";
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.headerMenuLeft}>
                <div className={style.headerLogo}>
                    <img src={logo} alt="logo" className="headerLogoImg"/>
                </div>
                <div className={style.headerSearch}>
                    <input type="search" placeholder="Find Friends" className={style.headerSearchInput}/>
                </div>
                <div className={style.headerMenuLeftItem}>
                </div>
                <div className={style.headerMenuLeftItem}>
                </div>
            </div>
            <div className={style.headerMenuRight}>
                <div className={style.headerMenuCounter}>
                    <div className={style.headerMenuCounterItem}></div>
                    <div className={style.headerMenuCounterItem}></div>
                </div>
                <div className={style.headerMenuOption}>
                    <div className={style.headerMenuRightItem}></div>
                    <div className={style.headerMenuRightItem}></div>
                    <div className={style.headerMenuRightItem}></div>
                    <div className={style.headerMenuAvatar}>
                        <div className={style.headerMenuAvatarImage}>
                            <img src={avatar} className={style.headerMenuAvatarImg} alt="avatar"/>
                        </div>
                        <div className={style.headerMenuAvatarName}></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;