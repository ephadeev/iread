import React from 'react';
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

const App = ({defaultProject}) => {
    // const [userData, setUserData] = useState(null);
    let defaultFirestore = defaultProject.firestore();
    let posts = [];
    const getPosts = arr => {
        defaultFirestore.collection('posts').get()
            .then(response => {
                response.docs.forEach(post => {
                    console.log(post.data());
                    arr.push(post.data());
                })
            });
    };
    getPosts(posts);
    // posts need to dispatch in state

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
    defaultProject: PropTypes.object
};

export default App;