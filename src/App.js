import React, {useEffect} from 'react';
import firebase from 'firebase/app';
import './App.css';
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import UserPage from "./Components/Users/UserPage";
import Users from "./Components/Users/Users";
import Authentication from './Components/Authentication/Authentication';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import ActivityContainer from "./Components/Activity/ActivityContainer";
import PropTypes from 'prop-types';
import Header from "./Components/Header/Header";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import {connect} from 'react-redux';
import {getPostsFromFirestore, getUsersFromFirestore, setAuthorizedUser} from './Redux/actions/firebase-actions';

const App = ({authorizedUser, getPostsFromFirestore, getUsersFromFirestore, setAuthorizedUser}) => {
    useEffect(() => getPostsFromFirestore(), []);
    useEffect(() => getUsersFromFirestore(), []);
    let user = firebase.auth().currentUser;
    if (user) {
        console.log(user);
        setAuthorizedUser(user)
    } else {
        console.log('user is not authorized');
    }

    return (
        <BrowserRouter>
            <div className='App'>
                <Header />
                <Nav />
                <Route exact path={['/', '/profile']}>
                    {!authorizedUser ? <Redirect to='/authentication' /> : <ProfileContainer />}
                </Route>
                <Route exact path='/activity'>
                    {!authorizedUser ? <Redirect to='/authentication' /> : <ActivityContainer />}
                </Route>
                <Route exact path="/users">
                    {!authorizedUser ? <Redirect to='/authentication' /> : <Users />}
                </Route>
                <Route path='/users/:index'>
                    {!authorizedUser ? <Redirect to='/authentication' /> : <UserPage />}
                </Route>
                <Route exact path='/authentication'
                       render={() => <Authentication />} />
                <Footer />
            </div>
        </BrowserRouter>
    );
};

App.propTypes = {
    authorizedUser: PropTypes.object,
    getPostsFromFirestore: PropTypes.func,
    getUsersFromFirestore: PropTypes.func
};

const mapStateToProps = state => {
    return {
        authorizedUser: state.firebase.authorizedUser
    }
};

const mapDispatchToProps = {getPostsFromFirestore, getUsersFromFirestore, setAuthorizedUser};

export default connect(mapStateToProps, mapDispatchToProps)(App);