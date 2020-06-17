import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import '../../App.css';
import User from './User';

const Users = ({usersFromProps, authorizedUserId}) => {
    const users = usersFromProps
        .filter(user => user.userId !== authorizedUserId)
        .map((user, index) => {
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
    authorizedUserId: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        usersFromProps: state.users.users,
        authorizedUserId: state.authorization.authorizedUser.uid
    }
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Users);