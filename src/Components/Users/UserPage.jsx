import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import '../../App.css';
import stylesUserPage from './UserPage.module.css';

const UserPage = (props) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://serverless-backend-ky9b8rmuq.now.sh/api/users/${props.match.params.index}`)
            .then(response => {
                    setUserData(response.data);
                    setLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
                setLoading(false);
            })
    }, [props.match.params.index]);

    if (!userData && !loading) {
        return (
            <div>Опаньки, нет такого человека...</div>
        )
    }


    let friends = userData?.friends.map(friend => {
        return (

            <Link to={`/users/${friend.index}`} className={stylesUserPage.friend}>
                <div className={stylesUserPage.friend__item}>
                    <img src={friend.picture} alt="" className={stylesUserPage.user__friendImage} />
                    <span>{`${friend.name.first} ${friend.name.last}`}</span>
                </div>
            </Link>
        )
    });

    return (
        <div className='wrapper'>
            <div className='container'>
                <div className='flex-container'>
                    {loading && <div>Loading...</div>}
                    <div>
                        <img src={userData?.picture} alt="" className='middle-avatar' />
                    </div>
                    <div>
                        <div> {`${userData?.name.first} ${userData?.name.last}`}</div>

                        <div>About me: {userData?.about}</div>
                        <div>
                            Friends:
                            {friends}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserPage;