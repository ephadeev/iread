import React from 'react';
import stylesWall from './Wall.module.css';
import Posts from './Posts/Posts';
import PropTypes from 'prop-types';
import AddPost from '../../AddPost/AddPost';

const Wall = ({postsFromProps}) => {
    let posts = postsFromProps.map((post) => {
        if (post.userId === 'pczX7HckW1e8bydZ91wAFPN0V443') {   // TODO: userId need to be current user's id
            return <Posts posts={post.text}/>
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
};

export default Wall;