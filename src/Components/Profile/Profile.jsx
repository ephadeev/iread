import React from "react";
import stylesProfile from './Profile.module.css';
import '../../App.css';
import WallContainer from "./Wall/WallContainer";
import EditProfile from '../EditProfile/EditProfile';
import PropTypes from 'prop-types';

const Profile = ({authorizedUserData}) => {
    return (
        <div className='wrapper'>
                <div className={stylesProfile.containerProfile}>
                    <div className={stylesProfile.profile__flexContainer}>
                        <img src={authorizedUserData?.image
                            ? authorizedUserData?.image
                            : 'https://lookp.ru/images/user_unknown_icon.jpg'}
                             alt="Profile avatar"
                             className={stylesProfile.profile__avatar} />
                        {!authorizedUserData?.image && <EditProfile inputType='image' />}
                        <div className={stylesProfile.profile__information}>
                            <h4 className={stylesProfile.name}>
                                {authorizedUserData?.firstName
                                    ? authorizedUserData?.firstName
                                    : <EditProfile inputType='firstName' />}
                                {authorizedUserData?.lastName
                                    ? authorizedUserData?.lastName
                                    : <EditProfile inputType='lastName' />}
                            </h4>
                            <div>
                                Hometown: {authorizedUserData?.Hometown
                                ? authorizedUserData?.Hometown
                                : <EditProfile inputType='Hometown' />}
                            </div>
                        </div>
                    </div>
                    <WallContainer />
                </div>
        </div>
    );
};

Profile.propTypes = {
    authorizedUserData: PropTypes.object
};


export default Profile;