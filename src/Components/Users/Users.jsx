import React, {useEffect} from "react";
import User from "./User";

const Users = (props) => {
    console.log(props);

    useEffect(() => {
        props.getUsers()}, []);

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
        <div>
            Users:
            {usersFromProps}
        </div>
    );
};

export default Users;