import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import '../../App.css';
import User from './User';

const Users = ({usersFromProps}) => {
    const users = usersFromProps.map((user, index) => {
        return (
            <User firstName={user.firstName}
                  lastName={user.lastName}
                  userIndex={user.userId}
                  userAvatar={user.image}
                  key={index} />
        )
    });

    return (
        <div className='wrapper'>
            {users}
        </div>
    );
};

Users.propTypes = {
    usersFromProps: PropTypes.array,
};

const mapStateToProps = (state) => {
    return {
        usersFromProps: state.firebase.users
    }
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Users);