import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../App.css';
import MessagesList from './MessagesList';

const Messages = ({friends, checkedTheme}) => {

    const messagesHandler = friends?.map((friend, index) => <MessagesList friend={friend} key={index} />);

    return (
        <main className={`wrapper bgColorDefault bgColor${checkedTheme}`}>
            <div className='container bgColorGray'>
                {friends.length !== 0
                    ? messagesHandler
                    : ' If you want to write a message to someone, then it\'s time to add someone to your friends list...'}
            </div>
        </main>
    )
};

Messages.propTypes = {
    friends: PropTypes.array,
    checkedTheme: PropTypes.string
};

const mapStateToProps = state => {
    return {
        friends: state.authorization.authorizedUserData.friends,
        checkedTheme: state.themes.checkedTheme
    }
};

export default connect(mapStateToProps)(Messages);