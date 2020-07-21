import React, {useEffect} from 'react';
import firebase from 'firebase/app';
import './App.css';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import UserPage from './Components/Users/UserPage';
import Users from './Components/Users/Users';
import Friends from './Components/Friends/Friends';
import Authentication from './Components/Authentication/Authentication';
import {Redirect, Route} from 'react-router-dom';
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

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            if (!authorizedUser) {
                setAuthorizedUser(user);
                firebase.firestore().collection('users').doc(user.uid).get()
                    .then(doc => setAuthorizedUserData(doc.data()))
                    .catch(err => getAuthorizedUserDataFailure(err.message));
            }
        } else {
            console.log('user is not authorized');
        }
    });

    return (
        <div className='App'>
            <Header />
            <Nav />
            <Route exact path={['/', '/profile']}>
                {!authorizedUser ? <Redirect to='/authentication' /> : <ProfileContainer />}
            </Route>
            <Route exact path='/messages'>
                {!authorizedUser ? <Redirect to='/authentication' /> : <Messages />}
            </Route>
            <Route exact path='/activity'>
                {!authorizedUser ? <Redirect to='/authentication' /> : <ActivityContainer />}
            </Route>
            <Route exact path="/users">
                {!authorizedUser ? <Redirect to='/authentication' /> : <Users />}
            </Route>
            <Route exact path='/friends'>
                {!authorizedUser ? <Redirect to='/authentication' /> : <Friends />}
            </Route>
            <Route path='/users/:index' component={UserPage} />
            <Route path='/messages/:index' component={MessagesPage} />
            <Route exact path='/authentication'>
                {authorizedUser ? <Redirect to='/profile' /> : <Authentication />}
            </Route>
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