import React from "react";

import stylesHeader from './Header.module.css';
import stylesProfile from "../Profile/Profile.module.css";

const Header = () => {
    return (
        <div className={stylesHeader.header}>
            <div className={stylesHeader.header__container}>
                <div className={stylesHeader.header__logo}>
                    <i className="fas fa-book-open"></i>
                </div>
                <div className={stylesHeader.header__title}>iRead</div>
                <div className={stylesHeader.header__settings}>
                    <i className="fas fa-cog"></i>
                </div>
            </div>
            {/* по клику на шестеренку менять .header__settingsContentUnvisible на:
                                                .header__settingsContentVisible */}
            <div className={stylesHeader.header__settingsContentUnvisible}>
                Выбор цветовой схемы профиля
                <span className={stylesHeader.colora}>a</span>
                <span className={stylesHeader.colorb}>b</span>
                <span className={stylesHeader.colorc}>c</span>
                <span className={stylesHeader.colord}>d</span>
                <span className={stylesHeader.colore}>e</span>
                <span className={stylesHeader.colorf}>f</span>
                <span className={stylesHeader.colorg}>g</span>
                <span className={stylesHeader.colorh}>h</span>
            </div>
        </div>
    );
};

export default Header;