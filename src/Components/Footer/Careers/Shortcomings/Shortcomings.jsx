import React from "react";
import styles from './Shortcomings.module.css'
import {checkAmountOfCheckedElementsActionCreator} from "../../../../Redux/state";



const Shortcomings = (props) => {
    let inpCheckbox = React.createRef();
    let checkAmountOfCheckedElements = (event) => {
        console.log(inpCheckbox.current);
        let status = inpCheckbox.current.checked;
        console.log(status);
        let id = props.shortcomings.id;
        props.dispatch(checkAmountOfCheckedElementsActionCreator(status, id));
    };

    return(
        <label className={styles.shortcomings}>
            <input type="checkbox"
                   onClick={checkAmountOfCheckedElements}
                   ref={inpCheckbox}
                   disabled={(props.checkedElements >= 5) && (props.shortcomings.isChecked === false)}
                   checked={props.shortcomings.isChecked} />
            <div>{props.shortcomings.text}</div>
        </label>
    );
};

export default Shortcomings;