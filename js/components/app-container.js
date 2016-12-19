import React from 'react';
import { render } from 'react-dom';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Ethnicity from './ethnicity';
import Sex from './sex';
import Display from './display-results';
import Header from './header';
import Skull from './skull';
import WitchHouse from './witch-house';
import SkeletonField from './skeleton-field';




export default class AppContainer extends React.Component {

	render() {
		return (

		<div>
		<Header />
		<Grid>
		<Row className="searchRow">
		
		
		<Col md={4}><Ethnicity /></Col>
		<Col md={4}><Sex /></Col>
		<Col md={4}><WitchHouse /></Col>		

		
		
		
		</Row>

		<Row className="searchRow">
		<Col md={4}><Display /></Col>
		<Col md={8}><SkeletonField /></Col>

		
		</Row>
		
		</Grid>

		
		</div>

		);
	}
}