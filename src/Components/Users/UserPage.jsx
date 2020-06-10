import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from "react-router-dom";
import '../../App.css';
import stylesUserPage from './UserPage.module.css';

const UserPage = (props) => {
    console.log(props);
    // TODO: need to get in props match.params
    // const [userData, setUserData] = useState(null);

    /*useEffect(() => {
        axios.get(`https://serverless-backend-ky9b8rmuq.now.sh/api/users/${props.match.params.index}`)
            .then(response => {
                    setUserData(response.data);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [props.match.params.index]);*/
    // Uncaught TypeError: Cannot read property 'params' of undefined
    const userData = {};
    if (!userData && !props.isLoading) {
        return (
            <div>Опаньки, нет такого человека...</div>
        )
    }

    /*const friends = userData?.friends.map(friend => {
        return (

            <Link to={`/users/${friend.index}`} className={stylesUserPage.friend}>
                <div className={stylesUserPage.friend__item}>
                    <img src={friend.picture} alt="" className={stylesUserPage.user__friendImage} />
                    <span>{`${friend.name.first} ${friend.name.last}`}</span>
                </div>
            </Link>
        )
    });*/

    return (
        <div className='wrapper'>
            <div className='container'>
                <div className='flex-container'>
                    {props.isLoading && <div>Loading...</div>}
                    <div>
                        <img src={userData?.image} alt="" className='middle-avatar' />
                    </div>
                    <div>
                        <div> {`${userData?.firstName} ${userData?.lastName}`}</div>

                        <div>About me: {userData?.about}</div>
                        <div>
                            Friends:
                            {/*{friends}*/}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    return {
        isLoading: state.firebase.isLoading,
        ownProps: ownProps
    }
};

export default connect(mapStateToProps)(UserPage);