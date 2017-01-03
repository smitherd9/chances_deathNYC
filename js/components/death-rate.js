import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';


class DeathRate extends React.Component {
	constructor(props){
		super(props);
		console.log(this.props);

	}

	render() {

		let deathRateArray = [];			
			for (let i = 0; i < this.props.response.length; i++) {			
				deathRateArray.push(<p>{this.props.response[i].deathRate}</p>);				
								
			}	

		return(
			<div className="results">{deathRateArray[0]}</div>

		);
	}

}




let mapStateToProps = (state, props) => {
    return {
	response: state.response
        
    }
};

export default connect(mapStateToProps)(DeathRate);