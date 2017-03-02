import React from 'react';
import store from '../store';
import actions from '../actions/index';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Grid, Row, Col, Nav, Navbar, NavItem, Modal, Button, PageHeader } from 'react-bootstrap';



export default class Footer extends React.Component {
	constructor(){
		super();
		
	}



	render() {
		return (
		<div className="footer">
			<Grid>
				<Row>
					<Col sm={12}>
					<span>
                    <p>
                    <a href="https://www.linkedin.com/in/daniel-smither-62b871130" target="_blank">
                    	<i className="fa fa-linkedin-square fa-2x hvr-grow-rotate" aria-hidden="true"></i>
                    	</a>
                    	<i className="fa fa-copyright" aria-hidden="true"></i>2016 A project by

                    	<a href="https://github.com/smitherd9" target="_blank">
                    <i className="fa fa-github fa-2x hvr-grow-rotate" aria-hidden="true"></i>
                    	</a>
                    </p>
                    <a href="https://smitherd9.github.io">
                    Daniel Smither
                    </a>
                </span>

					</Col>
				</Row>
			</Grid>		
	
		
		</div>

		);
	}
}