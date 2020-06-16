import React from 'react';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';
import firebase from 'firebase/app';

const AddFriend = ({authorizedUserUid, friendsId}) => {
    const addFriend = () => {
        return firebase.firestore().collection('users').doc(authorizedUserUid).update({
            friends: firebase.firestore.FieldValue.arrayUnion(friendsId)
        })
            .then(() => console.log('Document successfully updated!'))
            .catch(err => console.log(err.message))
    };
    // TODO: update state after adding friend

    return (
        <div>
            <i className='fas fa-user-plus'
               onClick={addFriend}>
            </i>
            <i className='fas fa-user-times'
               onClick={addFriend}>
            </i>
        </div>
    )
};

AddFriend.propTypes = {
    authorizedUserUid: PropTypes.string,
    friendsId: PropTypes.string
};

const mapStateToProps = state => {
    return {
        authorizedUserUid: state.firebase.authorizedUser.uid
    }
};

export default connect(mapStateToProps)(AddFriend);