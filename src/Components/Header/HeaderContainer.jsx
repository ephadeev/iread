import React from "react";
import {connect} from 'react-redux';
import {signInActionCreator} from "../../Redux/reducers/users-reducer";
import Header from "./Header";

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (id) => {
            dispatch(signInActionCreator(id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)