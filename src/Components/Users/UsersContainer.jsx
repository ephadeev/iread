import React from "react";
import Users from './Users';
import {connect} from 'react-redux';
import {getUsers} from "../../Redux/reducers/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetUsers: () => dispatch(getUsers())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users)