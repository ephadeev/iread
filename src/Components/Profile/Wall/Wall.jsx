import React from 'react';
import stylesWall from './Wall.module.css';
import Post from './Post/Post';
import PropTypes from 'prop-types';
import AddPost from '../../AddPost/AddPost';

const Wall = ({postsFromProps, authorizedUser}) => {
    const posts = postsFromProps.map((post, index) => {
        if (post.userId === authorizedUser.uid) {
            return <Post postText={post.text}
                         postId={post.postId}
                         key={index} />
        }
    });

    return (
        <div className={stylesWall.wall}>
            <AddPost />
            {posts}
        </div>
    );
};

Wall.propTypes = {
    postsFromProps: PropTypes.array,
    authorizedUser: PropTypes.object
};

export default Wall;