import React, {useEffect} from 'react';
import './App.css';
import Nav from "./Components/Nav/Nav";
import Rating from "./Components/Rating/Rating";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import ActivityContainer from "./Components/Activity/ActivityContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import UserPage from "./Components/Users/UserPage";
import PropTypes from 'prop-types';
import CareersContainer from "./Components/Footer/Careers/CareersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import {connect} from 'react-redux';
import {getPostsFromFirestore} from './Redux/reducers/firebase-reducer'

const App = ({getPostsFromFirestore}) => {
    useEffect(() => getPostsFromFirestore(), []);

    return (
        <BrowserRouter>
            <div className="App">
                <HeaderContainer />
                <Nav/>
                <Route exact path={['/', '/profile']}
                       render={() => <ProfileContainer />
                       } />
                <Route exact path="/rating"
                       render={() => <Rating />} />
                <Route exact path="/activity"
                       render={() => <ActivityContainer />
                       } />
                <Route exact path="/careers"
                       render={() => <CareersContainer />
                       } />
                <Route exact path="/users" render={() => <UsersContainer />} />
                <Route path={'/users/:index'} component={UserPage} />
                <Footer />
            </div>
        </BrowserRouter>
    );
};

App.propTypes = {
    getPostsFromFirestore: PropTypes.func
};

const mapDispatchToProps = {getPostsFromFirestore};

export default connect(null, mapDispatchToProps)(App);