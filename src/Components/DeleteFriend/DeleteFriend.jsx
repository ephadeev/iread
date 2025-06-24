import React from 'react';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';
import '../../App.css';
import {deleteFriendFromProps} from '../../Redux/actions/authorization-actions';

const DeleteFriend = ({authorizedUserUid, checkedTheme, friendsId, deleteFriendFromProps}) => {
    const deleteFriend = () => {

        // TODO: handle this after completely removing of firebase
        // return firebase.firestore().collection('users').doc(authorizedUserUid).update({
        //     friends: firebase.firestore.FieldValue.arrayRemove(friendsId)
        // })
        //     .then(() => deleteFriendFromProps(friendsId))
        //     .catch(err => console.log(err.message))
    };

    return (
        <i className={`fas fa-user-times buttons colorDefault color${checkedTheme}`}
           onClick={deleteFriend}>
        </i>
    )
};

DeleteFriend.propTypes = {
    authorizedUserUid: PropTypes.string,
    checkedTheme: PropTypes.string,
    friendsId: PropTypes.string,
    deleteFriendFromProps: PropTypes.func
};

const mapStateToProps = state => {
    return {
        authorizedUserUid: state.authorization.authorizedUser.uid,
        checkedTheme: state.themes.checkedTheme
    }
};

export default connect(mapStateToProps, {deleteFriendFromProps})(DeleteFriend);