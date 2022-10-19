import React from "react";
import style from "./Profile.module.scss";
import bg1 from "../../../Redux/asscess/img/bg2.jpg";
import avatar from "../../../Redux/asscess/img/user1.jpg";

const Profile = (props) => {

    return (
        <section className={style.profile}>
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
        </section>

    )
}



console.log(Profile);
export default Profile;