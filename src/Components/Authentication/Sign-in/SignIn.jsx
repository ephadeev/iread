import React from 'react';
import firebase from 'firebase';
import {connect} from 'react-redux';
import stylesSignIn from './signIn.module.css'
import styles from '../Authentication.module.css';
import {
    onChangeEmailFromProps,
    onChangePasswordFromProps,
    signInFromProps
} from '../../../Redux/actions/firebase-actions';

const SignIn = ({email, password, onChangeEmailFromProps, onChangePasswordFromProps, signInFromProps}) => {
    const signIn = event => {
        event.preventDefault();
        signInFromProps();
    };

    const onChangeEmail = event => onChangeEmailFromProps(event.target.value);
    const onChangePassword = event => onChangePasswordFromProps(event.target.value);

    return (
        <form onSubmit={signIn} >
            <fieldset>
                <legend>
                    Sign in
                </legend>
                <label className={styles.label}>
                    <span>E-mail: </span>
                    <input type='email'
                           onChange={onChangeEmail}
                           value={email} />
                </label>
                <label className={styles.label}>
                    <span>Password: </span>
                    <input type='password'
                           minLength='6'
                           maxLength='6'
                           onChange={onChangePassword}
                           value={password} />
                </label>
            </fieldset>
            <input type='submit'
                   value='Sign in' />
        </form>
    )
};

const mapStateToProps = state => {
    return {
        email: state.firebase.email,
        password: state.firebase.password
    }

};

const mapDispatchToProps = {
    onChangeEmailFromProps,
    onChangePasswordFromProps,
    signInFromProps
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)