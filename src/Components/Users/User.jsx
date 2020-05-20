import React from 'react';
import {Link} from 'react-router-dom';

const User = (props) => {

    return (
        <Link to='/users/:index'>
            <div>
                <div>
                    <img src={props.user.picture} alt=""/>
                </div>
                <div>
                    <span>{props.user.name.first} </span>
                    <span>{props.user.name.last}</span>
                </div>
            </div>
        </Link>
    );
};

export default User;