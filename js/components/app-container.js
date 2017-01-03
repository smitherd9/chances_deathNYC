import React from 'react';
import { render } from 'react-dom';
import { Transition } from 'react-bootstrap'
import { Button, Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import Ethnicity from './ethnicity';
import store from '../store'
import Sex from './sex';
import Year from './year';
import Display from './display-results';
import Header from './header';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import IntroScreen from './intro-screen';
import ResultsScreen from './results-screen';
import { browserHistory } from 'react-router';
import Chart from './c3-chart';


export default class AppContainer extends React.Component {
	constructor(){
		super();
		
	}



	render() {
		return (
		<div className="appContainer">
		<Header />		

		{this.props.children}			
		
		</div>

		);
	}
}



