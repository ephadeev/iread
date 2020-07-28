import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../App.css';
import stylesFooter from './Footer.module.css';

const Footer = ({checkedTheme}) => {
    return (
        <footer className={`bgColorDefault bgColor${checkedTheme}`}>
            <div className={`${stylesFooter.container} container texAlCenter footer__container`}>
                <a href='https://www.linkedin.com/in/evgeny-phadeev-0a639899/?locale=en_US'
                   target='_blank'
                   rel='noopener noreferrer'
                   className={`footer__link colorDefault color${checkedTheme}`} >developed by ephadeev</a>
            </div>
        </footer>
    );
};

Footer.propTypes = {
    checkedTheme: PropTypes.string
};

const mapStateToProps = state => {
    return {
        checkedTheme: state.themes.checkedTheme
    }
};

export default connect(mapStateToProps)(Footer);