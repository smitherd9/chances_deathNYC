import React from 'react';
import actions from '../actions/index';
import store from '../store';
import Display from './display-results';
import { connect } from 'react-redux';
import { Button, FormGroup } from 'react-bootstrap';
import { browserHistory } from 'react-router';


class GoButton extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.showResults = this.showResults.bind(this);
		

	}

	showResults() {		
		browserHistory.push('/results');
	}

	handleClick(e){
		e.preventDefault();
		if ((this.props.selectedEthnicity !== "Ethnicity") && (this.props.selectedSex !== "Sex") && (this.props.selectedYear !== "Year")) {
			store.dispatch(actions.byEthnicitySexandYear(store.getState().selectedEthnicity, store.getState().selectedSex, store.getState().selectedYear));
			this.showResults();
		}

		if ((this.props.selectedEthnicity !== "Ethnicity") && (this.props.selectedSex !== "Sex") && (this.props.selectedYear == "Year")) {
			store.dispatch(actions.byEthnicityandSex(store.getState().selectedEthnicity, store.getState().selectedSex));
			this.showResults();
		}

		if ((this.props.selectedEthnicity !== "Ethnicity") && (this.props.selectedSex == "Sex") && (this.props.selectedYear !== "Year")) {
			store.dispatch(actions.byEthnicityandYear(store.getState().selectedEthnicity, store.getState().selectedYear));
			this.showResults();
		}

		if ((this.props.selectedEthnicity == "Ethnicity") && (this.props.selectedSex !== "Sex") && (this.props.selectedYear !== "Year")) {
			store.dispatch(actions.bySexandYear(store.getState().selectedSex, store.getState().selectedYear));
			this.showResults();
		}

		if ((this.props.selectedEthnicity !== "Ethnicity") && (this.props.selectedSex == "Sex") && (this.props.selectedYear == "Year")) {
			store.dispatch(actions.byEthnicity(store.getState().selectedEthnicity));
			this.showResults();
		}

		if ((this.props.selectedEthnicity == "Ethnicity") && (this.props.selectedSex !== "Sex") && (this.props.selectedYear == "Year")) {
			store.dispatch(actions.bySex(store.getState().selectedSex));
			this.showResults();
		}

		if ((this.props.selectedEthnicity == "Ethnicity") && (this.props.selectedSex == "Sex") && (this.props.selectedYear !== "Year")) {
			store.dispatch(actions.byYear(store.getState().selectedYear));
			this.showResults();
		}

		else {
			this.getValidationState();
		}

			console.log(store.getState());			
			console.log('selected: ' + store.getState().selectedEthnicity);
			console.log('selected: ' + store.getState().selectedSex);
			console.log('selected: ' + store.getState().selectedYear);
					

	}



	getValidationState() {
	console.log(this.props.selectedEthnicity);    
    	if (this.props.selectedEthnicity === "Asian and Pacific Islander") return 'success';
    	if (this.props.selectedEthnicity === "Black Non-Hispanic") return 'success';
    	if (this.props.selectedEthnicity === "White Non-Hispanic") return 'success';
    	if (this.props.selectedEthnicity === "Hispanic") return 'success';

    		else return 'error';    
  	}


	render() {



		return (	

		<div className="shadow width-100">

		<FormGroup className="width-100" validationState={this.getValidationState()}>

		<Button bsStyle="primary" bsSize="large" id="appContainerButton" className="width-50"  type="button" onClick={this.handleClick}>Go!</Button>
		
		</FormGroup>		
		</div>		
		
		

		);
	}
}



let mapStateToProps = (state, props) => {
    return {
    	response: state.response,
    	selectedEthnicity: state.selectedEthnicity,
    	selectedSex: state.selectedSex,
    	selectedYear: state.selectedYear
        
    }
};

export default connect(mapStateToProps)(GoButton);