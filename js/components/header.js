import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';


export default class Header extends React.Component {

	render() {
		return (
			<div>
			<h1 className="hello">What are the Chances? --- Death in NYC</h1>
			</div>

			);
	}
}