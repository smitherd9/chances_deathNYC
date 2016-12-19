import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';


export default class WitchHouse extends React.Component {
	constructor(props){
		super(props);

	}


	render() {

		return(
			<div className="witchHouse"><img src="../../img/witch-house.jpg"/></div>

		);
	}

}