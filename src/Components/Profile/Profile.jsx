import React from "react";
import stylesProfile from './Profile.module.css';
import '../../App.css';
import WallContainer from "./Wall/WallContainer";
import PropTypes from 'prop-types';

const Profile = ({authorizedUserData}) => {
    return (
        <div className='wrapper'>
                <div className={stylesProfile.containerProfile}>
                    <div className={stylesProfile.profile__flexContainer}>
                        <img src={authorizedUserData?.image}
                             alt="Profile avatar"
                             className={stylesProfile.profile__avatar}/>
                        <div className={stylesProfile.profile__information}>
                            <h4 className={stylesProfile.name}>
                                {authorizedUserData?.firstName} {authorizedUserData?.lastName}
                            </h4>
                            <div>
                                Hometown:
                            </div>
                            <div>
                                {authorizedUserData?.Hometown}
                            </div>
                        </div>
                    </div>
                    <WallContainer />
                </div>
        </div>
    );
};

Profile.propTypes = {
    authorizedUser: PropTypes.object
};


export default Profile;