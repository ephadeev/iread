import React from "react";

import stylesNav from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div className={stylesNav.links}>
            <div className={stylesNav.containerNav}>
                <NavLink to="/profile"
                         className={stylesNav.link}
                         activeClassName={stylesNav.activeLink}
                >
                    Profile
                </NavLink>
                <NavLink to="/rating"
                         className={stylesNav.link}
                         activeClassName={stylesNav.activeLink}
                >
                    Rating
                </NavLink>
                <NavLink to="/activity"
                         className={stylesNav.link}
                         activeClassName={stylesNav.activeLink}
                >
                    Activity
                </NavLink>
            </div>
        </div>
    );
};

export default Nav;