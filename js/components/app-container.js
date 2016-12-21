import React from 'react';
import { render } from 'react-dom';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Transition } from 'react-bootstrap'
import { connect } from 'react-redux';
import Ethnicity from './ethnicity';
import Sex from './sex';
import Year from './year';
import Display from './display-results';
import Header from './header';
import Skull from './skull';
import WitchHouse from './witch-house';
import SkeletonField from './skeleton-field';
// import Chart from './c3-chart';
import IntroScreen from './intro-screen';
import ResultsScreen from './results-screen';

// const fade = 2000;


class AppContainer extends React.Component {
	constructor(){
		super();
		
	}

	// fadeOut(){
	// 	setTimeout(() => {

	// 	}, 2000);
	// }


	render() {
		return (

		<div>

		{ this.props.introScreen ? (<IntroScreen />) : (<Header />	) }
		
		{ this.props.resultsScreen ? (<ResultsScreen />) : (<Header /> ) }

		
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