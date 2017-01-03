import React from 'react';
import { render } from 'react-dom';
import actions from '../actions/index';
import store from '../store';
import Display from './display-results';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, Radio } from 'react-bootstrap';
import { browserHistory } from 'react-router';





class Sex extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.showResults = this.showResults.bind(this);		

	}

	handleClick(e) {
		e.preventDefault();	
		store.dispatch(actions.bySex(store.getState().selectedSex));
		console.log(store.getState());
		console.log('selected: ' + store.getState().selectedSex);
		console.log('typeOf: ' + typeof(store.getState().selectedSex));
		this.showResults();
	}

	selectedState(e){
		e.preventDefault();
		console.log(typeof(e.target.value));
		console.log(e.target.value);
		store.dispatch(actions.selectedSex(e.target.value));
	}

	showResults() {		
		browserHistory.push('/results');
	}

	componentDidUpdate() {
		<Display />
		
	}


	render() {
		console.log(this.props);
		return (
		<div>

		<div className="shadow">
		<h3>Search by Sex</h3>
		<form>
		<FormGroup>

		<Radio
			value="M"
			onClick={this.selectedState}
		>
		<p>Male</p> 		
		</Radio>
		<Radio
			value="F"
			onClick={this.selectedState}
		>
		<p>Female</p> 		
		</Radio>
		</FormGroup>
		<Button bsStyle="primary" bsSize="large"  type="button" onClick={this.handleClick}>Go!</Button>
		</form>
		</div>		
		
		</div>

		);
	}
}


let mapStateToProps = (state, props) => {
    return {
    	response: state.response,
    	selectedSex: state.selectedSex
        
    }
};

export default connect(mapStateToProps)(Sex);