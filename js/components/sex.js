import React from 'react';
import { render } from 'react-dom';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';




class Sex extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.selectedState = this.selectedState.bind(this);

	}

	handleClick(e) {
		e.preventDefault();	
		store.dispatch(actions.bySex(store.getState().selectedSex));
	}

	selectedState(e){
		e.preventDefault();
		console.log(typeof(e.target.value));
		console.log(e.target.value);
		store.dispatch(actions.selectedState(e.target.value));
	}

	render() {
		return (
		<div>

		<div className="shadow">
		<h3>Search by Sex</h3>
		<form>
		<p>Male <input type="radio" className="form-control" name="sex" id="male" onClick={this.selectedState} value="M"  aria-describedby="basic-addon1" /></p>		
		
		<p>Female <input type="radio" className="form-control" name="sex" id="female" onClick={this.selectedState} value="F"  aria-describedby="basic-addon1" /></p>
		<button className="btn" type="button" onClick={this.handleClick}>Go!</button>
		</form>
		</div>		
		
		</div>

		);
	}
}


let mapStateToProps = (state, props) => {
    return {
    	selectedSex: state.selectedSex
        
    }
};

export default connect(mapStateToProps)(Sex);