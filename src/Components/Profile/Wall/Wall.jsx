import React from 'react';
import stylesWall from './Wall.module.css';
import Posts from './Posts/Posts';
import PropTypes from 'prop-types';

const Wall = ({postsFromProps, addPostFromProps}) => {
    let newPost = React.createRef();

    let posts = postsFromProps.map(post => {
        if (post.userId === 'pczX7HckW1e8bydZ91wAFPN0V443') {   // TODO: userId need to be current user's id
            return <Posts posts={post.text} />
        }
    });

    let addPost = () => {
        let text = newPost.current.value;
        addPostFromProps(text);
        newPost.current.value = '';
    };

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

Wall.propTypes = {
    postsFromProps: PropTypes.array,
    addPostFromProps: PropTypes.func
};

export default Wall;