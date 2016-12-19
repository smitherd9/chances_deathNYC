import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Display from './display-results';




class Ethnicity extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		e.preventDefault();	
		store.dispatch(actions.byEthnicity(store.getState().selectedEthnicity));
		console.log(store.getState());
	}

	selectedState(e){
		e.preventDefault();
		console.log(typeof(e.target.value));
		console.log(e.target.value);
		store.dispatch(actions.selectedState(e.target.value));
	}

	componentDidUpdate(){
		<Display />
	}

	render() {
		return (	

		<div className="shadow">		
		<h3>Search by Ethnicity</h3>
		<form>
		<p>Asian and Pacific Islander <input type="radio" className="form-control" name="ethnicity" id="asian_and_pacific_islander" onClick={this.selectedState} value="Asian and Pacific Islander"  aria-describedby="basic-addon1" />{this.props.selectedEthnicity}</p>		
		
		<p>Hispanic <input type="radio" className="form-control" name="ethnicity" id="hispanic" onClick={this.selectedState} value="Hispanic"  aria-describedby="basic-addon1" /></p>
		<p>Black Non-Hispanic <input type="radio" className="form-control" name="ethnicity" id="black"  onClick={this.selectedState} value="Black Non-Hispanic" aria-describedby="basic-addon1" /></p>
		<p>White Non-Hispanic <input type="radio" className="form-control" name="ethnicity" id="white"  onClick={this.selectedState} value="White Non-Hispanic" aria-describedby="basic-addon1" /></p>
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