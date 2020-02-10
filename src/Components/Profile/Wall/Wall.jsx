import React from "react";

import stylesWall from './Wall.module.css';

import Posts from "./Posts/Posts";

const Wall = () => {
    return (
        <div className={stylesWall.wall}>
            Блок добавления нового поста <br/>
            Стена с постами
            <Posts message="пост №1"/>
            <Posts message="пост №2"/>
        </div>
    );
};

export default Wall;