import React from 'react';
import actions from '../actions/index';
import store from '../store';
import Display from './display-results';
import { connect } from 'react-redux';
import { Button, DropdownButton, MenuItem, FormGroup, FormControl, Grid, Row, Col } from 'react-bootstrap';
import { browserHistory } from 'react-router';






class Ethnicity extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.showResults = this.showResults.bind(this);
		this.selectedState = this.selectedState.bind(this);
	}

	handleClick(e){
		e.preventDefault();	
		store.dispatch(actions.byEthnicity(store.getState().selectedEthnicity));
		console.log(store.getState());
		this.showResults();
		console.log('selected: ' + store.getState().selectedEthnicity);
	}

	selectedState(eventKey, event){
		event.preventDefault();
		store.dispatch(actions.selectedEthnicity(eventKey));
	}

	showResults() {		
		browserHistory.push('/results');
	}


	render() {



		return (	

		<div className="shadow width-100">		
		<h3>Search by Ethnicity</h3>
		<form className="width-100">
		
		<FormGroup className="width-100" required>

		<DropdownButton title={this.props.selectedEthnicity} pullRight id="split-button-pull-right" onSelect={this.selectedState}>
			<MenuItem eventKey="Asian and Pacific Islander">Asian and Pacific Islander</MenuItem>
    		<MenuItem eventKey="Black Non-Hispanic">Black Non-Hispanic</MenuItem>
    		<MenuItem eventKey="White Non-Hispanic">White Non-Hispanic</MenuItem>
    		<MenuItem eventKey="Hispanic">Hispanic</MenuItem>
    	</DropdownButton>
		
		</FormGroup>

		<Button bsStyle="primary" bsSize="large" id="appContainerButton" className="width-50"  type="button" onClick={this.handleClick}>Go!</Button>
		
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