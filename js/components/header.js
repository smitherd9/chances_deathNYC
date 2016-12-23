import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
// import Ethnicity from './ethnicity';
// import Sex from './sex';
// import Year from './year';
import SearchSection from './search-section';


export default class Header extends React.Component {

	render() {
		return (
			<div className="header">
			<Grid>
			<Row>		
			<h1 className="title">What are the Chances? <br />
			<small className="creepster">--- Death in NYC</small></h1>
			<span className="skull"><img src="../../img/skull.svg" /></span>
			</Row>
			

			
			</Grid>
			</div>
			

			);
	}
}