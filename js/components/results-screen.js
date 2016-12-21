import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Ethnicity from './ethnicity';
import Sex from './sex';
import Year from './year';
import Display from './display-results';
import Header from './header';
import Skull from './skull';
import WitchHouse from './witch-house';
import SkeletonField from './skeleton-field';



class ResultsScreen extends React.Component {
	constructor(props){
		super(props);
		this.hide = this.hide.bind(this);
	}

	hide() {
		store.dispatch(actions.hideResults(false));
	}



	render() {
		
		
		return (
			<div className="resultsScreen">
			<Grid>
			<Row>
			<h1 className="title">What are the Chances? <br />
			<small className="creepster">--- Death in NYC</small></h1>
			<span className="skull"><img src="../../img/skull.svg" /></span>
			</Row>

			<Row className="searchRow">
			<Col md={6}><Display /></Col>
			<Col md={6}><div className="closeResultsButton">	
			<Button className="close" bsSize="large" type="button" onClick={this.hide} active>Search Again </Button>	
			</div></Col>
			</Row>
			</Grid>
			
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