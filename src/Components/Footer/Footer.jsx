import React from "react";

import stylesFooter from './Footer.module.css';
import {NavLink} from 'react-router-dom';

const Footer = () => {
    return (
        <div className={stylesFooter.footer}>
            <div className={stylesFooter.container}>
                <NavLink to="/careers"
                         className={stylesFooter.footer__link}>
                    Careers
                </NavLink>
            </div>
        </div>
    );
};

export default Footer;