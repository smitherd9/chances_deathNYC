import React from 'react';
import actions from '../actions/index';
import store from '../store';
import Display from './display-results';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, Radio, Grid, Row, Col } from 'react-bootstrap';
import { browserHistory } from 'react-router';






class Ethnicity extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.showResults = this.showResults.bind(this);
	}

	handleClick(e){
		e.preventDefault();	
		store.dispatch(actions.byEthnicity(store.getState().selectedEthnicity));
		console.log(store.getState());
		this.showResults();
	}

	selectedState(e){
		e.preventDefault();
		console.log(typeof(e.target.value));
		console.log(e.target.value);
		store.dispatch(actions.selectedState(e.target.value));
	}

	showResults() {		
		browserHistory.push('/results');
	}

	componentDidUpdate(){
		<Display />
	}

	render() {



		return (	

		<div className="shadow">		
		<h3>Search by Ethnicity</h3>
		<form>
		
		<FormGroup>

		<Radio
			value="Asian and Pacific Islander"
			onClick={this.selectedState}
		>
		<p>Asian and Pacific Islander</p> 		
		</Radio>
		<Radio
			value="Black Non-Hispanic"
			onClick={this.selectedState}
		>
		<p>Black Non-Hispanic</p> 		
		</Radio>
		<Radio
			value="White Non-Hispanic"
			onClick={this.selectedState}
		>
		<p>White Non-Hispanic</p> 		
		</Radio>
		<Radio
			value="Hispanic"
			onClick={this.selectedState}
		>
		<p>Hispanic</p> 		
		</Radio>
		
		</FormGroup>

		<Button bsStyle="primary" bsSize="large"  type="button" onClick={this.handleClick}>Go!</Button>
		
		</form>
		

		</div>		
		
		

		);
	}
}



let mapStateToProps = (state, props) => {
    return {
    	response: state.response,
    	selectedEthnicity: state.selectedEthnicity
        
    }
};

export default connect(mapStateToProps)(Ethnicity);