import React from 'react';
import stylesSignUp from './signUp.module.css'
import styles from '../Authentication.module.css';
import * as firebase from 'firebase';

const SignUp = () => {

    let email = React.createRef();
    let pass = React.createRef();

    const signUp = event => {
        event.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(email.current.value, pass.current.value)
            .then(response => {
                console.log(response);
                email.current.value = '';
                pass.current.value = '';
            })
            .catch(err => {
                console.log(err.code);
                console.log(err.message);
                email.current.value = '';
                pass.current.value = '';
        })
    };

    return (
        <form onSubmit={signUp}>
            <fieldset>
                <legend>
                    Sign up
                </legend>
                <label className={styles.label}>
                    <span>E-mail: </span>
                    <input type="email"
                           ref={email} />
                </label>
                <label className={styles.label}>
                    <span>Password: </span>
                    <input type="password"
                           minLength='6'
                           maxLength='6'
                           ref={pass} />
                </label>
            </fieldset>
            <input type="submit"
                   value="Sign up" />
        </form>
    )
};

export default SignUp;