import React, {useState} from 'react';
import {connect} from 'react-redux';
import '../../../App.css';
import stylesSignUp from './signUp.module.css';
import styles from '../Authentication.module.css';
import {onChangeEmailSignUp, onChangePasswordSignUp, signUpFromProps} from '../../../Redux/actions/authorization-actions';

const SignUp = ({emailSignUp, passwordSignUp, checkedTheme, onChangeEmailSignUp, onChangePasswordSignUp, signUpFromProps}) => {
    const [passwordFailure, setPasswordFailure] = useState('');

    const signUp = event => {
        event.preventDefault();
        const regexp = new RegExp(`^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9]{${6},}$`);
        if (regexp.test(passwordSignUp)) {
            signUpFromProps();
        } else {
            setPasswordFailure(<ul className='authentication__error'>
                The password must match the following criteria:
                <li>At least 6 characters long</li>
                <li>Contains a lowercase letter</li>
                <li>Contains an uppercase letter</li>
                <li>Contains a number</li>
                <li>Valid passwords will only be alphanumeric characters.</li>
            </ul>);
        }
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
                           value={emailSignUp}
                           className={`br5 btDefault bt${checkedTheme} ${stylesSignUp.btn}`} />
                </label>
                <label className={styles.label}>
                    <span>Password: </span>
                    <input type='password'
                           minLength='6'
                           onChange={onChangePassword}
                           value={passwordSignUp}
                           className={`br5 btDefault bt${checkedTheme} ${stylesSignUp.btn}`} />
                </label>
                <div>{passwordFailure}</div>
            </fieldset>
            <input type='submit'
                   value='Sign up'
                   className={`btn ${styles.buttons}`} />
        </form>
    )
};

const mapStateToProps = state => {
    return {
        emailSignUp: state.authorization.emailSignUp,
        passwordSignUp: state.authorization.passwordSignUp,
        checkedTheme: state.themes.checkedTheme
    }
};

const mapDispatchToProps = {
    onChangeEmailSignUp,
    onChangePasswordSignUp,
    signUpFromProps
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);