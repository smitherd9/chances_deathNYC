import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';


export default class SkeletonField extends React.Component {
	constructor(props){
		super(props);

	}


	render() {

		return(
			<div className="skeletonField"><img src="../../img/skeleton-field.jpg"/></div>

		);
	}

}