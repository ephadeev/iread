import React, {useEffect, useState} from "react";
import axios from "axios";
import User from "./User";

const Users = (props) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://serverless-backend-ky9b8rmuq.now.sh/api/users')
            .then(response => {
                console.log(response.data);
                setUsers(response.data);
            })
    }, []);

    return (
        <div>
            Users:
            {props.users}
            {users.map(user => {
                return (
                    <User user={user}
                          key={user.index} />
                )
            })}
        </div>
    );
};

export default Users;