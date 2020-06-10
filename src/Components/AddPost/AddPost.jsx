import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import firebase from 'firebase/app';
import '../../App.css';
import {getNewPost, onChangePost} from '../../Redux/actions/firebase-actions';

const AddPost = ({postText, authorizedUser, onChangePost, getNewPost}) => {
    // need to create container component
    const addPostFromProps = (text, userId) => {
        firebase.firestore().collection('posts')
            .add({
                text: text,
                isPrivate: false,
                userId: userId
            })
            .then(docRef => getNewPost(docRef.id))
            .catch((error) => console.log('Error adding document: ', error))
    };

    const addPost = () => addPostFromProps(postText, authorizedUser.uid);
    const onChange = event => onChangePost(event.target.value);

    return (
        <div>
            <div className='container'>
                <textarea placeholder='anything new?'
                          className='textarea'
                          onChange={onChange}
                          value={postText} >
                </textarea>
                <button onClick={addPost}>add post</button>
            </div>
        </div>
    )
};

AddPost.propTypes = {
    postText: PropTypes.string,
    authorizedUser: PropTypes.object,
    onChangePost: PropTypes.func,
    getNewPost: PropTypes.func
};

const mapStateToProps = state => {
    return {
        postText: state.firebase.newPostText,
        authorizedUser: state.firebase.authorizedUser
    }
};

const mapDispatchToProps = {
    onChangePost,
    getNewPost
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);