import React from "react";
import {connect} from 'react-redux';
import Profile from "./Profile";

const mapStateToProps = (state) => {
    return {
        users: state.activity.users,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile)