import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'jquery/dist/jquery.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'

import App from './App.jsx';
import reportWebVitals from './reportWebVitals';

import { HashRouter } from 'react-router-dom'

import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <
    React.StrictMode >

    <
    HashRouter > <
    App > < /App> < /HashRouter >










    <
    /
    React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();