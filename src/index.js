import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import './all.min.css';
import './index.css';
import store from "./Redux/state";
import App from "./App";


const renderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state}
             dispatch={store.dispatch.bind(store)} />,
        document.getElementById('root')
    );
};

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
