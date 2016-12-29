import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import Ethnicity from './ethnicity';
import Sex from './sex';
import Year from './year';
import Display from './display-results';
import Header from './header';
import { browserHistory } from 'react-router'




class ResultsScreen extends React.Component {
	constructor(props){
		super(props);
		this.hide = this.hide.bind(this);
	}

	hide() {
		store.dispatch(actions.hideResults(false));
		browserHistory.push('/app/search');
	}



	render() {
		
		
		return (
			<div className="resultsScreen">
			<section className="resultsSection">
			<Row className="searchRow">
			<Col md={12}><Display /></Col>

			<div className="closeResultsButton">	
			<Button className="close" bsSize="large" type="button" onClick={this.hide} active>Search Again</Button>	
			</div>
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

export default connect(mapStateToProps)(ResultsScreen);