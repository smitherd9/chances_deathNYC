import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';


class SexDisplay extends React.Component {
	constructor(props){
		super(props);

	}


	render() {
			let sexArray = [];			
			for (let i = 0; i < this.props.response.length; i++) {			
				sexArray.push(<p>{this.props.response[i].sex}</p>);				
								
			}	

		return(
			<div className="results">{sexArray[0]}</div>

		);
	}

}



let mapStateToProps = (state, props) => {
    return {
	response: state.response
        
    }
};

export default connect(mapStateToProps)(SexDisplay);