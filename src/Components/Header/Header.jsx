import React, {useEffect} from "react";
import stylesHeader from './Header.module.css';
import firebase from "firebase";
import SignIn from "./Sign-in/SignIn";
import SignUp from "./Sign-up/SignUp";

const Header = () => {

    let initFirebase = () => {
        let firebaseConfig = {
            apiKey: "AIzaSyB_1Y2KFoOMHSSmrkbgX2_VQB5ZDI_BuZY",
            authDomain: "iread-529b4.firebaseapp.com",
            databaseURL: "https://iread-529b4.firebaseio.com",
            projectId: "iread-529b4",
            storageBucket: "iread-529b4.appspot.com",
            messagingSenderId: "598382842689",
            appId: "1:598382842689:web:8e579c1da14f9e5cc547c0",
            measurementId: "G-S5GF7FYN7K"
        };
        firebase.initializeApp(firebaseConfig);
    };

    useEffect(initFirebase, []);

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