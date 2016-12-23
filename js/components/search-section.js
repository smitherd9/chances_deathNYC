import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import Ethnicity from './ethnicity';
import Sex from './sex';
import Year from './year';
import { browserHistory } from 'react-router'




class SearchSection extends React.Component {
	constructor(props){
		super(props);		
	}

	search() {		
		browserHistory.push('/results');
	}

	render() {
		
		
		return (
			<div className="search">
			
			<section className="searchSection">
			<Row className="searchRow">
				<Col md={4}><Ethnicity /></Col>
				<Col md={4}><Sex /></Col>
				<Col md={4}><Year /></Col>	
			</Row>
			
			</section>
			
			
			</div>
		
			
	   );
	}

}

const mapStateToProps = (state, props) => {
    return {
        resultsScreen: state.resultsScreen
    }
}

export default connect(mapStateToProps)(SearchSection);