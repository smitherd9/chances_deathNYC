import React from 'react';
import actions from '../actions/index';
import { Button, Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import Display from './display-results';
import DisplayChart from './display-chart';
import { browserHistory } from 'react-router';
import store from '../store';




export default class ResultsScreen extends React.Component {
	constructor(props){
		super(props);
		this.hide = this.hide.bind(this);
		this.resetState = this.resetState.bind(this);
	}

	hide() {		
		browserHistory.push('/search');
		this.resetState();
	}


	resetState() {
		store.dispatch(actions.resetState());
	}



	render() {
		
		
		return (
			<div className="resultsScreen">			
				<Display />			
				<DisplayChart />
			
			

			<Row className="closeResultsButton width-100">
			<Col md={12}>				
			<Button className="closeButton" bsSize="large" type="button" onClick={this.hide}>Search Again</Button>
			</Col>	
			</Row>	
			

			
			
			
			</div>
		
			
	   );
	}

}
