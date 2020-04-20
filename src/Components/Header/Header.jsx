import React from "react";

import stylesHeader from './Header.module.css';
import stylesProfile from "../Profile/Profile.module.css";

const Header = () => {

    let settings = React.createRef();

    let openSettings = () => {
        if (settings.current.classList.contains(stylesHeader.header__settingsContentUnvisible)) {
            settings.current.classList.remove(stylesHeader.header__settingsContentUnvisible);
            settings.current.classList.add(stylesHeader.header__settingsContentVisible);
        } else {
            settings.current.classList.remove(stylesHeader.header__settingsContentVisible);
            settings.current.classList.add(stylesHeader.header__settingsContentUnvisible);
        }
    };

    return (
        <div className={stylesHeader.header}>
            <div className={stylesHeader.header__container}>
                <div className={stylesHeader.header__logo}>
                    <i className="fas fa-book-open"></i>
                </div>
                <div className={stylesHeader.header__title}>iRead</div>
                <div className={stylesHeader.header__settings}>
                    <i className="fas fa-cog" onClick={openSettings}  ></i>
                </div>

                <div className={stylesHeader.header__settingsContentUnvisible} ref={settings}>
                    Select color scheme:
                    <div className={stylesHeader.colora}></div>
                    <div className={stylesHeader.colorb}></div>
                    <div className={stylesHeader.colorc}></div>
                    <div className={stylesHeader.colord}></div>
                    <div className={stylesHeader.colore}></div>
                    <div className={stylesHeader.colorf}></div>
                    <div className={stylesHeader.colorg}></div>
                    <div className={stylesHeader.colorh}></div>
                </div>

            </div>
            {/* по клику на шестеренку менять .header__settingsContentUnvisible на:
                                                .header__settingsContentVisible */}

        </div>
    );
};

export default Header;