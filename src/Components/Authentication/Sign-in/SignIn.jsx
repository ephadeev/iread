import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../../App.css';
import stylesSignIn from './signIn.module.css';
import styles from '../Authentication.module.css';
import {
    onChangeEmailFromProps,
    onChangePasswordFromProps,
    signInFromProps
} from '../../../Redux/actions/authorization-actions';

const SignIn = ({email, password, checkedTheme, onChangeEmailFromProps, onChangePasswordFromProps, signInFromProps}) => {
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
                           value={email}
                           className={`br5 btDefault bt${checkedTheme} ${stylesSignIn.btn}`} />
                </label>
                <label className={styles.label}>
                    <span>Password: </span>
                    <input type='password'
                           minLength='6'
                           maxLength='6'
                           onChange={onChangePassword}
                           value={password}
                           className={`br5 btDefault bt${checkedTheme} ${stylesSignIn.btn}`} />
                </label>
            </fieldset>
            <input type='submit'
                   value='Sign in'
                   className={`btn ${styles.buttons}`} />
        </form>
    )
};

SignIn.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    checkedTheme: PropTypes.string,
    onChangeEmailFromProps: PropTypes.func,
    onChangePasswordFromProps: PropTypes.func,
    signInFromProps: PropTypes.func
};

const mapStateToProps = state => {
    return {
        email: state.authorization.emailSignIn,
        password: state.authorization.passwordSignIn,
        checkedTheme: state.themes.checkedTheme
    }

};

const mapDispatchToProps = {
    onChangeEmailFromProps,
    onChangePasswordFromProps,
    signInFromProps
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)