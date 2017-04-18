import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';
import { Button, FormGroup } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import AlertContainer from 'react-alert';


class GoButton extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.showResults = this.showResults.bind(this);
		this.alertOptions = {
      		offset: 30,
      		position: 'top right',
      		theme: 'dark',
      		time: 2000,
      		transition: 'scale'
    	};
		
	}

	  showAlert(){
    	msg.show('Please make a selection', {
      	time: 2000,
      	type: 'error'
      	
    });
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

		else if ((this.props.selectedEthnicity !== "Ethnicity") && (this.props.selectedSex !== "Sex") && (this.props.selectedYear == "Year")) {
			store.dispatch(actions.byEthnicityandSex(store.getState().selectedEthnicity, store.getState().selectedSex));
			this.showResults();
		}

		else if ((this.props.selectedEthnicity !== "Ethnicity") && (this.props.selectedSex == "Sex") && (this.props.selectedYear !== "Year")) {
			store.dispatch(actions.byEthnicityandYear(store.getState().selectedEthnicity, store.getState().selectedYear));
			this.showResults();
		}

		else if ((this.props.selectedEthnicity == "Ethnicity") && (this.props.selectedSex !== "Sex") && (this.props.selectedYear !== "Year")) {
			store.dispatch(actions.bySexandYear(store.getState().selectedSex, store.getState().selectedYear));
			this.showResults();
		}

		else if ((this.props.selectedEthnicity !== "Ethnicity") && (this.props.selectedSex == "Sex") && (this.props.selectedYear == "Year")) {
			store.dispatch(actions.byEthnicity(store.getState().selectedEthnicity));
			this.showResults();
		}

		else if ((this.props.selectedEthnicity == "Ethnicity") && (this.props.selectedSex !== "Sex") && (this.props.selectedYear == "Year")) {
			store.dispatch(actions.bySex(store.getState().selectedSex));
			this.showResults();
		}

		else if ((this.props.selectedEthnicity == "Ethnicity") && (this.props.selectedSex == "Sex") && (this.props.selectedYear !== "Year")) {
			store.dispatch(actions.byYear(store.getState().selectedYear));
			this.showResults();
		}

		else {
			this.showAlert();
		}

			console.log(store.getState());			
			console.log('selected: ' + store.getState().selectedEthnicity);
			console.log('selected: ' + store.getState().selectedSex);
			console.log('selected: ' + store.getState().selectedYear);
					

	}


	render() {



		return (	

		<div className="shadow width-100">

		<FormGroup className="width-100">

		<Button bsStyle="primary" bsSize="large" id="appContainerButton" className="width-50"  type="button" onClick={this.handleClick}>Go!</Button>
		<AlertContainer  ref={(a) => global.msg = a} {...this.alertOptions} />
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