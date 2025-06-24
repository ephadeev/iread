import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import stylesMessages from './MessagesList.module.css';

const MessagesList = ({friend}) => {
    const [friendObject, setFriendObject] = useState(null);

    useEffect(() => {

        // TODO: handle this after completely removing of firebase
        // firebase.firestore().collection('users').doc(friend).get()
        //     .then(response => setFriendObject(response.data()))
        //     .catch(err => console.log(err.message));
    }, []);

    return (
        <Link to={`/messages/${friend}`} className={stylesMessages.friend}>
            <div className='flex-container'>
                <img src={friendObject?.image}
                     alt=''
                     className={stylesMessages.user__friendImage} />
                <span className='message__text'>{`${friendObject?.firstName} ${friendObject?.lastName}`}</span>
            </div>
        </Link>
    )
};

MessagesList.propTypes = {
    friend: PropTypes.string,
};

export default MessagesList;