import React from "react";
import stylesWall from './Wall.module.css';
import Posts from "./Posts/Posts";

const Wall = (props) => {
    let newPost = React.createRef();

    let addPost = () => {
        let text = newPost.current.value;
        props.addPost(text);
        newPost.current.value = '';
    };

    let posts = props.posts.map(post => {
        if (post.userId === 'pczX7HckW1e8bydZ91wAFPN0V443') {
            return <Posts posts={post.text} />
        }
    });

    return (
        <div className={stylesWall.wall}>
            <div className={stylesWall.newPost}>
                <textarea ref={newPost} placeholder="anything new?" className={stylesWall.textarea}></textarea>
                <button onClick={addPost}>add post</button>
            </div>
            {posts}
        </div>
    );
};

export default Wall;