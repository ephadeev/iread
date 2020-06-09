import React from "react";
import PropTypes from 'prop-types';
import stylesPosts from './Posts.module.css';
import firebase from 'firebase/app';

const Posts = ({postText}) => {
    // TODO: write function
    const deletePost = () => console.log('delete post');


    // TODO: нужно получить через props id документа
    // firebase.firestore().collection('posts').doc('сюда предеать айди документа').delete().then('post deleted').catch(err => console.log(err.message))

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
    postText: PropTypes.string
};

export default Posts;