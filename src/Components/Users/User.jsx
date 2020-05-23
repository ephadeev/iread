import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const User = ({userIndex, firstName, lastName, userAvatar}) => {
    return (
        <Link to={`/users/${userIndex}`}>
            <div>
                <div>
                    <img src={userAvatar} alt=""/>
                </div>
                <div>
                    <span>{firstName} </span>
                    <span>{lastName}</span>
                </div>
            </div>
        </Link>
    );
};

User.propTypes = {
    userIndex: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    userAvatar: PropTypes.string
};

export default User;