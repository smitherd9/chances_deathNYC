import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';


class AgeAdjusted extends React.Component {
	constructor(props){
		super(props);

	}


	render() {

		let ageAdjustedArray = [];			
			for (let i = 0; i < this.props.response.length; i++) {			
				ageAdjustedArray.push(<p>{this.props.response[i].ageAdjusted}</p>);				
								
			}	

		return(
			<div className="results">{ageAdjustedArray[0]}</div>

		);
	}

}




let mapStateToProps = (state, props) => {
    return {
	response: state.response
        
    }
};

export default connect(mapStateToProps)(AgeAdjusted);