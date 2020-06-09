import React from "react";
import PropTypes from 'prop-types';

import stylesPosts from './Posts.module.css';

const Posts = ({posts}) => {
    // TODO: write formula
    const deletePost = () => console.log('delete post');

    return (
        <div className={stylesPosts.posts}>
            {posts}
            <i className={`fas fa-trash ${stylesPosts.trash}`}
               onClick={deletePost}>
            </i>
        </div>
    );
};

Posts.propTypes = {
    posts: PropTypes.string
};

export default Posts;