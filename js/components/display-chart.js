import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';
import { Row, Col, Grid } from 'react-bootstrap';
import Chart from './c3-chart';




class DisplayChart extends React.Component {
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

export default connect(mapStateToProps)(DisplayChart);