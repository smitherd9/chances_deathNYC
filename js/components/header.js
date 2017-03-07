import React from 'react';
import actions from '../actions/index';
import { browserHistory } from 'react-router';
import { Grid, Row, Col, Nav, Navbar, NavItem, Modal, Button, PageHeader } from 'react-bootstrap';




export default class Header extends React.Component {
	constructor(props) {
		super(props);
		
	}


	home() {
		browserHistory.push('/');
	}


	render() {
		return (
    <div className="header-container">
      <Navbar>
        <Navbar.Header>
        <Navbar.Brand className="hvr-grow-shadow" onClick={this.home}><h1>What are the Chances?</h1>
        <small className="creepster">--- Death in NYC</small>
        </Navbar.Brand>
        </Navbar.Header>
      </Navbar>

      <Grid fluid>
        <PageHeader>
        <span className="skull center-block">
          <a href="#" className="hvr-float-shadow"><img src="../../img/skull.svg" /></a>
        </span>
        </PageHeader>  

      </Grid>
    </div>  
      
			

			);
	}
}

