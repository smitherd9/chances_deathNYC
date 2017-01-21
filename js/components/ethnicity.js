import React from 'react';
import actions from '../actions/index';
import store from '../store';
import Display from './display-results';
import { connect } from 'react-redux';
import { Button, SplitButton, MenuItem, FormGroup, FormControl, Grid, Row, Col } from 'react-bootstrap';
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
	}

	selectedState(eventKey, event){
		event.preventDefault();
		store.dispatch(actions.selectedEthnicity(eventKey));
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

		<SplitButton title={this.props.selectedEthnicity} toggleLabel="Search by Ethnicity" pullRight id="split-button-pull-right" onSelect={this.selectedState}>
			<MenuItem eventKey="Asian and Pacific Islander">Asian and Pacific Islander</MenuItem>
    		<MenuItem eventKey="Black Non-Hispanic">Black Non-Hispanic</MenuItem>
    		<MenuItem eventKey="White Non-Hispanic">White Non-Hispanic</MenuItem>
    		<MenuItem eventKey="Hispanic">Hispanic</MenuItem>
    	</SplitButton>
		
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