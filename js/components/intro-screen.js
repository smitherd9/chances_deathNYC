import React from 'react';
import actions from '../actions/index';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import Header from './header';
import { browserHistory } from 'react-router';



export default class IntroScreen extends React.Component {
	constructor(props){
		super(props);
		this.hide = this.hide.bind(this);
	}

	hide() {		
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

