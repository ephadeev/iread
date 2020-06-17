import React from 'react';
import {connect} from 'react-redux';
import stylesSignUp from './signUp.module.css'
import styles from '../Authentication.module.css';
import {onChangeEmailSignUp, onChangePasswordSignUp, signUpFromProps} from '../../../Redux/actions/authorization-actions';

const SignUp = ({emailSignUp, passwordSignUp, onChangeEmailSignUp, onChangePasswordSignUp, signUpFromProps}) => {
    const signUp = event => {
        event.preventDefault();
        signUpFromProps();
    };

    const onChangeEmail = event => onChangeEmailSignUp(event.target.value);
    const onChangePassword = event => onChangePasswordSignUp(event.target.value);

    return (
        <form onSubmit={signUp}>
            <fieldset>
                <legend>
                    Sign up
                </legend>
                <label className={styles.label}>
                    <span>E-mail: </span>
                    <input type='email'
                           onChange={onChangeEmail}
                           value={emailSignUp} />
                </label>
                <label className={styles.label}>
                    <span>Password: </span>
                    <input type='password'
                           minLength='6'
                           maxLength='6'
                           onChange={onChangePassword}
                           value={passwordSignUp} />
                </label>
            </fieldset>
            <input type="submit"
                   value="Sign up" />
        </form>
    )
};

const mapStateToProps = state => {
    return {
        emailSignUp: state.authorization.emailSignUp,
        passwordSignUp: state.authorization.passwordSignUp
    }
};

const mapDispatchToProps = {
    onChangeEmailSignUp,
    onChangePasswordSignUp,
    signUpFromProps
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);