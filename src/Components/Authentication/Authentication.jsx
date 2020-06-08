import React from 'react';
import '../../App.css';
import stylesAuthentication from './Authentication.module.css';
import SignIn from './Sign-in/SignIn';
import SignUp from './Sign-up/SignUp';

const Authentication = () => {
    return (
        <div className={`${stylesAuthentication.height} wrapper`}>
            <div className='container'>
                <div className='flex-container'>
                    <SignIn />
                    <SignUp />
                </div>
            </div>
        </div>
    );
};

export default Authentication;