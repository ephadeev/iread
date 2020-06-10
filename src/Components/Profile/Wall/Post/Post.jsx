import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import firebase from 'firebase/app';
import stylesPost from './Post.module.css';
import {deletePost} from '../../../../Redux/actions/firebase-actions';

const Post = ({postText, postId, deletePost}) => {
    const delPost = () => firebase.firestore().collection('posts').doc(postId).delete()
        .then(deletePost(postId))
        .catch(err => console.log(err.message));

    return (
        <div className={stylesPost.posts}>
            {postText}
            <i className={`fas fa-trash ${stylesPost.trash}`}
               onClick={delPost}>
            </i>
        </div>
    );
};

Post.propTypes = {
    postText: PropTypes.string,
    postId: PropTypes.string,
    deletePost: PropTypes.func
};

export default connect(null, {deletePost})(Post);