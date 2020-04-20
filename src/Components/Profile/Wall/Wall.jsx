import React from "react";

import stylesWall from './Wall.module.css';

import Posts from "./Posts/Posts";

const Wall = () => {

    let newPost = React.createRef();

    let addPost = () => {

        let text = newPost.current.value;
        alert(text);
    };

    return (
        <div className={stylesWall.wall}>
            <div className={stylesWall.newPost}>
                <textarea ref={newPost} placeholder="anything new?" className={stylesWall.textarea}></textarea>
                <button onClick={addPost}>add post</button>
            </div>
            <Posts message="пост №1 -- 19 янв в 0:26"/>
            <Posts message="пост №2 -- 8 дек 2019"/>
        </div>
    );
};

export default Wall;