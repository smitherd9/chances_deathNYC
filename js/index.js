require('babel-polyfill');

import React from 'react';
import { render } from 'react-dom';
import react_redux from 'react-redux';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import store from './store';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import AppContainer from './components/app-container';
import IntroScreen from './components/intro-screen';
import ResultsScreen from './components/results-screen';
import SearchSection from './components/search-section';
import Home from './components/home';
import Chart from './components/c3-chart';


render(<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={AppContainer} >
				<IndexRoute component={Home} ></IndexRoute>
				<Route path="/search" component={SearchSection} ></Route>
				<Route path="/results" component={ResultsScreen} ></Route>
				<Route path="/results" component={Chart} ></Route>
			</Route>



		
        </Router>
        </Provider>, document.getElementById('app'));


      
    

