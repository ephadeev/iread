import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Rating from "./Components/Rating/Rating";
import Footer from "./Components/Footer/Footer";
import Careers from './Components/Footer/Careers/Careers'
import {BrowserRouter, Route} from "react-router-dom";
import ActivityContainer from "./Components/Activity/ActivityContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import UserPage from "./Components/Users/UserPage";

const App = (props) => {
    // const [userData, setUserData] = useState(null);
    let defaultFirestore = props.defaultProject.firestore();

    let posts = [];
    const getPosts = () => {
        defaultFirestore.collection('posts').get()
            .then(response => {
                response.docs.forEach(post => {
                    console.log(post.data());
                    posts.push(post.data());
                })
            });
    };
    getPosts();
    console.log(posts); // need to dispatch in state

    return (
        <BrowserRouter>
            <div className="App">
                <Header dispatch={props.dispatch} />
                <Nav/>
                <Route exact path={['/', '/profile']}
                       render={() => <Profile users={props.users[0]}
                                              posts={posts} />
                       }
                />
                <Route exact path="/rating"
                       render={() => <Rating />}
                />
                <Route exact path="/activity"
                       render={() => <ActivityContainer />
                       }
                />
                <Route exact path="/careers"
                       render={() => <Careers shortcomings={props.state.careers.shortcomings}
                                              checkedElements={props.state.careers.checkedElements}
                                              dispatch={props.dispatch} />
                       }
                />
                <Route exact path="/users" render={() => <UsersContainer />} />
                <Route path={'/users/:index'} component={UserPage} />
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;