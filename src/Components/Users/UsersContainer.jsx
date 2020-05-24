import React, {useEffect} from "react";
import Users from './Users';
import {connect} from 'react-redux';
import {getUsers} from "../../Redux/users-reducer";


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