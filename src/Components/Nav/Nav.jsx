import React from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import stylesNav from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = ({authorizedUser}) => {
    return (
        <div className={stylesNav.links}>
            <div className={stylesNav.containerNav}>
                {authorizedUser &&
                <NavLink to='/profile'
                         className={stylesNav.link}
                         activeClassName={stylesNav.activeLink} >
                    Profile
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
    authorizedUser: PropTypes.object
};

const mapStateToProps = state => {
    return {
        authorizedUser: state.firebase.authorizedUser
    }
};

export default connect(mapStateToProps)(Nav);