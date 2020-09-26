import React from 'react';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';
import firebase from 'firebase/app';
import '../../App.css';
import {onChangePost} from '../../Redux/actions/posts-actions';

const AddPost = ({postText, authorizedUserUid, checkedTheme, onChangePost}) => {
    const addPostHandler = (text, userId) => {
        firebase.firestore().collection('posts')
            .add({
                text: text,
                isPrivate: false,
                userId: userId,
                time: new Date()
            })
            .catch(err => console.log('Error adding document: ', err))
    };

    const addPost = event => {
        event.preventDefault();
        if (postText) {
            addPostHandler(postText, authorizedUserUid);
        }
    };
    const onChange = event => onChangePost(event.target.value);

    return (
        <div className='container bgColorGray flex-container'>
            <form onSubmit={addPost}
                  className='post__button'>
                <input type='text'
                       placeholder='anything new?'
                       className={`br5 btDefault bt${checkedTheme} button`}
                       onChange={onChange}
                       value={postText}
                       required />
            </form>
            <button type='submit'
                    onClick={addPost}
                    className={`btn m15`}>
                <i className='fas fa-paper-plane'>
                </i>
            </button>
        </div>
    )
};

AddPost.propTypes = {
    postText: PropTypes.string,
    authorizedUserUid: PropTypes.string,
    checkedTheme: PropTypes.string,
    onChangePost: PropTypes.func,
};

const mapStateToProps = state => {
    return {
        postText: state.posts.newPostText,
        authorizedUserUid: state.authorization.authorizedUser.uid,
        checkedTheme: state.themes.checkedTheme
    }
};

const mapDispatchToProps = {
    onChangePost
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);