import React from "react";
import PropTypes from 'prop-types';
import stylesPosts from './Posts.module.css';
import firebase from 'firebase/app';

const Posts = ({postText, postId}) => {
    const deletePost = () => firebase.firestore().collection('posts').doc(postId).delete()
        .then(console.log('post deleted'))
        .catch(err => console.log(err.message));

    return (
        <div className={stylesPosts.posts}>
            {postText}
            <i className={`fas fa-trash ${stylesPosts.trash}`}
               onClick={deletePost}>
            </i>
        </div>
    );
};

Posts.propTypes = {
    postText: PropTypes.string,
    postId: PropTypes.string
};

export default Posts;