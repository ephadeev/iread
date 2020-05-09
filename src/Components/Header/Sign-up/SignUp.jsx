import React from "react";
import stylesSignUp from './signUp.module.css'
import stylesHeader from "../Header.module.css";

const SignUp = () => {
    return (
        <form action="">
            <fieldset>
                <legend>
                    Sign up
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
                   value="Sign up" />
        </form>
    )
};

export default SignUp;