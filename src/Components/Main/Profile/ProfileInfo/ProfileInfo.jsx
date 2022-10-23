import React, {useEffect, useState} from "react";
import style from "../Profile.module.scss";
import bg1 from "../../../../Redux/asscess/img/bg2.jpg";
import avatar from "../../../../Redux/asscess/img/user1.jpg";
import { ReactComponent as Timeline } from "../../../../Redux/asscess/icons/timeline.svg";
import { ReactComponent as Video } from "../../../../Redux/asscess/icons/video.svg";
import { ReactComponent as Friends } from "../../../../Redux/asscess/icons/group.svg";
import { ReactComponent as Photo } from "../../../../Redux/asscess/icons/photo.svg";
import {ReactComponent as Search} from "../../../../Redux/asscess/icons/search.svg";
import {ReactComponent as Pencil} from "../../../../Redux/asscess/icons/pencil.svg";
import {ReactComponent as Reload} from "../../../../Redux/asscess/icons/reload.svg";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../../../firebase-config/firebase-config";



const Profile = (props) => {
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

    return ( <>{users.map(user =>
        <section className={style.profile}>
            <div className="container">
                <div className={style.banner}>
                    <img className={style.bannerImg} src={user.srcBg} alt="banner"/>
                    <div className={style.bannerDescription}>
                        <div className={style.bannerDescriptionImage}>
                            <img src={user.src} alt="avatar"/>
                        </div>
                        <h1 className={`title_fz2`}>{user.name}</h1>
                        <div className={style.bannerDescriptionCounters}>
                            <div className={style.bannerDescriptionCountersItem}>
                                <div className={`title_fz2`}>{user.following}</div>
                                Following
                            </div>
                            <div className={style.bannerDescriptionCountersItem}>
                                <div className={`title_fz2`}>{user.likes}</div>
                                Likes
                            </div>
                            <div className={style.bannerDescriptionCountersItem}>
                                <div className={`title_fz2`}>{user.followers}</div>
                                Followers
                            </div>
                        </div>
                        {/*<div className={style.bannerDescriptionBtn}>*/}
                        {/*    <button className={`btn btnBlue`}>Edit Profile</button>*/}
                        {/*</div>*/}
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
                            <button className={`${style.sidePanelNavLeftBtn} btn`}>
                                <span className="icon">
                                    <Video />
                                </span>
                                Video
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
                        <div className={style.bodyItem}>
                            <div className={`${style.bodyAbout}`}>
                                <div className={style.bodyTitle}>
                                    <div className={style.bodyTitleWrapper}>
                                        <div className={style.bodyTitleDescription}>
                                            <h2 className={`${style.bodyTitleDescriptionTitle} title_fz2`}>About</h2>
                                            {/*My Self*/}
                                        </div>
                                        {/*<div className={style.bodyTitleBtns}>*/}
                                        {/*    <div className={`${style.bodyTitleBtn}`}><Pencil/></div>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className={style.bodyItem}>
                            <div className={`${style.bodyPosts}`}>
                                <div className={style.bodyTitle}>
                                    <div className={style.bodyTitleWrapper}>
                                        <div className={style.bodyTitleDescription}>
                                            <h2 className={`${style.bodyTitleDescriptionTitle} title_fz2`}>Create Post</h2>
                                        </div>
                                        <div className={style.bodyTitleBtns}>
                                            <div className={`${style.bodyTitleBtn}`}><Pencil/></div>
                                        </div>
                                    </div>
                                </div>
                                <textarea className={style.bodyPostsTextarea} placeholder="Write something here..."></textarea>
                            </div>
                        </div>

                        <div className={style.bodyItem}>
                            <div className={`${style.bodyEvent}`}>
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
            </div>

        </section>

    )
    }
    </>
    )
}

export default Profile;