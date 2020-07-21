import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import stylesFriends from './FriendsList.module.css';
import firebase from 'firebase/app';

const FriendsList = ({friend}) => {
    const [friendObject, setFriendObject] = useState(null);

    useEffect(() => {
        firebase.firestore().collection('users').doc(friend).get()
            .then(response => setFriendObject(response.data()))
            .catch(err => console.log(err.message));
    }, []);

    return (
        <Link to={`/users/${friend}`} className={stylesFriends.friend}>
            <div>
                <img src={friendObject?.image} alt="" className={stylesFriends.user__friendImage} />
                <span>{`${friendObject?.firstName} ${friendObject?.lastName}`}</span>
            </div>
        </Link>
    )
};

FriendsList.propTypes = {
    friend: PropTypes.string,
};

export default FriendsList;