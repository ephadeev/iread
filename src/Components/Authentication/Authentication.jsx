import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../App.css';
import SignIn from './Sign-in/SignIn';
import SignUp from './Sign-up/SignUp';

const Authentication = ({checkedTheme}) => {
    return (
        <div className={`wrapper bgColorDefault bgColor${checkedTheme}`}>
            <div className='container bgColorGray'>
                <div className='flex-container'>
                    <SignIn />
                    <SignUp />
                </div>
            </div>
        </div>
    );
};

Authentication.propTypes = {
    checkedTheme: PropTypes.string
};

const mspStateToProps = state => {
    return {
        checkedTheme: state.themes.checkedTheme
    }
};

export default connect(mspStateToProps)(Authentication);