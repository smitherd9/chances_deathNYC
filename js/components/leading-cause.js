import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';


class LeadingCause extends React.Component {
	constructor(props){
		super(props);

	}


	render() {
		let leadCauseArray = [];			
			for (let i = 0; i < this.props.response.length; i++) {			
				leadCauseArray.push(<p>{this.props.response[i].leadingCause}</p>);				
								
			}	
		return(
			<div className="results">{leadCauseArray[0]}</div>

		);
	}

}



let mapStateToProps = (state, props) => {
    return {
	response: state.response
        
    }
};

export default connect(mapStateToProps)(LeadingCause);