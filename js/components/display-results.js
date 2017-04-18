import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Display1 from './display1';
import Display2 from './display2';
import Display3 from './display3';





class Display extends React.Component {

	render() {

			if (this.props.response) {
			console.log(this.props.response);
}
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



