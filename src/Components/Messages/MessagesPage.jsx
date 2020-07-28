import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import '../../App.css';
import Message from './Message';
import AddMessage from './AddMessage/AddMessage';
import {getIncomeMessagesFromFirestore, getSentMessagesFromFirestore} from '../../Redux/actions/messages-actions';
import Loader from '../Loader/Loader';

const MessagesPage = ({incomeMessages, sentMessages, isLoading, isLoadingMessages, checkedTheme, CurrentUserUid, CurrentUserImage, getIncomeMessagesFromFirestore, getSentMessagesFromFirestore, ...ownProps}) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        firebase.firestore().collection('users').doc(ownProps.match.params.index)
            .get()
            .then(response => setUserData(response.data()))
            .catch(err => console.log(err.message));
    }, [ownProps.match.params.index]);

    // get income messages
    useEffect(() => {
        getIncomeMessagesFromFirestore(ownProps.match.params.index, CurrentUserUid);
    }, [ownProps.match.params.index]);

    // get sent messages
    useEffect(() => {
        getSentMessagesFromFirestore(ownProps.match.params.index, CurrentUserUid);
    }, [ownProps.match.params.index]);

    let messages = [...incomeMessages, ...sentMessages].sort((a, b) => a.time.seconds - b.time.seconds);

    let messagesDivs = messages.map((message, index) => {
        let hours = new Date(message.time.seconds * 1000).getHours();
        let minutes = new Date(message.time.seconds * 1000).getMinutes();

        return <Message key={index}
                        avatar={message.isIncomingMessage ? userData?.image : CurrentUserImage}
                        isIncomingMessage={message.isIncomingMessage}
                        text={message.text}
                        hours={hours}
                        minutes={minutes > 9 ? minutes : `0${minutes}`}
                        checkedTheme={checkedTheme} />;
    });

    if (isLoadingMessages) {
        console.log(isLoadingMessages);
        return (
            <Loader />
        )
    }

    if (!userData && !isLoading) {
        console.log(isLoading);
        return (
            <div>No such person...</div>
        )
    }

    return (
        <div className={`wrapper bgColorDefault bgColor${checkedTheme}`}>
            <div className='container bgColorGray'>
                {isLoading && <Loader />}
                {messagesDivs}
                <AddMessage CurrentUserUid={CurrentUserUid} FriendsUid={ownProps.match.params.index} />
            </div>
        </div>
    )
};
MessagesPage.propTypes = {
    incomeMessages: PropTypes.array,
    sentMessages: PropTypes.array,
    isLoading: PropTypes.bool,
    isLoadingMessages: PropTypes.bool,
    checkedTheme: PropTypes.string,
    CurrentUserUid: PropTypes.string,
    CurrentUserImage: PropTypes.string,
    getIncomeMessagesFromFirestore: PropTypes.func,
    getSentMessagesFromFirestore: PropTypes.func
};

const mapStateToProps = state => {
    return {
        incomeMessages: state.messages.incomeMessages,
        sentMessages: state.messages.sentMessages,
        isLoading: state.users.isLoading,
        isLoadingMessages: state.messages.isLoading,
        checkedTheme: state.themes.checkedTheme,
        CurrentUserUid: state.authorization.authorizedUser?.uid,
        CurrentUserImage: state.authorization.authorizedUserData?.image
    }
};

const mapDispatchToProps = {
    getIncomeMessagesFromFirestore,
    getSentMessagesFromFirestore
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPage);