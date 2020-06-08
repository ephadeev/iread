import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import '../../App.css';
import {onChangePost} from '../../Redux/actions/firebase-actions';
import {addPostFromProps} from '../../Redux/actions/firebase-actions';

const AddPost = ({postText, authorizedUser, addPostFromProps, onChangePost}) => {
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
    addPostFromProps: PropTypes.func,
    onChangePost: PropTypes.func
};

const mapStateToProps = state => {
    return {
        postText: state.firebase.newPostText,
        authorizedUser: state.firebase.authorizedUser
    }
};

const mapDispatchToProps = {
    onChangePost,
    addPostFromProps
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);