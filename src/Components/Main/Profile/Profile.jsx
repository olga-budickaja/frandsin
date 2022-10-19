import React from "react";
import style from "./Profile.module.scss";


const Profile = (props) => {

    return (
        <section className={style.profile}>
            <div className={style.banner}>
                <img className={style.bannerImg} src={props.srsBg} alt="banner"/>
                <div className={style.bannerDescription}>
                        <div className={style.bannerDescriptionImage}>
                            <img src={props.src} alt="avatar"/>
                        </div>
                    </div>
            </div>
        </section>

    )
}



console.log(Profile);
export default Profile;