import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import stylesPost from "./Post.module.css";
import '../../../App.css';

const Post = ({userId, postText, hours, minutes, checkedTheme}) => {
    const getAuthorOfPostData = (userId) => {
        firebase.firestore().collection('users').doc(userId).get()
            .then(response => setAuthorOfPost(response.data()))
            .catch(err => console.log(err.message))
    };

    useEffect(() => getAuthorOfPostData(userId), []);

    const [authorOfPost, setAuthorOfPost] = useState(null);

    return (
        <div className={stylesPost.posts}>
            <div className='container flex-container bgColorGray post__container'>
                <>
                    <img className='small-avatar'
                         src={authorOfPost?.image
                             ? authorOfPost?.image
                             : 'https://lookp.ru/images/user_unknown_icon.jpg'}
                         alt='Profile avatar' />
                    <span className={stylesPost.posts__author}>
                        {`${authorOfPost?.firstName} ${authorOfPost?.lastName}:`}
                    </span>
                </>
                <span className='post__text'>{postText}</span>
                <span className={`post__time colorDefault color${checkedTheme}`}>{`${hours}:${minutes}`}</span>
            </div>
        </div>
    );
};

Post.propTypes = {
    userId: PropTypes.string,
    postText: PropTypes.string,
    hours: PropTypes.string,
    minutes: PropTypes.string,
    checkedTheme: PropTypes.string
};

export default Post;