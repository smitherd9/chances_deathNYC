import React from 'react';
import store from '../store';
import actions from '../actions/index';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Grid, Row, Col, Nav, Navbar, NavItem, Modal, Button } from 'react-bootstrap';



class Header extends React.Component {
	constructor(props) {
		super(props);
		this.showAboutModal = this.showAboutModal.bind(this);
	}

	showAboutModal() {
		store.dispatch(actions.showAboutModal());
	}

	closeAboutModal() {
		store.dispatch(actions.closeAboutModal());
	}

	home() {
		browserHistory.push('/')
	}

	render() {
		return (
			<div className="header">
			<Navbar collapseOnSelect fixedTop>
    			<Navbar.Header>
      			<Navbar.Brand>
        		<NavItem><h1 className="title" onClick={this.home}>What are the Chances? <br />
			<small className="creepster">--- Death in NYC</small></h1></NavItem>
      			</Navbar.Brand>      			
    			</Navbar.Header>
    			<Navbar.Collapse>
      		    <Nav pullRight>
      		    	<NavItem><h2 className="title" onClick={this.showAboutModal}>About</h2></NavItem>
        			<NavItem><div className="skull"><img src="../../img/skull.svg" /></div></NavItem>
        			
      			</Nav>
    			</Navbar.Collapse>
  			</Navbar>


  			<Modal show={this.props.showAboutModal} onHide={this.closeSignUp}>
          		<Modal.Header closeButton>
            	<h1>What are the Chances? <br/>-- Death in NYC</h1>
          		</Modal.Header>
          			<Modal.Body>            			
            			<p>This app gathers data on leading causes of death in</p>
            			<p>New York City from 2007 to 2014 and gives you the most likely</p>
            			<p>cause of death based on NYC's Open Data API's highest age adjusted death rate. </p>
            			<p>It also generates a C3.js chart to display leading causes of death based on the</p>
            			<p>age adjusted death rate and the user's search query.</p>
            			
            		</Modal.Body>
            		<Modal.Footer>            			
            			<Button onClick={this.closeAboutModal}>Close</Button>
          			</Modal.Footer>
        	</Modal>	

			
			
			</div>
			

			);
	}
}


let mapStateToProps = (state, props) => {
    return {
    	showAboutModal: state.showAboutModal
    	
        
    }
};

export default connect(mapStateToProps)(Header);