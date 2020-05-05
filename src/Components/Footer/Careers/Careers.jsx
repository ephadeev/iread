import React from "react";
import stylesCareers from './Careers.module.css';
import Shortcomings from "./Shortcomings/Shortcomings";

const Careers = (props) => {

    let shortcomings = props.shortcomings.map(shortcoming => {
        return <Shortcomings shortcomings={shortcoming}
                             checkedElements={props.checkedElements}
                             checkAmountOfCheckedElements={props['checkAmountOfCheckedElements']} />;
    });

    return (
        <div className={stylesCareers.careers}>
            <form className={stylesCareers.careers__container}>
                <fieldset>
                    <legend>
                        Personal Information:
                    </legend>
                    <label className={stylesCareers.careers__inputs}>
                        <span>First Name: </span>
                        <input type="text"/>
                    </label>
                    <label className={stylesCareers.careers__inputs}>
                        <span>Last Name: </span>
                        <input type="text"/>
                    </label>
                    <label className={stylesCareers.careers__inputs}>
                        <span>Age: </span>
                        <input type="text"/>
                    </label>
                    <label className={stylesCareers.careers__inputs}>
                        <span>Sex: </span>
                        <select>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </label>
                    <label className={stylesCareers.careers__inputs}>
                        <span>Phone Number: </span>
                        <input type="tel"/>
                    </label>
                    <label className={stylesCareers.careers__inputs}>
                        <span>E-mail:</span>
                        <input type="email" placeholder="example@example.com" />
                    </label>
                </fieldset>
                <fieldset>
                    <legend>
                        Questions and Details:
                    </legend>
                    <h2 className={stylesCareers.careers__shortcomings}>
                        Choose five of your main shortcomings
                    </h2>
                    {shortcomings}
                    {(() => {
                        if (props.checkedElements >= 5) {
                            return <div>Up to 5 shortcomings can be selected </div>
                        }
                    })()}
                </fieldset>
                <input type="submit" value="Send"/>
            </form>
        </div>
    )
};

export default Careers;