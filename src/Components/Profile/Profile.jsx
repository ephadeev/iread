import React from 'react';
import PropTypes from 'prop-types';
import stylesProfile from './Profile.module.css';
import '../../App.css';
import WallContainer from './Wall/WallContainer';
import EditProfile from '../EditProfile/EditProfile';
import Loader from '../Loader/Loader';
import UploadImage from '../UploadImage/UploadImage';

const Profile = ({authorizedUserData, isLoading, checkedTheme}) => {

    return (
        <main className={`wrapper bgColorDefault bgColor${checkedTheme}`}>
                <div>
                    {isLoading
                        ? <Loader />
                        : <div className='container flex-container profile__container'>
                            <img src={authorizedUserData?.image
                                ? authorizedUserData?.image
                                : 'https://lookp.ru/images/user_unknown_icon.jpg'}
                                 alt="Profile avatar"
                                 className={stylesProfile.profile__avatar} />
                            <UploadImage />
                            {!authorizedUserData?.image && <EditProfile inputType='image' />}
                            <div className={stylesProfile.profile__information}>
                                <h4 className='profile__name'>
                                    {authorizedUserData?.firstName
                                        ? `${authorizedUserData?.firstName} `
                                        : <>
                                            <span>First name: </span>
                                            <EditProfile inputType='firstName' />
                                          </>}
                                    {authorizedUserData?.lastName
                                        ? authorizedUserData?.lastName
                                        : <>
                                            <span>Last name: </span>
                                            <EditProfile inputType='lastName' />
                                          </>}
                                </h4>
                                <div>
                                    Hometown: {authorizedUserData?.Hometown
                                    ? authorizedUserData?.Hometown
                                    : <EditProfile inputType='Hometown' />}
                                </div>
                            </div>
                        </div>}
                    <WallContainer />
                </div>
        </main>
    );
};

Profile.propTypes = {
    authorizedUserData: PropTypes.object,
    isLoading: PropTypes.bool,
    checkedTheme: PropTypes.string
};


export default Profile;