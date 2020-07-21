import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import '../../App.css';
import stylesThemes from './Themes.module.css';
import {onChangeTheme} from '../../Redux/actions/themes-actions';

const Themes = ({colorScheme, onChangeTheme, checkedTheme}) => {

    let changeTheme = event => onChangeTheme(event.target.value);

    return (
        <label className={stylesThemes.themes}>
            <input type='radio'
                   onChange={changeTheme}
                   checked={(!checkedTheme && colorScheme === 'Indigo') ? true : checkedTheme === colorScheme}
                   name='theme'
                   value={colorScheme}
                   className={`bgColor${colorScheme} ${stylesThemes.radio}`} />
                   <span className={stylesThemes.fake}></span>
        </label>
    )
};

Themes.propTypes = {
    colorScheme: PropTypes.string,
    onChangeTheme: PropTypes.func,
    checkedTheme: PropTypes.string
};

const mapStateToProps = state => {
    return {
        checkedTheme: state.themes.checkedTheme
    }
};

const mapDispatchToProps = {
    onChangeTheme
};

export default connect(mapStateToProps, mapDispatchToProps)(Themes);