import React from 'react';
import stylesFooter from './Footer.module.css';

const Footer = () => {
    return (
        <div className={stylesFooter.footer}>
            <div className={stylesFooter.container}>
                <a href='https://www.linkedin.com/in/evgeny-phadeev-0a639899/?locale=en_US'
                   target='_blank' className={stylesFooter.footer__link} >developed by ephadeev</a>
            </div>
        </div>
    );
};

export default Footer;