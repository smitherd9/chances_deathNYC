import React from 'react';
import actions from '../actions/index';
import { Button, Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import Display from './display-results';
import { browserHistory } from 'react-router'




export default class ResultsScreen extends React.Component {
	constructor(props){
		super(props);
		this.hide = this.hide.bind(this);
	}

	hide() {		
		browserHistory.push('/search');
	}



	render() {
		
		
		return (
			<div className="resultsScreen">

			<div className="closeResultsButton">	
			<Button className="closeButton" bsSize="large" type="button" onClick={this.hide} active>Search Again</Button>	
			</div>		

			<Row className="searchRow">
			<Col md={12} sm={12} xs={16}><Display /></Col>
			</Row>
			

			
			
			
			</div>
		
			
	   );
	}

}

