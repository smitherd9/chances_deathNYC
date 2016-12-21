import React from 'react';
import actions from '../actions/index';
import store from '../store';
import Display from './display-results';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Radio } from 'react-bootstrap';


class Year extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.showResults = this.showResults.bind(this);

	}

	handleClick(e) {
		e.preventDefault();	
		store.dispatch(actions.byYear(store.getState().selectedYear));
		console.log(store.getState());
		console.log('selected: ' + store.getState().selectedSex);
		console.log('typeOf: ' + typeof(store.getState().selectedYear));
		this.showResults();
	}

	selectedState(e){
		e.preventDefault();
		console.log(typeof(e.target.value));
		console.log(e.target.value);
		store.dispatch(actions.selectedYear(e.target.value));
	}

	showResults() {
		store.dispatch(actions.showResults(true));
	}

	componentWillUpdate(nextProps, nextState) {
		if (nextProps.response == true) {
			console.log('this.nextProps will update year.js: ' + nextProps);
		}
		
	}

	componentDidUpdate() {
		<Display />
		
	}


	render() {
		console.log(this.props);
		return (
		<div>

		<div className="shadow">
		<h3>Search by Year</h3>
		<form>
		<FormGroup>

		<Radio
			value="2007"
			onClick={this.selectedState}
		>
		<p>2007</p> 		
		</Radio>
		<Radio
			value="2008"
			onClick={this.selectedState}
		>
		<p>2008</p> 		
		</Radio>
		<Radio
			value="2009"
			onClick={this.selectedState}
		>
		<p>2009</p> 		
		</Radio>
		<Radio
			value="2010"
			onClick={this.selectedState}
		>
		<p>2010</p> 		
		</Radio>
		<Radio
			value="2011"
			onClick={this.selectedState}
		>
		<p>2011</p> 		
		</Radio>
		<Radio
			value="2012"
			onClick={this.selectedState}
		>
		<p>2012</p> 		
		</Radio>
		<Radio
			value="2013"
			onClick={this.selectedState}
		>
		<p>2013</p> 		
		</Radio>
		<Radio
			value="2014"
			onClick={this.selectedState}
		>
		<p>2014</p> 		
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
    selectedYear: state.selectedYear,
	response: state.response
        
    }
};

export default connect(mapStateToProps)(Year);