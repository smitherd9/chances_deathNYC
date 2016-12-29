import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';


class EthnicityDisplay extends React.Component {
	constructor(props){
		super(props);

	}


	render() {
			let ethArray = [];			
			for (let i = 0; i < this.props.response.length; i++) {			
				ethArray.push(<p>{this.props.response[i].race_ethnicity}</p>);				
								
			}				
	

		return(

			<div className="results">{ethArray[0]}</div>

			

		);

	  }
	}





let mapStateToProps = (state, props) => {
    return {
	response: state.response
        
    }
};

export default connect(mapStateToProps)(EthnicityDisplay);