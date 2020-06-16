import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import firebase from 'firebase/app';
import {Link} from "react-router-dom";
import '../../App.css';
import stylesUserPage from './UserPage.module.css';

const UserPage = ({isLoading, ...ownProps}) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        firebase.firestore().collection('users').doc(ownProps.match.params.index).get()
            .then(response => setUserData(response.data()))
            .catch(err => console.log(err.message));
    }, [ownProps.match.params.index]);

    if (!userData && !isLoading) {
        return (
            <div>No such person...</div>
        )
    }

    const friends = userData?.friends?.map(friend => {
        return (
            <Link to={`/users/${friend.index}`} className={stylesUserPage.friend}>
                <div className={stylesUserPage.friend__item}>
                    <img src={friend.image} alt="" className={stylesUserPage.user__friendImage} />
                    <span>{`${friend.firstName} ${friend.lastName}`}</span>
                </div>
            </Link>
        )
    });

    return (
        <div className='wrapper'>
            <div className='container'>
                <div className='flex-container'>
                    {isLoading && <div>Loading...</div>}
                    <div>
                        <img src={userData?.image} alt="" className='middle-avatar' />
                    </div>
                    <div>
                        <div> {`${userData?.firstName} ${userData?.lastName}`}</div>
                        <div>Hometown: {userData?.Hometown}</div>
                        <div>
                            Friends:
                            {(userData?.friends)
                                ? friends
                                : ' It seems like there are no friends here...'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        isLoading: state.firebase.isLoading,
    }
};

export default connect(mapStateToProps)(UserPage);