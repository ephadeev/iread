import React from "react";
import stylesPost from "./Post.module.css";

const Post = (props) => {
    console.log(props.message);
    return (


        <div className={stylesPost.posts}>
            <span>
                <img className={stylesPost.posts__image} src={props.userImage} alt="lapenko"/>
                <span className={stylesPost.posts__author}>{props.userName}: </span>
            </span>
            {props.message}
        </div>
    );
};

export default Post;