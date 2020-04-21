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
                    <div className={`${stylesHeader.header__bgColorYellow} ${stylesHeader.header__colorSchemes}`}></div>
                    <div className={`${stylesHeader.header__bgColorBlack} ${stylesHeader.header__colorSchemes}`}></div>
                    <div className={`${stylesHeader.header__bgColorGold} ${stylesHeader.header__colorSchemes}`}></div>
                    <div className={`${stylesHeader.header__bgColorOrange} ${stylesHeader.header__colorSchemes}`}></div>
                    <div className={`${stylesHeader.header__bgColorPink} ${stylesHeader.header__colorSchemes}`}></div>
                    <div className={`${stylesHeader.header__bgColorBlue} ${stylesHeader.header__colorSchemes}`}></div>
                    <div className={`${stylesHeader.header__bgColorGreen} ${stylesHeader.header__colorSchemes}`}></div>
                    <div className={`${stylesHeader.header__bgColorIndigo} ${stylesHeader.header__colorSchemes}`}></div>
                </div>

            </div>
            {/* по клику на шестеренку менять .header__settingsContentUnvisible на:
                                                .header__settingsContentVisible */}

        </div>
    );
};

export default Header;