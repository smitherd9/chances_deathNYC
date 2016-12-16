import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';
import Display from './display-results';




class Ethnicity extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		e.preventDefault();	
		store.dispatch(actions.byEthnicity(store.getState().selectedEthnicity));
	}

	selectedState(e){
		e.preventDefault();
		store.dispatch(actions.selectedState(e.target.value));
	}

	componentDidUpdate(){
		<Display />
	}

	render() {
		return (
		<div>

		<div className="shadow">
		<h3>Search by Ethnicity</h3>
		<form>
		<p>Asian and Pacific Islander <input type="radio" className="form-control" name="ethnicity" id="asian_and_pacific_islander" onClick={this.selectedState} value="Asian and Pacific Islander"  aria-describedby="basic-addon1" /></p>		
		
		<p>Hispanic <input type="radio" className="form-control" name="ethnicity" id="hispanic" onClick={this.selectedState} value="Hispanic"  aria-describedby="basic-addon1" /></p>
		<p>Black Non-Hispanic <input type="radio" className="form-control" name="ethnicity" id="black"  onClick={this.selectedState} value="Black Non-Hispanic" aria-describedby="basic-addon1" /></p>
		<p>White Non-Hispanic <input type="radio" className="form-control" name="ethnicity" id="white"  onClick={this.selectedState} value="White Non-Hispanic" aria-describedby="basic-addon1" /></p>
		<button className="btn" type="button" onClick={this.handleClick}>Go!</button>
		</form>
		</div>		
		
		</div>

		);
	}
}



let mapStateToProps = (state, props) => {
    return {
    	ethnicity: state.ethnicity
        
    }
};

export default connect(mapStateToProps)(Ethnicity);