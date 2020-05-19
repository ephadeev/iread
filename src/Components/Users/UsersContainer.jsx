import React from "react";
import Users from './Users';
import {connect} from 'react-redux';
// import action creator

let mapStateToProps = (state) => {
    return {
        users: ['user0', 'user1', 'user2', 'user3' , 'user4']
    }
};

let mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users)