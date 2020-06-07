import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import stylesWall from '../Profile/Wall/Wall.module.css'; // need to refactor
import {onChangePost} from '../../Redux/actions/firebase-actions';
import {addPostFromProps} from '../../Redux/actions/firebase-actions';


const AddPost = ({postText, addPostFromProps, onChangePost}) => {
    const addPost = () => addPostFromProps(postText);
    const onChange = event => onChangePost(event.target.value);

    return (
        <div>
            <div className={stylesWall.newPost}>
                <textarea placeholder="anything new?"
                          className={stylesWall.textarea}
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
    addPostFromProps: PropTypes.func,
    onChangePost: PropTypes.func
};

const mapStateToProps = state => {
    return {
        postText: state.firebase.newPostText,
    }
};

const mapDispatchToProps = {
    onChangePost,
    addPostFromProps
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);