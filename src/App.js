import React, {useEffect} from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import UserPage from './Components/Users/UserPage';
import Users from './Components/Users/Users';
import Friends from './Components/Friends/Friends';
import Authentication from './Components/Authentication/Authentication';
import {Navigate, Routes, Route} from 'react-router-dom';
import ActivityContainer from './Components/Activity/ActivityContainer';
import * as PropTypes from 'prop-types';
import Header from './Components/Header/Header';
import ProfileContainer from './Components/Profile/ProfileContainer';
import Messages from './Components/Messages/Messages';
import {connect} from 'react-redux';
import {getUsersFromFirestore} from './Redux/actions/users-actions';
import {setAuthorizedUser, setAuthorizedUserData, getAuthorizedUserDataFailure} from './Redux/actions/authorization-actions';
import {getPostsFromFirestore} from './Redux/actions/posts-actions';
import MessagesPage from './Components/Messages/MessagesPage';

const App = ({
                 authorizedUser, getPostsFromFirestore, getUsersFromFirestore,
                 setAuthorizedUser, setAuthorizedUserData, getAuthorizedUserDataFailure}) => {
    useEffect(() => getPostsFromFirestore(), []);
    useEffect(() => getUsersFromFirestore(), []);

    // TODO: auth state logic after rewriting the corresponding logic on backend side
    // firebase.auth().onAuthStateChanged(user => {
    //     if (user) {
    //         if (!authorizedUser) {
    //             setAuthorizedUser(user);
    //             firebase.firestore().collection('users').doc(user.uid).get()
    //                 .then(doc => setAuthorizedUserData(doc.data()))
    //                 .catch(err => getAuthorizedUserDataFailure(err.message));
    //         }
    //     } else {
    //         console.log('user is not authorized');
    //     }
    // });

    return (
        <div className='App'>
            <Header />
            <Nav />
            <Routes>
                <Route exact path='/' element={!authorizedUser ? <Navigate to='/authentication' replace /> : <ProfileContainer />} />
                <Route exact path='/profile' element={!authorizedUser ? <Navigate to='/authentication' replace /> : <ProfileContainer />} />
                <Route exact path='/messages' element={!authorizedUser ? <Navigate to='/authentication' replace /> : <Messages />}/>
                <Route exact path='/activity' element={!authorizedUser ? <Navigate to='/authentication' replace /> : <ActivityContainer />}/>
                <Route exact path="/users" element={!authorizedUser ? <Navigate to='/authentication' replace /> : <Users />}/>
                <Route exact path='/friends' element={!authorizedUser ? <Navigate to='/authentication' replace /> : <Friends />}/>
                <Route path='/users/:index' component={UserPage} />
                <Route path='/messages/:index' component={MessagesPage} />
                <Route exact path='/authentication' element={authorizedUser ? <Navigate to='/profile' replace /> : <Authentication />}/>
            </Routes>
            <Footer />
        </div>
    );
};

App.propTypes = {
    authorizedUser: PropTypes.object,
    getPostsFromFirestore: PropTypes.func,
    getUsersFromFirestore: PropTypes.func,
    setAuthorizedUser: PropTypes.func,
    setAuthorizedUserData: PropTypes.func,
    getAuthorizedUserDataFailure: PropTypes.func
};

const mapStateToProps = state => {
    return {
        authorizedUser: state.authorization.authorizedUser,
    }
};

const mapDispatchToProps = {getPostsFromFirestore, getUsersFromFirestore, setAuthorizedUser, setAuthorizedUserData, getAuthorizedUserDataFailure};

export default connect(mapStateToProps, mapDispatchToProps)(App);