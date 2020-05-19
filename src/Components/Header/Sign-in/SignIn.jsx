import React from "react";
import stylesSignIn from './signIn.module.css'
import stylesHeader from "../Header.module.css";
import firebase from "firebase";

const SignIn = () => {

    let email = React.createRef();
    let pass = React.createRef();

    const signIn = event => {
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email.current.value, pass.current.value)
            .then((response) => {
                console.log(response.user.uid);
                console.log(response);
                email.current.value = '';
                pass.current.value = '';
            })
            .catch(err => {
                console.log(err.message);
                email.current.value = '';
                pass.current.value = '';
            });
    };

    return (
        <form onSubmit={signIn} >
            <fieldset>
                <legend>
                    Sign in
                </legend>
                <label className={stylesHeader.header__label}>
                    <span>E-mail: </span>
                    <input type="email"
                           ref={email} />
                </label>
                <label className={stylesHeader.header__label}>
                    <span>Password: </span>
                    <input type="password"
                           minLength='6'
                           maxLength='6'
                           ref={pass} />
                </label>
            </fieldset>
            <input type="submit"
                   value="Sign in" />
        </form>
    )
};

export default SignIn;