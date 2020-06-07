import React, {useEffect} from 'react';
import firebase from 'firebase/app';
import './App.css';
import Nav from "./Components/Nav/Nav";
import Rating from "./Components/Rating/Rating";
import Footer from "./Components/Footer/Footer";
import UserPage from "./Components/Users/UserPage";
import Users from "./Components/Users/Users";
import Authentication from './Components/Authentication/Authentication';
import {BrowserRouter, Route} from "react-router-dom";
import ActivityContainer from "./Components/Activity/ActivityContainer";
import PropTypes from 'prop-types';
import CareersContainer from "./Components/Footer/Careers/CareersContainer";
import Header from "./Components/Header/Header";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import {connect} from 'react-redux';
import {getPostsFromFirestore, getUsersFromFirestore, setAuthorizedUser} from './Redux/actions/firebase-actions';

const App = ({getPostsFromFirestore, getUsersFromFirestore, setAuthorizedUser}) => {
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
            <div className="App">
                <Header />
                <Nav />
                <Route exact path={['/', '/profile']}
                       render={() => <ProfileContainer />} />
                <Route exact path="/rating"
                       render={() => <Rating />} />
                <Route exact path="/activity"
                       render={() => <ActivityContainer />} />
                <Route exact path="/careers"
                       render={() => <CareersContainer />} />
                <Route exact path="/users"
                       render={() => <Users />} />
                <Route path={'/users/:index'}
                       component={UserPage} />
                <Route exact path='/authentication'
                       render={() => <Authentication />} />
                <Footer />
            </div>
        </BrowserRouter>
    );
};

App.propTypes = {
    getPostsFromFirestore: PropTypes.func,
    getUsersFromFirestore: PropTypes.func
};

const mapDispatchToProps = {getPostsFromFirestore, getUsersFromFirestore, setAuthorizedUser};

export default connect(null, mapDispatchToProps)(App);