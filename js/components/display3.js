import React from 'react';
import actions from '../actions/index';
import store from '../store';
import EthnicityDisplay from './ethnicity-display';
import SexDisplay from './sex-display';
import Display from './display-results';





export default class Display3 extends React.Component {
	constructor(props){
		super(props);
		
	}



	render() {
		
		
		return (
			
			<div className="display">
				<h3>Ethnicity: <EthnicityDisplay /></h3>				
				<h3>Sex: <SexDisplay /></h3>	
			
			</div>
		
			
	   );
	}

}