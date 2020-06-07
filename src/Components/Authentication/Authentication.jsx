import React from 'react';
import '../../App.css';
import stylesAuthentication from './Authentication.module.css';
import SignIn from './Sign-in/SignIn';
import SignUp from './Sign-up/SignUp';
import firebase from 'firebase';

const Authentication = () => {
    const LogOut = event => {
        event.preventDefault();
        firebase.auth().signOut()
            .then(() => console.log('user signed out'));
    };

    return (
        <div className={`${stylesAuthentication.height} wrapper`}>
            <div className='container'>
                <div className='flex-container'>
                    <SignIn />
                    <SignUp />
                    <button onClick={LogOut}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Authentication;