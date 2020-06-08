import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import stylesPost from "./Post.module.css";
import firebase from 'firebase/app';

const Post = ({userId, message}) => {
    const getAuthorOfPostData = (userId) => {
        firebase.firestore().collection('users').doc(userId).get()
            .then(response => setAuthorOfPost(response.data()))
            .catch(err => console.log(err.message))
    };

    useEffect(() => getAuthorOfPostData(userId), []);

    const [authorOfPost, setAuthorOfPost] = useState(null);

    return (
        <div className={stylesPost.posts}>
            <div className={stylesPost.container}>
                <span>
                    <img className={stylesPost.posts__image}
                         src={authorOfPost?.image}
                         alt="Profile avatar"/>
                    <span className={stylesPost.posts__author}>
                        {`${authorOfPost?.firstName} ${authorOfPost?.lastName}: `}
                    </span>
                </span>
                {message}
            </div>
        </div>
    );
};

Post.propTypes = {
    userId: PropTypes.string,
    message: PropTypes.string
};

export default Post;