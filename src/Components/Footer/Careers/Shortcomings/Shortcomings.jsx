import React from "react";
import styles from './Shortcomings.module.css'

const Shortcomings = (props) => {
    let inpCheckbox = React.createRef();
    let checkAmountOfCheckedElements = (event) => {
        let status = inpCheckbox.current.checked;
        let id = props.shortcomings.id;
        props.checkAmountOfCheckedElements(status, id);
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