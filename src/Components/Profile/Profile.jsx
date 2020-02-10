import React from "react";

import Wall from "./Wall/Wall";

import stylesProfile from './Profile.module.css';

const Profile = () => {
    return (
        <div className={stylesProfile.profile}>
                <div className={stylesProfile.containerProfile}>
                    Аватарка
                    <h4 className={stylesProfile.name}>Evgeniy Phadeev</h4>
                    Информация о человеке
                    Выбор цветовой схемы профиля
                    <span className={stylesProfile.colora}>a</span>
                    <span className={stylesProfile.colorb}>b</span>
                    <span className={stylesProfile.colorc}>c</span>
                    <span className={stylesProfile.colord}>d</span>
                    <span className={stylesProfile.colore}>e</span>
                    <span className={stylesProfile.colorf}>f</span>
                    <span className={stylesProfile.colorg}>g</span>
                    <span className={stylesProfile.colorh}>h</span>
                    Что-то вроде витрины с последними прочитанными книгами или загруженными фотками
                    <Wall />
                </div>
        </div>
    );
};

export default Profile;