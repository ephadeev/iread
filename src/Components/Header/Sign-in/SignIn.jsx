import React from "react";
import stylesSignIn from './signIn.module.css'
import stylesHeader from "../Header.module.css";

const SignIn = () => {
    return (
        <form action="">
            <fieldset>
                <legend>
                    Sign in
                </legend>
                <label className={stylesHeader.header__label}>
                    <span>E-mail: </span>
                    <input type="email"/>
                </label>
                <label className={stylesHeader.header__label}>
                    <span>Password: </span>
                    <input type="password"
                           minLength='6'
                           maxLength='6' />
                </label>
            </fieldset>
            <input type="submit"
                   value="Sign in" />
        </form>
    )
};

export default SignIn;