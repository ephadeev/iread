import React from "react";
import styles from './Shortcomings.module.css'

const Shortcomings = (props) => {
    let inpCheckbox = React.createRef();

    /*if (props.checkedElements >= 5) {
        // inpCheckbox.current - null :(
        inpCheckbox.current.disabled = true;
    }*/

    let checkAmountOfCheckedElements = (event) => {
        console.log(inpCheckbox.current);
        let status = inpCheckbox.current.checked;
        console.log(status);
        props.checkAmountOfCheckedElements(status, props.shortcomings.id);
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