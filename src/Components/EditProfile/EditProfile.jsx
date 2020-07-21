import React from 'react';
import * as PropTypes from 'prop-types';
import firebase from 'firebase/app';
import {connect} from 'react-redux';
import {
    onChangeFirstName,
    onChangeHometown,
    onChangeImage,
    onChangeLastName
} from '../../Redux/actions/editProfile-actions';
import {setNewFieldsInAuthorizedUserData} from "../../Redux/actions/authorization-actions";

const EditProfile = ({
                         inputType, firstName, lastName,
                         Hometown, image, authorizedUserUid, onChangeFirstName,
                         onChangeLastName, onChangeHometown, onChangeImage, setNewFieldsInAuthorizedUserData}) => {

    const chooseField = (inputType) => {
        switch (inputType) {
            case 'firstName':
                return firstName;
            case 'lastName':
                return lastName;
            case 'Hometown':
                return Hometown;
            case 'image':
                return image;
            default:
                return;
        }
    };

    const editUserData = () => {
        return firebase.firestore().collection('users').doc(authorizedUserUid).update({
            [inputType]: chooseField(inputType)
        })
            .then(() => setNewFieldsInAuthorizedUserData(inputType, chooseField(inputType)))
            .catch(err => console.log(err.message))
    };

    const onChange = event => {
        switch (inputType) {
            case 'firstName':
                return onChangeFirstName(event.target.value);
            case 'lastName':
                return onChangeLastName(event.target.value);
            case 'Hometown':
                return onChangeHometown(event.target.value);
            case 'image':
                return onChangeImage(event.target.value);
            default:
                return;
        }
    };

    return (
        <div>
            <input placeholder={inputType}
                   type="text"
                   onChange={onChange}
                   value={chooseField(inputType)} />
            <button onClick={editUserData}>save</button>
        </div>
    )
};

EditProfile.propTypes = {
    inputType: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    HomeTown: PropTypes.string,
    image: PropTypes.string,
    authorizedUserUid: PropTypes.string,
    onChangeFirstName: PropTypes.func,
    onChangeLastName: PropTypes.func,
    onChangeHometown: PropTypes.func,
    onChangeImage: PropTypes.func,
    setNewFieldsInAuthorizedUserData: PropTypes.func
};

const mapStateToProps = state => {
    return {
        firstName: state.editProfile.firstName,
        lastName: state.editProfile.lastName,
        Hometown: state.editProfile.Hometown,
        image: state.editProfile.image,
        authorizedUserUid: state.authorization.authorizedUser.uid,
    }
};

const mapDispatchToProps = {
    onChangeFirstName,
    onChangeLastName,
    onChangeHometown,
    onChangeImage,
    setNewFieldsInAuthorizedUserData
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);