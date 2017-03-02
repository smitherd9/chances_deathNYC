import React from 'react';
import store from '../store';
import actions from '../actions/index';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Grid, Row, Col, Nav, Navbar, NavItem, Modal, Button, PageHeader } from 'react-bootstrap';




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
        <p className="about hvr-grow-shadow" onClick={this.showAboutModal}>About</p>
        </PageHeader> 

       

         


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
      


      </Grid>
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