import React from 'react';
import {Link} from 'react-router-dom';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';
import '../../App.css';
import AddFriend from '../AddFriend/AddFriend';
import DeleteFriend from '../DeleteFriend/DeleteFriend';
import Loader from '../Loader/Loader';

const User = ({userIndex, firstName, lastName, userAvatar, authorizedUserData, isLoading}) => {
    return (
        <div className='user__container'>
            <Link to={`/users/${userIndex}`} className='links'>
                <div className={`flex-container user__wrapper br5`}>
                    {!isLoading
                        ? <>
                            <div>
                                <img src={userAvatar
                                    ? userAvatar
                                    : 'https://lookp.ru/images/user_unknown_icon.jpg'}
                                     alt='Profile avatar'
                                     className='small-avatar' />
                            </div>
                            <div className='user__name'>
                                {`${firstName ? firstName : 'John'} ${lastName ? lastName : 'Smith'}`}
                            </div>
                        </>
                        : <Loader />}
                </div>
            </Link>
            {authorizedUserData?.friends?.includes(userIndex)
                ? <DeleteFriend friendsId={userIndex} />
                : <AddFriend friendsId={userIndex} />}
        </div>
    );
};

User.propTypes = {
    userIndex: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    userAvatar: PropTypes.string,
    isLoading: PropTypes.bool
};

const mapStateToProps = state => {
    return {
        authorizedUserData: state.authorization.authorizedUserData,
        isLoading: state.users.isLoading
    }
};

export default connect(mapStateToProps)(User);