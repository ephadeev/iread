import React from 'react';

import './App.css';

import Header from "./Components/Header/Header";

import Nav from "./Components/Nav/Nav";

import Profile from "./Components/Profile/Profile";

import Rating from "./Components/Rating/Rating";

import Activity from "./Components/Activity/Activity";
import Post from "./Components/Activity/Posts/Post";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Nav/>
                <Route exact path={['/', '/profile']} render={() => <Profile users={props.state.users[0]} posts={props.state.posts} />}/>
                <Route exact path="/rating" render={() => <Rating/>} />
                <Route exact path="/activity" render={() => <Activity posts={props.state.posts} users={props.state.users}  />} />
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

export default App;

/*
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/