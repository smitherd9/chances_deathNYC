import React from 'react';
import actions from '../actions/index';
import store from '../store';
import Display from './display-results';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, DropdownButton, MenuItem } from 'react-bootstrap';
import { browserHistory } from 'react-router';



class Year extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.showResults = this.showResults.bind(this);

	}

	handleClick(e) {
		e.preventDefault();
		if (this.props.selectedYear !== "Year") {	
			store.dispatch(actions.byYear(store.getState().selectedYear));
			console.log(store.getState());
			console.log('selected: ' + store.getState().selectedSex);
			console.log('typeOf: ' + typeof(store.getState().selectedYear));
			this.showResults();
		}
	}

	selectedState(eventKey, event){
		event.preventDefault();
		store.dispatch(actions.selectedYear(eventKey));
	}

	showResults() {		
		browserHistory.push('/results');
	}

	componentDidUpdate() {
		
		
	}


	render() {
		console.log(this.props);
		return (
		

		<div className="shadow width-100">
		<h3>Search by Year</h3>
		<form>
		<FormGroup>

		<DropdownButton title={this.props.selectedYear} pullRight id="split-button-pull-right" onSelect={this.selectedState}>
			<MenuItem eventKey="2007">2007</MenuItem>
    		<MenuItem eventKey="2008">2008</MenuItem>
    		<MenuItem eventKey="2009">2009</MenuItem>
    		<MenuItem eventKey="2010">2010</MenuItem>
    		<MenuItem eventKey="2011">2011</MenuItem>
    		<MenuItem eventKey="2012">2012</MenuItem>
    		<MenuItem eventKey="2013">2013</MenuItem>
    		<MenuItem eventKey="2014">2014</MenuItem>
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
    selectedYear: state.selectedYear,
	response: state.response
        
    }
};

export default connect(mapStateToProps)(Year);