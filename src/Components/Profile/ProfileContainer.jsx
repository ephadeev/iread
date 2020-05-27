import React from "react";
import {connect} from 'react-redux';
import Profile from "./Profile";

const mapStateToProps = (state) => {
    return {
        users: state.activity.users,
        posts: state.activity.posts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile)