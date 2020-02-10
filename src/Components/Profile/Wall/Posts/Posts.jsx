import React from "react";

import stylesPosts from './Posts.module.css';

const Posts = (props) => {
    return (
        <div className={stylesPosts.posts}>
            {props.message}
        </div>
    );
};

export default Posts;