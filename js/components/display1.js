import React from 'react';
import actions from '../actions/index';
import store from '../store';
import DeathRate from './death-rate';
import AgeAdjusted from './age-adjusted';
import LeadingCause from './leading-cause';





export default class Display1 extends React.Component {
	constructor(props){
		super(props);
		
	}



	render() {
		
		
		return (

			<div className="display">
				<h3>Death Rate: <DeathRate /></h3>
				
				<h3>Age Adjusted Death Rate: <AgeAdjusted /></h3>
				
				<h3>Leading Cause of Death: <LeadingCause /></h3>
			
			
			</div>
		
			
	   );
	}

}

