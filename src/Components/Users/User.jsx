import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../App.css'
import userAvatar from '../../assets/noAvatar.jpg';

const User = ({userIndex, firstName, lastName, userAvatar}) => {
    return (
        <Link to={`/users/${userIndex}`} className='user'>
            <div className="container">
                <div className='flex-container'>
                    <div>
                        <img src={userAvatar ? userAvatar : userAvatar} alt="" className='middle-avatar' />
                    </div>
                    <div>
                        {`${firstName} ${lastName}`}
                    </div>
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