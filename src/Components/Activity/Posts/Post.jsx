import React from "react";
import stylesPost from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={stylesPost.posts}>
            <div className={stylesPost.container}>
                <span>
                <img className={stylesPost.posts__image} src={props.userImage} alt="Profile avatar"/>
                <span className={stylesPost.posts__author}>{props.userName}: </span>
            </span>
                {props.message}
            </div>
        </div>
    );
};

export default Post;