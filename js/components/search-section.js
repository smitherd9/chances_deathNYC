import React from 'react';
import actions from '../actions/index';
import { Button, Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import Ethnicity from './ethnicity';
import Sex from './sex';
import Year from './year';
import { browserHistory } from 'react-router'




export default class SearchSection extends React.Component {
	constructor(props){
		super(props);		
	}

	search() {		
		browserHistory.push('/results');
	}

	render() {
		
		
		return (
			<div className="search">
			
			
			<Row className="searchRow width-100">
				<Col md={4}><Ethnicity /></Col>
				<Col md={4}><Sex /></Col>
				<Col md={4}><Year /></Col>	
			</Row>
			
			
			
			
			
			</div>
		
			
	   );
	}

}
