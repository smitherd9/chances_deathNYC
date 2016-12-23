import React from 'react';
import { render } from 'react-dom';
import { Transition } from 'react-bootstrap'
import { Button, Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import Ethnicity from './ethnicity';
import Sex from './sex';
import Year from './year';
import Display from './display-results';
import Header from './header';
import Skull from './skull';
import WitchHouse from './witch-house';
import SkeletonField from './skeleton-field';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import Chart from './c3-chart';
import IntroScreen from './intro-screen';
import ResultsScreen from './results-screen';
import { browserHistory } from 'react-router';


class AppContainer extends React.Component {
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



const mapStateToProps = (state, props) => {
    return {
        introScreen: state.introScreen,
        resultsScreen: state.resultsScreen
    }
}

export default connect(mapStateToProps)(AppContainer);