import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../App.css';
import FriendsList from '../FriendsList/FriendsList';

const Friends = ({friends, checkedTheme}) => {

    const friendsHandler = friends?.map((friend, index) => <FriendsList friend={friend} key={index} />);

    return (
        <main className={`wrapper bgColorDefault bgColor${checkedTheme}`}>
            <div className='container bgColorGray'>
                {friends.length !== 0
                    ? friendsHandler
                    : 'It seems you don\'t have anyone on your friends list yet...'}
            </div>
        </main>
    )
};

Friends.propTypes = {
    friends: PropTypes.array,
    checkedTheme: PropTypes.string
};

const mapStateToProps = state => {
    return {
        friends: state.authorization.authorizedUserData.friends,
        checkedTheme: state.themes.checkedTheme
    }
};

export default connect(mapStateToProps)(Friends);