import React from "react";

import logo from './book-open.svg';

import stylesHeader from './Header.module.css';

const Header = () => {
    return (
        <div className={stylesHeader.header}>
            <div className={stylesHeader.headerContainer}>
                <img src={logo} alt="opened book" className={stylesHeader.logo} /><span className={stylesHeader.name}>iread</span>
            </div>
        </div>
    );
};

export default Header;