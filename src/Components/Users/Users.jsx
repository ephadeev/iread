import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import '../../App.css';
import User from './User';
import PropTypes from 'prop-types';
import {getUsers} from "../../Redux/reducers/users-reducer";

const Users = ({users, onGetUsers}) => {
    useEffect(() => onGetUsers(), []);

    let usersFromProps = users.map(user => {
        return (
            <User userIndex={user.index}
                  firstName={user.name.first}
                  lastName={user.name.last}
                  userAvatar={user.picture}
                  key={user._id} />
        )
    });

    return (
        <div className='wrapper'>
            {usersFromProps}
        </div>
    );
};

Users.propTypes = {
    user: PropTypes.array,
    onGetUsers: PropTypes.func
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Users);