import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';



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