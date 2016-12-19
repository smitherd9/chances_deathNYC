import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';


export default class Skull extends React.Component {
	constructor(props){
		super(props);

	}


	render() {

		return(
			<div><img src="../../img/skull.svg" /></div>

		);
	}

}



