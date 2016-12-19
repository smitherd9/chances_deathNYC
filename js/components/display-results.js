import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';
import DeathRate from './death-rate';
import AgeAdjusted from './age-adjusted';
import LeadingCause from './leading-cause';
import DeathNum from './death-num';
// import Ethnicity from './ethnicity';
// import Sex from './sex';


class Display extends React.Component {
	constructor(props){
		super(props);

	}



	render() {
		return (
			
			// <div>
			<div className="display">
				<h3>Death Rate: <DeathRate /></h3>
				
				<h3>Age Adjusted Death Rate: </h3>
				<AgeAdjusted />
				<h3>Leading Cause of Death: </h3>
				<LeadingCause />
				<h3>Overall Number of Deaths: </h3>
				<DeathNum />
			</div>
			// </div>

			);
	}
}




let mapStateToProps = (state, props) => {
    return {
    ethnicity: [],
	selectedEthnicity: "",
	selectedSex: "",
	sex: [],
	deathRate: [],
	leadingCause: [],
	ageAdjusted: [],
	deathNum: []
        
    }
};

export default connect(mapStateToProps)(Display);