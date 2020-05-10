import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import './all.min.css';
import './index.css';
import store from "./Redux/redux-store";
import App from "./App";

let users = [
    {name: 'Richard Hendricks', image: 'https://www.kinopoisk.ru/images/sm_actor/1615667.jpg'},
    {name: 'Nelson Bighetti', image: 'https://www.kinopoisk.ru/images/sm_actor/1852968.jpg'},
    {name: 'Bertram Gilfoyle', image: 'https://www.kinopoisk.ru/images/sm_actor/11897.jpg'},
    {name: 'Dinesh Chugtai', image: 'https://www.kinopoisk.ru/images/sm_actor/1833413.jpg'},
    {name: 'Monica Hall', image: 'https://www.kinopoisk.ru/images/sm_actor/731114.jpg'},
    {name: 'Jared', image: 'https://www.kinopoisk.ru/images/sm_actor/1085386.jpg'}
];

const renderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state}
             dispatch={store.dispatch.bind(store)} users={users} />,
        document.getElementById('root')
    );
};

renderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
