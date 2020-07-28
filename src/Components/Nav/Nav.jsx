import React from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../App.css';
import {NavLink} from "react-router-dom";

const Nav = ({authorizedUser, checkedTheme}) => {
    return (
        <nav className={`bgColorDefault bgColor${checkedTheme}`}>
            <div className='container nav__container flex-container'>
                {authorizedUser &&
                <NavLink to='/profile'
                         className='links'
                         activeClassName={`colorDefault color${checkedTheme}`} >
                    <i className='fas fa-user-circle'>
                    </i>
                    <span className='nav__text'>Profile</span>
                </NavLink>}
                {authorizedUser &&
                <NavLink to='/messages'
                         className='links'
                         activeClassName={`colorDefault color${checkedTheme}`} >
                    <i className='fas fa-comments'>
                    </i>
                    <span className='nav__text'>Messages</span>
                </NavLink>}
                {authorizedUser &&
                <NavLink to='/activity'
                         className='links'
                         activeClassName={`colorDefault color${checkedTheme}`} >
                    <i className='fas fa-envelope'>
                    </i>
                    <span className='nav__text'>Activity</span>
                </NavLink>}
                {authorizedUser &&
                <NavLink to='/users'
                         className='links'
                         activeClassName={`colorDefault color${checkedTheme}`} >
                    <i className='fas fa-users'>
                    </i>
                    <span className='nav__text'>Users</span>
                </NavLink>}
                {authorizedUser &&
                <NavLink to='/friends'
                         className='links'
                         activeClassName={`colorDefault color${checkedTheme}`} >
                    <i className='fas fa-user-friends'>
                    </i>
                    <span className='nav__text'>Friends</span>
                </NavLink>}
                {!authorizedUser &&
                <NavLink to='/authentication'
                         className='links'
                         activeClassName={`colorDefault color${checkedTheme}`} >
                    <i className="fas fa-user">
                    </i>
                    <span>Login</span>
                </NavLink>}
            </div>
        </nav>
    );
};

Nav.propTypes = {
    authorizedUser: PropTypes.object,
    checkedTheme: PropTypes.string
};

const mapStateToProps = state => {
    return {
        authorizedUser: state.authorization.authorizedUser,
        checkedTheme: state.themes.checkedTheme
    }
};

export default connect(mapStateToProps)(Nav);