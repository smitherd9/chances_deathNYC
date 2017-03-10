import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { Button, Jumbotron, Grid, Row, Col, Modal } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';





class Home extends React.Component {
	constructor(props){
		super(props);
		this.showAboutModal = this.showAboutModal.bind(this);		
	}

	showAboutModal() {
    store.dispatch(actions.showAboutModal());
  }

  	closeAboutModal() {
    store.dispatch(actions.closeAboutModal());
  }

	handleClick() {
		browserHistory.push('/search');
	}

	render() {
		
		
		return (	
			
		
		<div className="homeSection">

			<Row className="homeScreen width-100">				
				<p>Curious about leading causes of death in NYC?</p>
				<p>With a little information, I will query for NYC government data.</p>
			</Row>
			<Row className="homeScreen2 width-100">
				<span className="about hvr-grow-shadow" onClick={this.showAboutModal}>Learn More</span>				
			</Row>

			<Row className="click-to-enter width-100">
			<Button id="appContainerButton" onClick={this.handleClick}>SEARCH YOUR FATE!</Button>
			</Row>




			





			<Modal show={this.props.showAboutModal} onHide={this.closeSignUp}>
              <Modal.Header>
              <h2>What are the Chances? <br/>-- Death in NYC</h2>
              </Modal.Header>
                <Modal.Body>                  
                  <p>Gathering data on leading causes of death in
                  New York City from 2007 to 2014, this app gives you the most likely
                  cause of death based on NYC's Open Data API's highest age adjusted death rate.</p> 
                  <p>It also generates a C3.js chart to display leading causes of death based on the
                  age adjusted death rate and the user's search query.</p>
                  
                </Modal.Body>
                <Modal.Footer>                  
                  <Button className="modal-close-btn" onClick={this.closeAboutModal}>Close</Button>
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

export default connect(mapStateToProps)(Home);








