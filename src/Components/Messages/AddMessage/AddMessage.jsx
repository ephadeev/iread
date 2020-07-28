import React from 'react';
import firebase from 'firebase/app';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../../App.css';
import {onChaneMessage} from '../../../Redux/actions/messages-actions';

const AddMessage = ({CurrentUserUid, FriendsUid, messageText, onChaneMessage, checkedTheme}) => {
    const addMessageHandler = (messageText, CurrentUserUid, FriendsUid) => {
        firebase.firestore().collection('messages')
            .add({
                text: messageText,
                receiver_id: FriendsUid,
                sender_id: CurrentUserUid,
                time: new Date()
            })
            .catch(err => console.log('Error adding document', err))
    };

    const addMessage = event => {
        event.preventDefault();
        addMessageHandler(messageText, CurrentUserUid, FriendsUid)
    };
    const onChange = event => onChaneMessage(event.target.value);

    return (
        <div className='bgColorGray flex-container'>
            <form className='post__button'
                  onSubmit={addMessage}>
                <input type='text'
                       placeholder='Write a message...'
                       className={`br5 btDefault bt${checkedTheme} button`}
                       onChange={onChange}
                       value={messageText} />
            </form>
            <button onClick={addMessage}
                    className={`btn m15`}>
                <i className='fas fa-paper-plane'>
                </i>
            </button>
        </div>
    )
};

AddMessage.propTypes = {
    CurrentUserUid: PropTypes.string,
    FriendsUid: PropTypes.string,
    messageText: PropTypes.string,
    onChaneMessage: PropTypes.func,
    checkedTheme: PropTypes.string
};

const mapStateToProps = state => {
    return {
        messageText: state.messages.newMessageText,
        checkedTheme: state.themes.checkedTheme
    }
};

const mapDispatchToProps = {
    onChaneMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMessage);