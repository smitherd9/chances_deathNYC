require('babel-polyfill');

import React from 'react';
import { render } from 'react-dom';
import react_redux from 'react-redux';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import AppContainer from './components/app-container';
import Header from './components/header';
import SkeletonField from './components/skeleton-field';
import Ethnicity from './components/ethnicity';
import Sex from './components/sex';
import Year from './components/year';
import Display from './components/display-results';
import IntroScreen from './components/intro-screen';


render(<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={AppContainer} >
				<IndexRoute component={Header} />
			</Route>

			<Route path="/intro" component={IntroScreen} >				
			</Route>		
        </Router>
        </Provider>, document.getElementById('app'));




// < />
// 		<>
// 		<Row className="searchRow">
// 		<Col lg={12}><SkeletonField /></Col>
// 		</Row>
// 		<Row className="searchRow">
		
		
// 		<Col md={4}><Ethnicity /></Col>
// 		<Col md={4}><Sex /></Col>
// 		<Col md={4}><Year /></Col>		

		
		
		
// 		</Row>

// 		<Row className="searchRow">
// 		<Col md={4}><Display /></Col>
		

		
// 		</Row>
		
// 		</Grid>



    
      
    

