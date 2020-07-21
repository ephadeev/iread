import React from 'react';
import stylesWall from './Wall.module.css';
import Post from './Post/Post';
import PropTypes from 'prop-types';
import AddPost from '../../AddPost/AddPost';

const Wall = ({postsFromProps, authorizedUser}) => {
    const posts = postsFromProps
        .sort((a, b) => a.time?.seconds - b.time?.seconds)
        .map((post, index) => {
            let hours = new Date(post.time?.seconds * 1000).getHours();
            let minutes = new Date(post.time?.seconds * 1000).getMinutes();
            if (post.userId === authorizedUser.uid) {
                return <Post postText={post.text}
                             postId={post.postId}
                             key={index}
                             hours={hours}
                             minutes={minutes > 9 ? minutes : `0${minutes}`} />
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