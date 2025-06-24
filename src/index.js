import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './all.min.css';
import './index.css';
import store from './Redux/redux-store';
import App from './App';
import {Provider} from 'react-redux';
import SECRET_API from './SECRET_API';

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);