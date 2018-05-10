import 'babel-polyfill';
import './assets/styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/App.jsx';

ReactDOM.render(
    <Application />,
    document.getElementById('root')
);