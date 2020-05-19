import React from "react";
import stylesProfile from './Profile.module.css';
import WallContainer from "./Wall/WallContainer";

const Profile = (props) => {
    return (
        <div className={stylesProfile.profile}>
                <div className={stylesProfile.containerProfile}>
                    <div className={stylesProfile.profile__flexContainer}>
                        <img src={props.users.image}
                             alt="Profile avatar"
                             className={stylesProfile.profile__avatar}/>
                        <div className={stylesProfile.profile__information}>
                            <h4 className={stylesProfile.name}>
                                {props.users.name}
                            </h4>
                            <div>
                                from
                            </div>
                            <div>
                                Minsk
                            </div>
                        </div>
                    </div>
                    <WallContainer />
                </div>
        </div>
    );
};

export default Profile;