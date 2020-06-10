import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../App.css'

const User = ({userIndex, firstName, lastName, userAvatar}) => {
    return (
        <Link to={`/users/${userIndex}`} className='user'>
            <div className={`container flex-container`}>
                <div>
                    <img src={userAvatar} alt="" className='middle-avatar' />
                </div>
                <div>
                    {`${firstName} ${lastName}`}
                </div>
            </div>
        </Link>
    );
};

User.propTypes = {
    userIndex: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    userAvatar: PropTypes.string
};

export default User;