import React from "react";
import stylesProfile from './Profile.module.css';
import WallContainer from "./Wall/WallContainer";
import PropTypes from 'prop-types';

const Profile = ({users}) => {
    return (
        <div className={stylesProfile.profile}>
                <div className={stylesProfile.containerProfile}>
                    <div className={stylesProfile.profile__flexContainer}> {/* TODO: need to pick up image url from firebase */}
                        <img src={users[0].image}
                             alt="Profile avatar"
                             className={stylesProfile.profile__avatar}/>
                        <div className={stylesProfile.profile__information}>
                            <h4 className={stylesProfile.name}>
                                {users[0].name} {/* TODO: need to pick up name from firebase */}
                            </h4>
                            <div>
                                from
                            </div>
                            <div>
                                Minsk {/* TODO: need to pick up data from firebase */}
                            </div>
                        </div>
                    </div>
                    <WallContainer />
                </div>
        </div>
    );
};

Profile.propTypes = {
    users: PropTypes.array
};


export default Profile;