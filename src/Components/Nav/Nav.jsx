import React from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import stylesNav from './Nav.module.css';
import '../../App.css';
import {NavLink} from "react-router-dom";

const Nav = ({authorizedUser, checkedTheme}) => {
    return (
        <div className={`bgColorDefault bgColor${checkedTheme}`}>
            <div className={stylesNav.containerNav}>
                {authorizedUser &&
                <NavLink to='/profile'
                         className={stylesNav.link}
                         activeClassName={stylesNav.activeLink} >
                    Profile
                </NavLink>}
                {authorizedUser &&
                <NavLink to='/messages'
                         className={stylesNav.link}
                         activeClassName={stylesNav.activeLink} >
                    Messages
                </NavLink>}
                {authorizedUser &&
                <NavLink to='/activity'
                         className={stylesNav.link}
                         activeClassName={stylesNav.activeLink} >
                    Activity
                </NavLink>}
                {authorizedUser &&
                <NavLink to='/users'
                         className={stylesNav.link}
                         activeClassName={stylesNav.activeLink} >
                    Users
                </NavLink>}
                {authorizedUser &&
                <NavLink to='/friends'
                         className={stylesNav.link}
                         activeClassName={stylesNav.activeLink} >
                    Friends
                </NavLink>}
                {!authorizedUser &&
                <NavLink to='/authentication'
                         className={stylesNav.link}
                         activeClassName={stylesNav.activeLink} >
                    <i className="fas fa-user">
                    </i>Login
                </NavLink>}
            </div>
        </div>
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