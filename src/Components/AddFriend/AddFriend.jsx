import React from 'react';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';
import firebase from 'firebase/app';
import '../../App.css';
import {addFriendFromProps} from "../../Redux/actions/authorization-actions";

// 10 state.authorizedUserData.friends is not iterable
const AddFriend = ({authorizedUserUid, friendsId, addFriendFromProps}) => {
    const addFriend = () => {
        return firebase.firestore().collection('users').doc(authorizedUserUid).update({
            friends: firebase.firestore.FieldValue.arrayUnion(friendsId)
        })
            .then(() => addFriendFromProps(friendsId))
            .catch(err => console.log(err.message))
    };

    return (
        <i className='fas fa-user-plus buttons'
           onClick={addFriend}>
        </i>
    )
};

AddFriend.propTypes = {
    authorizedUserUid: PropTypes.string,
    friendsId: PropTypes.string,
    addFriendFromProps: PropTypes.func
};

const mapStateToProps = state => {
    return {
        authorizedUserUid: state.authorization.authorizedUser.uid
    }
};

export default connect(mapStateToProps, {addFriendFromProps})(AddFriend);