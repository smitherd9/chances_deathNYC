import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Display1 from './display1';
import Display2 from './display2';
import Display3 from './display3';
import Chart from './c3-chart';




export default class Display extends React.Component {
	constructor(props){
		super(props);

	}



	render() {
		return (
			
			
			<div>
			<Row>
			<div>
			<Col md={4}>
			<Display1 />					
				
			</Col>
			</div>

			<div>
			<Col md={4}>
			<Display2 />
			</Col>
			</div>
			

			<div>
			<Col md={4}>
			<Display3 />
				
			</Col>
			</div>
			</Row>

			<Row>
			<Col md={12}>
			<Chart />
			</Col>
			</Row>

			</div>
			

			);
	}
}




