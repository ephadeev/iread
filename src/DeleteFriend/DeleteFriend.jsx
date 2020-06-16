import React from 'react';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';
import firebase from 'firebase/app';

const DeleteFriend = ({authorizedUserUid, friendsId}) => {
    const deleteFriend = () => {
        return firebase.firestore().collection('users').doc(authorizedUserUid).update({
            friends: firebase.firestore.FieldValue.arrayRemove(friendsId)
        })
            .then(() => console.log('Document successfully updated!'))
            .catch(err => console.log(err.message))
    };
    // TODO: update state after adding friend

    return (
        <div>
            <i className='fas fa-user-times'
               onClick={deleteFriend}>
            </i>
        </div>
    )
};

DeleteFriend.propTypes = {
    authorizedUserUid: PropTypes.string,
    friendsId: PropTypes.string
};

const mapStateToProps = state => {
    return {
        authorizedUserUid: state.firebase.authorizedUser.uid
    }
};

export default connect(mapStateToProps)(DeleteFriend);