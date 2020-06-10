import React from "react";
import PropTypes from 'prop-types';
import stylesActivity from './Activity.module.css';
import Post from './Post/Post';
import AddPost from '../AddPost/AddPost';

const Activity = ({postsFromProps}) => {
    let posts = postsFromProps.map((post, index) => <Post userId={post.userId}
                                                          postText={post.text}
                                                          key={index} />);
    // TODO: need to show only posts with isPrivate=false
    // TODO: on Avatar click open http://localhost:3000/user/id
    // TODO: on Avatar mouseover show a little bit more info about user
    return (
        <div className={stylesActivity.activity}>
            <AddPost />
            {posts}
        </div>
    );
};

Activity.propTypes = {
    postsFromProps: PropTypes.array
};

export default Activity;