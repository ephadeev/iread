import React from 'react';
import Wall from './Wall';
import {connect} from 'react-redux';
import {addPostActionCreator} from '../../../Redux/reducers/activity-reducer';

let mapStateToProps = state => {
    return {
        postsFromProps: state.firebase.posts
    }
};

let mapDispatchToProps = dispatch => {
    return {
        addPostFromProps: (text) => {
            dispatch(addPostActionCreator(text))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Wall);