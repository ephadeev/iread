import React from 'react';
import ReactDOM from 'react-dom';
import './all.min.css';
import './index.css';
import App from './App';
import {addPost} from './Redux/state';

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} />,
        document.getElementById('root')
    );
};