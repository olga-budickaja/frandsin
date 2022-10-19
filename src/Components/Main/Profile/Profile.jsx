import React from "react";
import style from "./Profile.module.scss";
import bg1 from "../../../Redux/asscess/img/bg2.jpg";
import avatar from "../../../Redux/asscess/img/user1.jpg";
import { ReactComponent as Timeline } from "../../../Redux/asscess/icons/timeline.svg";
import { ReactComponent as About } from "../../../Redux/asscess/icons/profile.svg";
import { ReactComponent as Friends } from "../../../Redux/asscess/icons/group.svg";
import { ReactComponent as Photo } from "../../../Redux/asscess/icons/photo.svg";
import {ReactComponent as Search} from "../../../Redux/asscess/icons/search.svg";
import {ReactComponent as Pencil} from "../../../Redux/asscess/icons/pencil.svg";
import {ReactComponent as Reload} from "../../../Redux/asscess/icons/reload.svg";

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
                                <span className="icon">
                                    <Timeline />
                                </span>
                                Timeline
                            </button>
                            <button className={`${style.sidePanelNavLeftBtn} btn`}>
                                <span className="icon">
                                    <About />
                                </span>
                                About
                            </button>
                            <button className={`${style.sidePanelNavLeftBtn} btn`}>
                                <span className="icon">
                                    <Friends />
                                </span>
                                Friends
                            </button>
                            <button className={`${style.sidePanelNavLeftBtn} btn`}>
                                <span className="icon">
                                    <Photo />
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

            <div className={style.body}>
                <div className="container">
                    <div className={style.bodyWrapper}>
                        <div className={`${style.bodyItem} ${style.bodyAbout}`}>
                            <div className={style.bodyTitle}>
                                <div className={style.bodyTitleWrapper}>
                                    <div className={style.bodyTitleDescription}>
                                        <h2 className={`${style.bodyTitleDescriptionTitle} title_fz2`}>About</h2>
                                        My Self
                                    </div>
                                    <div className={style.bodyTitleBtns}>
                                        <div className={`${style.bodyTitleBtn}`}><Pencil/></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className={`${style.bodyItem} ${style.bodyPosts}`}>
                            <div className={style.bodyTitle}>
                                <div className={style.bodyTitleWrapper}>
                                    <div className={style.bodyTitleDescription}>
                                        <h2 className={`${style.bodyTitleDescriptionTitle} title_fz2`}>Create Post</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${style.bodyItem} ${style.bodyEvent}`}>
                            <div className={`${style.bodyTitle} ${style.bodyEventBody}`}>
                                <div className={style.bodyTitleWrapper}>
                                    <div className={style.bodyTitleDescription}>
                                        <h2 className={`${style.bodyTitleDescriptionTitle} ${style.bodyEventWhite} title_fz2`}>My Event</h2>
                                    </div>
                                    <div className={style.bodyTitleBtns}>
                                        <div className={`${style.bodyTitleBtn}`}><Reload /></div>
                                        <div className={`${style.bodyTitleBtn}`}><Pencil /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}



console.log(Profile);
export default Profile;