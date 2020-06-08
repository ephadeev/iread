import React from 'react';
import stylesHeader from './Header.module.css';
import firebase from 'firebase/app';

const Header = () => {
    let settings = React.createRef();

    let showHiddenContent = (container) => {
        if (container.current.classList.contains(stylesHeader.header__contentUnvisible)) {
            container.current.classList.remove(stylesHeader.header__contentUnvisible);
            container.current.classList.add(stylesHeader.header__contentVisible);
        } else {
            container.current.classList.remove(stylesHeader.header__contentVisible);
            container.current.classList.add(stylesHeader.header__contentUnvisible);
        }
    };

    const LogOut = event => {
        event.preventDefault();
        firebase.auth().signOut()
            .then(() => console.log('user signed out'));
    };

    return (
        <div className={stylesHeader.header}>
            <div className={stylesHeader.header__container}>
                <div className={stylesHeader.header__logo}>
                    <i className="fas fa-book-open">
                    </i>
                </div>

                <div className={stylesHeader.header__title}>iRead</div>

                <div className={stylesHeader.header__settings}>
                    <i
                        className="fas fa-cog"
                        onClick={() => showHiddenContent(settings)}>
                    </i>
                </div>

                <div className={stylesHeader.header__contentUnvisible}
                     ref={settings}>
                    <button onClick={LogOut}>Logout</button>
                    Select color scheme:
                    <div className={`
                    ${stylesHeader.header__bgColorYellow} 
                    ${stylesHeader.header__colorSchemes}
                    `}>
                    </div>
                    <div className={`
                    ${stylesHeader.header__bgColorBlack} 
                    ${stylesHeader.header__colorSchemes}
                    `}>
                    </div>
                    <div className={`
                    ${stylesHeader.header__bgColorGold} 
                    ${stylesHeader.header__colorSchemes}
                    `}>
                    </div>
                    <div className={`
                    ${stylesHeader.header__bgColorOrange} 
                    ${stylesHeader.header__colorSchemes}
                    `}>
                    </div>
                    <div className={`
                    ${stylesHeader.header__bgColorPink} 
                    ${stylesHeader.header__colorSchemes}
                    `}>
                    </div>
                    <div className={`
                    ${stylesHeader.header__bgColorBlue} 
                    ${stylesHeader.header__colorSchemes}
                    `}>
                    </div>
                    <div className={`
                    ${stylesHeader.header__bgColorGreen} 
                    ${stylesHeader.header__colorSchemes}
                    `}>
                    </div>
                    <div className={`
                    ${stylesHeader.header__bgColorIndigo} 
                    ${stylesHeader.header__colorSchemes}
                    `}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;