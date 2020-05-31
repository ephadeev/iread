import React, {useEffect} from "react";
import User from "./User";
import '../../App.css'

const Users = (props) => {
    // TODO: PropTypes!
    console.log(props);

    useEffect(() => props.onGetUsers(), []);

    let usersFromProps = props.users.map(user => {
        return (
            <User userIndex={user.index}
                  firstName={user.name.first}
                  lastName={user.name.last}
                  userAvatar={user.picture}
                  key={user._id} />
        )
    });

    return (
        <div className='wrapper'>
            {usersFromProps}
        </div>
    );
};

export default Users;