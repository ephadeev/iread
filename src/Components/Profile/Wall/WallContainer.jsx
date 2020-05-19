import React from "react";
import Wall from './Wall';
import {connect} from 'react-redux';
import {addPostActionCreator} from "../../../Redux/activity-reducer";

let mapStateToProps = state => {
    return {
        posts: state.activity.posts
    }
};

let mapDispatchToProps = dispatch => {
    return {
        addPost: (text) => {
            dispatch(addPostActionCreator(text))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Wall);