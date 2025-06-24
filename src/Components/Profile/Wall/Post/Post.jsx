import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import '../../../../App.css';
import {deletePost} from '../../../../Redux/actions/posts-actions';

const Post = ({postText, postId, deletePost, hours, minutes, checkedTheme}) => {
    const delPost = () => {
        // TODO: handle this after completely removing of firebase
        // firebase.firestore().collection('posts').doc(postId).delete()
        //     .then(() => deletePost(postId))
        //     .catch(err => console.log(err.message));
    }

    return (
        <div className='container post__container bgColorGray'>
            {postText}
            <span className={`post__time colorDefault color${checkedTheme}`}>{`${hours}:${minutes}`}</span>
            <i className={`fas fa-trash buttons colorDefault color${checkedTheme}`}
               onClick={delPost}>
            </i>
        </div>
    );
};

Post.propTypes = {
    postText: PropTypes.string,
    postId: PropTypes.string,
    deletePost: PropTypes.func,
    hours: PropTypes.number,
    minutes: PropTypes.string,
    checkedTheme: PropTypes.string
};

const mapStateToProps = state => {
    return {
        checkedTheme: state.themes.checkedTheme
    }
};

export default connect(mapStateToProps, {deletePost})(Post);