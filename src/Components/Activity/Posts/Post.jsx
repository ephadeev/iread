import React from "react";
import stylesPost from "./Post.module.css";

const Post = (props) => {
    console.log(props.message);
    return (


        <div className={stylesPost.posts}>
            <div>
                <img src="https://images.app.goo.gl/NPxc7wY86oQJkqUc8" alt="lapenko"/>
            </div>
            {props.message}
        </div>
    );
};

export default Post;