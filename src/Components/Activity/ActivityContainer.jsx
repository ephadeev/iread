import React from "react";
import Activity from "./Activity";
import {connect} from "react-redux";
import {addPostActionCreator} from "../../Redux/activity-reducer";

let mapStateToProps = (state) => {
    return {
        posts: state.activity.posts,
        users: state.activity.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(addPostActionCreator(text))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Activity);