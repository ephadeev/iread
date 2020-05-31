import React from "react";
import PropTypes from 'prop-types';

import stylesPosts from './Posts.module.css';

const Posts = ({posts}) => {
    return (
        <div className={stylesPosts.posts}>
            {posts}
        </div>
    );
};

Posts.propTypes = {
    posts: PropTypes.string
};

export default Posts;