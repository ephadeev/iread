import React, {useEffect} from "react";
import Users from './Users';
import {connect} from 'react-redux';
import {getUsersActionCreator} from "../../Redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => {
            dispatch(getUsersActionCreator());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users)