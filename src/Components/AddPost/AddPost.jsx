import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import '../../App.css';
import {onAddPost, onChangePost} from '../../Redux/actions/firebase-actions';
import firebase from "firebase";

const AddPost = ({postText, authorizedUser, onChangePost, onAddPost}) => {
    // Error: Actions must be plain objects. Use custom middleware for async actions.
    // TypeError: Cannot read property 'type' of undefined

    const addPostFromProps = (text, userId) => {
        firebase.firestore().collection('posts')
            .add({
                text: text,
                isPrivate: false,
                userId: userId
            })
            .then((docRef) => console.log('Document written with ID: ', docRef.id))
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
    onAddPost: PropTypes.func
};

const mapStateToProps = state => {
    return {
        postText: state.firebase.newPostText,
        authorizedUser: state.firebase.authorizedUser
    }
};

const mapDispatchToProps = {
    onChangePost,
    onAddPost
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);