import React from 'react';
import {Link} from 'react-router-dom';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';
import '../../App.css';
import AddFriend from '../AddFriend/AddFriend';
import DeleteFriend from '../../DeleteFriend/DeleteFriend';

const User = ({userIndex, firstName, lastName, userAvatar, authorizedUserData}) => {
    console.log(userIndex);
    console.log(authorizedUserData.friends);
    return (
        <div className={'flex-container user__container'}>
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
            {authorizedUserData.friends.includes(userIndex)
                ? <DeleteFriend friendsId={userIndex} />
                : <AddFriend friendsId={userIndex} />}
        </div>
    );
};

User.propTypes = {
    userIndex: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    userAvatar: PropTypes.string
};

const mapStateToProps = state => {
    return {
        authorizedUserData: state.firebase.authorizedUserData
    }
};

export default connect(mapStateToProps)(User);