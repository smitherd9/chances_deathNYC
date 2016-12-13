require('babel-polyfill');

import React from 'react';
import { render } from 'react-dom';
import react_redux from 'react-redux';

// import Provider from 'react-redux';
var Provider = require('react-redux').Provider;

import store from './store';
import AppContainer from './components/app-container';


render(<Provider store={store}>
            <AppContainer />
        </Provider>, document.getElementById('app'));

