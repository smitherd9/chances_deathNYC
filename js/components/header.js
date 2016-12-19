import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';


export default class Header extends React.Component {

	render() {
		return (
			<Jumbotron>			
			<h1 className="title">What are the Chances? <br />
			<small className="creepster">--- Death in NYC</small></h1>
			<span className="skull"><img src="../../img/skull.svg" /></span>
			</Jumbotron>
			

			);
	}
}