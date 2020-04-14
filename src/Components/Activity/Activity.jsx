import React from "react";
import stylesActivity from './Activity.module.css';
import Post from './Posts/Post';

const Activity = () => {
    return (
        <div className={stylesActivity.activity}>
            Activity
            Стена с общедоступными постами друзей. Что-то наподобии активности в steam.
            <Post message='Hello! How are you?'/>
            <Post message='Im fine thank you!'/>
            <Post message='Where are you?'/>
            <Post message='Whats uuuuuuup'/>
            <Post message='I am going home.'/>
            <Post message='Here we home again'/>

        </div>
    );
};

export default Activity;