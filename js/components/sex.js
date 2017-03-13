import React from 'react';
import { render } from 'react-dom';
import actions from '../actions/index';
import store from '../store';
import Display from './display-results';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, SplitButton, MenuItem } from 'react-bootstrap';
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

	selectedState(eventKey, event){
		event.preventDefault();
		store.dispatch(actions.selectedSex(eventKey));
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
		

		<div className="shadow width-100">
		<h3>Search by Sex</h3>
		<form>
		<FormGroup>

		<SplitButton className="search-dropdown" title={this.props.selectedSex} toggleLabel="Sex" pullRight id="split-button-pull-right" onSelect={this.selectedState}>
			<MenuItem eventKey="M">Male</MenuItem>
    		<MenuItem eventKey="F">Female</MenuItem>
    	</SplitButton>

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
    	selectedSex: state.selectedSex
        
    }
};

export default connect(mapStateToProps)(Sex);