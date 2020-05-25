import React from "react";
import Careers from "./Careers";
import {connect} from 'react-redux';
import {checkAmountOfCheckedElementsActionCreator} from "../../../Redux/reducers/careers-reducer";

const mapStateToProps = (state) => {
    return {
        shortcomings: state.shortcomings,
        checkedElements: state.checkedElements
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkAmountOfCheckedElements: (status, id) => {
            dispatch(checkAmountOfCheckedElementsActionCreator(status, id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Careers);