import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';
import { Jumbotron } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Ethnicity from './ethnicity';
import Sex from './sex';
import Year from './year';


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
			

			
			<Row className="searchRow">
				<Col md={4}><Ethnicity /></Col>
				<Col md={4}><Sex /></Col>
				<Col md={4}><Year /></Col>	
			</Row>
			</Grid>
			</div>
			

			);
	}
}