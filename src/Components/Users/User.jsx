import React from 'react';
import {Link} from 'react-router-dom';
import * as PropTypes from 'prop-types';
import '../../App.css';
import AddFriend from "../AddFriend/AddFriend";

const User = ({userIndex, firstName, lastName, userAvatar}) => {
    return (
        <div>
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
            <AddFriend friendsId={userIndex} />
        </div>
    );
};

User.propTypes = {
    userIndex: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    userAvatar: PropTypes.string
};

export default User;