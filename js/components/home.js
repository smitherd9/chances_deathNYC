import React from 'react';
import actions from '../actions/index';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import { browserHistory } from 'react-router'




export default class Home extends React.Component {
	constructor(props){
		super(props);		
	}

	handleClick() {
		browserHistory.push('/app/search');
	}

	render() {
		
		
		return (
		<section className="homeSection">
			<Row>
				<Col md={6}>
				<div className="shadow-oracle">
					<h3>Welcome! <br/> 
					<br />
					I am the all-seeing oracle of New York!</h3>
					<p>Give me a little information about yourself, and I will query the
						gods for leading causes of death in the city!</p>
				</div>
				</Col>
				<Col md={6}>			
				<div id="appContainerScreen" className="skeletonField"><img src="../../img/skeleton-field.jpg/" /></div>
				</Col>

			</Row>

			<Row>
			<Button id="appContainerButton" onClick={this.handleClick}>Click to search for your fate!</Button>
			</Row>
		</section>
		
			
	   );
	}

}








