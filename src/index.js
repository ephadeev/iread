import React from "react";
import ReactDOM from "react-dom";
import './all.min.css';
import './index.css';
import store from "./Redux/redux-store";
import App from "./App";
import firebase from "firebase";
import {Provider} from 'react-redux';

const initFirebase = () => {
    let firebaseConfig = {
        apiKey: "AIzaSyB_1Y2KFoOMHSSmrkbgX2_VQB5ZDI_BuZY",
        authDomain: "iread-529b4.firebaseapp.com",
        databaseURL: "https://iread-529b4.firebaseio.com",
        projectId: "iread-529b4",
        storageBucket: "iread-529b4.appspot.com",
        messagingSenderId: "598382842689",
        appId: "1:598382842689:web:8e579c1da14f9e5cc547c0",
        measurementId: "G-S5GF7FYN7K"
    };
    return firebase.initializeApp(firebaseConfig);
};
let defaultProject = initFirebase();
// https://drive.google.com/file/d/1ENwuLJ0Ygcybz3yCZVJVxTRzosiRuV05/view?usp=sharing
let users = [
    {name: 'Richard Hendricks', image: 'https://www.kinopoisk.ru/images/sm_actor/1852968.jpg'},
    {name: 'Nelson Bighetti', image: 'https://www.kinopoisk.ru/images/sm_actor/1852968.jpg'},
    {name: 'Bertram Gilfoyle', image: 'https://www.kinopoisk.ru/images/sm_actor/11897.jpg'},
    {name: 'Dinesh Chugtai', image: 'https://www.kinopoisk.ru/images/sm_actor/1833413.jpg'},
    {name: 'Monica Hall', image: 'https://www.kinopoisk.ru/images/sm_actor/731114.jpg'},
    {name: 'Jared', image: 'https://www.kinopoisk.ru/images/sm_actor/1085386.jpg'}
];

// dispatch={store.dispatch.bind(store)}
// state={state}
ReactDOM.render(
    <Provider store={store}>
        <App users={users}
             defaultProject={defaultProject} />
    </Provider>,
    document.getElementById('root')
);