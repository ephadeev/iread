import React from 'react';
import {connect} from 'react-redux';
import firebase from 'firebase/app';
import stylesHeader from './Header.module.css';
import {signOut} from '../../Redux/actions/authorization-actions';

const Header = ({signOut}) => {
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
            .then(() => signOut())
            .catch(err => console.log(err.message))
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

const mapDispatchToProps = {
    signOut
};

export default connect(null, mapDispatchToProps)(Header);