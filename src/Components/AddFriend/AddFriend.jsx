import React from 'react';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';
import '../../App.css';
import {addFriendFromProps} from "../../Redux/actions/authorization-actions";

const AddFriend = ({authorizedUserUid, checkedTheme, friendsId, addFriendFromProps}) => {
    const addFriend = () => {

        // TODO: handle this after completely removing of firebase
        // return firebase.firestore().collection('users').doc(authorizedUserUid).update({
        //     friends: firebase.firestore.FieldValue.arrayUnion(friendsId)
        // })
        //     .then(() => addFriendFromProps(friendsId))
        //     .catch(err => console.log(err.message))
    };

    return (
        <i className={`fas fa-user-plus buttons colorDefault color${checkedTheme}`}
           onClick={addFriend}>
        </i>
    )
};

AddFriend.propTypes = {
    authorizedUserUid: PropTypes.string,
    checkedTheme: PropTypes.string,
    friendsId: PropTypes.string,
    addFriendFromProps: PropTypes.func
};

const mapStateToProps = state => {
    return {
        authorizedUserUid: state.authorization.authorizedUser.uid,
        checkedTheme: state.themes.checkedTheme
    }
};

export default connect(mapStateToProps, {addFriendFromProps})(AddFriend);