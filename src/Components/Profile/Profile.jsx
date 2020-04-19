import React from "react";

import Wall from "./Wall/Wall";

import stylesProfile from './Profile.module.css';

const Profile = (props) => {
    return (
        <div className={stylesProfile.profile}>
                <div className={stylesProfile.containerProfile}>
                    <img src={props.users.image} alt="Profile avatar"/>
                    <h4 className={stylesProfile.name}>{props.users.name}</h4>
                    Информация о человеке
                    Что-то вроде витрины с последними прочитанными книгами или загруженными фотками
                    <Wall />
                </div>
        </div>
    );
};

export default Profile;