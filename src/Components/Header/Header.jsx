import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../App.css';
import stylesHeader from './Header.module.css';
import {signOut} from '../../Redux/actions/authorization-actions';
import Themes from '../Themes/Themes';

const Header = ({colorSchemes, checkedTheme, signOut}) => {
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

        // TODO: handle this after completely removing of firebase
        // firebase.auth().signOut()
        //     .then(() => signOut())
        //     .catch(err => console.log(err.message))
    };

    let themes = colorSchemes.map((colorScheme, index) => {
        return <Themes colorScheme={colorScheme.colorScheme}
                       key={index} />
    });

    return (
        <header className={`${stylesHeader.header} bgColorDefault bgColor${checkedTheme}`}>
            <div className='container header__container flex-container'>
                <div className='header__logo'>
                    <i className="fas fa-book-open">
                    </i>
                </div>

                <div className='header__title'>iRead</div>

                <div className='header__settings'>
                    <i
                        className="fas fa-cog"
                        onClick={() => showHiddenContent(settings)}>
                    </i>
                </div>

                <div className={stylesHeader.header__contentUnvisible}
                     ref={settings}>
                    <button onClick={LogOut}
                            className={`${stylesHeader.header__logout} btn`}>Logout</button>
                    <div className={`btDefault bt${checkedTheme} colorDefault color${checkedTheme} texAlCenter ${stylesHeader.header__border}`}>Themes</div>
                    <div className={`btDefault bt${checkedTheme} ${stylesHeader.header__border}`}>{themes}</div>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    colorSchemes: PropTypes.array,
    checkedTheme: PropTypes.string,
    signOut: PropTypes.func
};

const mapStateToProps = state => {
    return {
        colorSchemes: state.themes.colorSchemes,
        checkedTheme: state.themes.checkedTheme
    }
};

const mapDispatchToProps = {
    signOut
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);