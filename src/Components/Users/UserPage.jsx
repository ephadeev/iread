import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../App.css';
import FriendsList from '../FriendsList/FriendsList';
import Loader from '../Loader/Loader';

const UserPage = ({isLoading, checkedTheme, ...ownProps}) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // TODO: handle this after completely removing of firebase
        // firebase.firestore().collection('users').doc(ownProps.match.params.index)
        //     .get()
        //     .then(response => setUserData(response.data()))
        //     .catch(err => console.log(err.message));
    }, [ownProps.match.params.index]);

    if (!userData && !isLoading) {
        return <Loader />
    }

    const friends = userData?.friends?.map((friend, index) => <FriendsList friend={friend} key={index} />);

    return (
        <div className={`wrapper bgColorDefault bgColor${checkedTheme}`}>
            <div className='container bgColorGray'>
                <div className='flex-container'>
                    {isLoading && <Loader />}
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

UserPage.propTypes = {
    isLoading: PropTypes.bool,
    checkedTheme: PropTypes.string
};

const mapStateToProps = state => {
    return {
        isLoading: state.users.isLoading,
        checkedTheme: state.themes.checkedTheme
    }
};

export default connect(mapStateToProps)(UserPage);