import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './all.min.css';
import './index.css';
import store from './Redux/redux-store';
import App from './App';
import {Provider} from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

firebase.initializeApp({
    apiKey: "AIzaSyB_1Y2KFoOMHSSmrkbgX2_VQB5ZDI_BuZY",
    authDomain: "iread-529b4.firebaseapp.com",
    databaseURL: "https://iread-529b4.firebaseio.com",
    projectId: "iread-529b4",
    storageBucket: "iread-529b4.appspot.com",
    messagingSenderId: "598382842689",
    appId: "1:598382842689:web:8e579c1da14f9e5cc547c0",
    measurementId: "G-S5GF7FYN7K"
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);