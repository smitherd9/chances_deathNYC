import React from 'react';
import actions from '../actions/index';
import { Button, Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import { browserHistory } from 'react-router';





export default class Home extends React.Component {
	constructor(props){
		super(props);		
	}

	handleClick() {
		browserHistory.push('/search');
	}

	render() {
		
		
		return (	
			
		
		<div className="homeSection">

			<Row className="askOracle">
				<h3>Ask the Oracle!</h3>
				<p>Curious about leading causes of death in NYC?</p>
				<p>With a little information about yourself, I will query for NYC government data.</p>
			</Row>

			<Row className="homeScreen">		
				<div id="appContainerScreen" className="skeletonField">
					<img src="../../img/skeleton-field.jpg" />
				</div>				
			</Row>
			

			<Row className="click-to-enter">
			<Button id="appContainerButton" onClick={this.handleClick}>Click to search for your fate!</Button>
			</Row>
			
		</div>
			
	   );
	}

}








