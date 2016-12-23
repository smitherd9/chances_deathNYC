import React from 'react';
import actions from '../actions/index';
import store from '../store';
import YearDisplay from './year-display';
import DeathNum from './death-num';
import Display from './display-results';




export default class Display2 extends React.Component {
	constructor(props){
		super(props);
		
	}



	render() {
		
		
		return (
			
			<div className="display">
				<h3>Total Number of Deaths per 100,000 Residents: <DeathNum /></h3>
				<h3>For the Year: <YearDisplay /></h3>		
			
			</div>
		
			
	   );
	}

}