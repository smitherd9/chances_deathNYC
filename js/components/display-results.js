import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Display1 from './display1';
import Display2 from './display2';
import Display3 from './display3';
import Chart from './c3-chart';




class Display extends React.Component {
	chart;

	constructor(props){
		super(props);
		this.chart = null;
	}

	componentWillUpdate() {		
		this.chart = <Chart />;
		console.log(this.props.response);
	}

	render() {
		return (
					
			<div className="width-100">
			<Row className="resultsRow width-100">
			
			<Col md={4}>
			<Display1 />					
				
			</Col>
			

			
			<Col md={4}>
			<Display2 />
			</Col>
			
			

			
			<Col md={4}>
			<Display3 />
				
			</Col>			
			</Row>

			<Row className="chart-row">
			<Col md={12} className="chart-columns">

			{this.chart}
			</Col>
			</Row>

			</div>
			

			);
	}
}


let mapStateToProps = (state, props) => {
    return {
	response: state.response
        
    }
};

export default connect(mapStateToProps)(Display);



