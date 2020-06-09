import React from 'react';
import stylesWall from './Wall.module.css';
import Posts from './Posts/Posts';
import PropTypes from 'prop-types';
import AddPost from '../../AddPost/AddPost';

const Wall = ({postsFromProps, authorizedUser}) => {
    console.log(postsFromProps);
    // TODO: передать в props <Posts /> id документа
    let posts = postsFromProps.map(post => {
        if (post.userId === authorizedUser.uid) {
            return <Posts postText={post.text}/>
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