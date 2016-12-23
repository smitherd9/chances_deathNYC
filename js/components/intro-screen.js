import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Ethnicity from './ethnicity';
import Sex from './sex';
import Year from './year';
import Display from './display-results';
import Header from './header';
import Skull from './skull';
import WitchHouse from './witch-house';
import SkeletonField from './skeleton-field';
import { browserHistory } from 'react-router';



class IntroScreen extends React.Component {
	constructor(props){
		super(props);
		this.hide = this.hide.bind(this);
	}

	hide() {
		store.dispatch(actions.introScreen(false));
		browserHistory.push('/app');
	}



	render() {
		console.log(this.props);
		
		return (
			<div className="intro">
			<Grid>
			<Row>
			<h1 className="title">What are the Chances? <br />
			<small className="creepster">--- Death in NYC</small></h1>
			<span className="skull"><img src="../../img/skull.svg" /></span>
			</Row>
			
			<Row>
			<Col md={6}>
			<h2 className="curious">Ever been curious about how you <br />might exit this mortal coil?</h2>
			
			</Col>			
			</Row>
			</Grid>
			<div className="introButton">	
			<Button className="enter" bsSize="large" type="button" onClick={this.hide} active>Enter! </Button>

			</div>
			<h2 className="clickEnter">Click Enter to consult the oracle!</h2>	
			</div>
		
			
	   );
	}

}

const mapStateToProps = (state, props) => {
    return {
        introScreen: state.introScreen
    }
}

export default connect(mapStateToProps)(IntroScreen);