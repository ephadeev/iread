import React from "react";
import stylesHeader from './Header.module.css';
import firebase from "firebase";
import SignIn from "./Sign-in/SignIn";
import SignUp from "./Sign-up/SignUp";

const Header = (props) => {
    let login = React.createRef();
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

    let LogOut = event => {
        event.preventDefault();
        firebase.auth().signOut()
            .then(() => console.log('user signed out'));
    };

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log('user logged: ', user.uid);
            let id = user.uid;
            props.signIn(id);
        } else {
            console.log('user logged out');
        }
    });

    return (
        <div className={stylesHeader.header}>
            <div className={stylesHeader.header__container}>
                <div className={stylesHeader.header__logo}>
                    <i className="fas fa-book-open">
                    </i>
                </div>

                <div className={stylesHeader.header__title}>iRead</div>

                <div className={stylesHeader.header__login}>
                    <i
                        className="fas fa-user"
                        onClick={() => showHiddenContent(login)}>
                    </i>
                </div>

                <div className={stylesHeader.header__contentUnvisible}
                     ref={login}>
                    <SignIn />
                    <SignUp />
                    <button onClick={LogOut}>Logout</button>
                </div>

                <div className={stylesHeader.header__settings}>
                    <i
                        className="fas fa-cog"
                        onClick={() => showHiddenContent(settings)}>
                    </i>
                </div>

                <div className={stylesHeader.header__contentUnvisible}
                     ref={settings}>
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