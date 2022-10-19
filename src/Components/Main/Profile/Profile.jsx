import React from "react";
import style from "./Profile.module.scss";
import bg1 from "../../../Redux/asscess/img/bg2.jpg";
import avatar from "../../../Redux/asscess/img/user1.jpg";
import { ReactComponent as Timeline } from "../../../Redux/asscess/icons/timeline.svg";
import { ReactComponent as About } from "../../../Redux/asscess/icons/profile.svg";
import { ReactComponent as Friends } from "../../../Redux/asscess/icons/group.svg";
import { ReactComponent as Photo } from "../../../Redux/asscess/icons/photo.svg";
import {ReactComponent as Search} from "../../../Redux/asscess/icons/search.svg";

const Profile = (props) => {

    return (
        <section className={style.profile}>
            <div className="container">
                <div className={style.banner}>
                    <img className={style.bannerImg} src={bg1} alt="banner"/>
                    <div className={style.bannerDescription}>
                        <div className={style.bannerDescriptionImage}>
                            <img src={avatar} alt="avatar"/>
                        </div>
                        <h1 className={`title_fz2`}>Katrin Love</h1>
                        <div className={style.bannerDescriptionCounters}>
                            <div className={style.bannerDescriptionCountersItem}>
                                <div className={`title_fz2`}>323</div>
                                Following
                            </div>
                            <div className={style.bannerDescriptionCountersItem}>
                                <div className={`title_fz2`}>52367</div>
                                Likes
                            </div>
                            <div className={style.bannerDescriptionCountersItem}>
                                <div className={`title_fz2`}>7589</div>
                                Followers
                            </div>
                        </div>
                        <div className={style.bannerDescriptionBtn}>
                            <button className={`btn btnBlue`}>Edit Profile</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.sidePanel}>
                <div className="container">
                    <div className={style.sidePanelWrapper}>
                        <div className={style.sidePanelNavRight}>
                            <button className={`${style.sidePanelNavLeftBtn} ${style.sidePanelNavLeftBtnActive} btn`}>
                                <span className={style.sidePanelNavLeftBtnIcon}>
                                    <Timeline className={style.sidePanelNavLeftBtnsvg} />
                                </span>
                                Timeline
                            </button>
                            <button className={`${style.sidePanelNavLeftBtn} btn`}>
                                <span className={style.sidePanelNavLeftBtnIcon}>
                                    <About className={style.sidePanelNavLeftBtnsvg} />
                                </span>
                                About
                            </button>
                            <button className={`${style.sidePanelNavLeftBtn} btn`}>
                                <span className={style.sidePanelNavLeftBtnIcon}>
                                    <Friends className={style.sidePanelNavLeftBtnsvg} />
                                </span>
                                Friends
                            </button>
                            <button className={`${style.sidePanelNavLeftBtn} btn`}>
                                <span className={style.sidePanelNavLeftBtnIcon}>
                                    <Photo className={style.sidePanelNavLeftBtnsvg} />
                                </span>
                                Photo
                            </button>
                        </div>
                        <div className={style.sidePanelNavRight}>
                            <form className={style.sidePanelNavRightSearch}>
                                <input type="search" placeholder="Find Friends" className={`${style.sidePanelNavRightSearchInput}`}/>
                                <div className={style.sidePanelNavRightSearchWrappBtn}>
                                    <div className={style.sidePanelNavRightSearchBtnSearch}>
                                        <input type="submit" name="" value="" className="submit"/>
                                        <Search />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}



console.log(Profile);
export default Profile;