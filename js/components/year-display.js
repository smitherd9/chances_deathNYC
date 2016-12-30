import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';


class YearDisplay extends React.Component {
	constructor(props){
		super(props);

	}


	render() {
		
		let yearArray = [];			
			for (let i = 0; i < this.props.response.length; i++) {			
				yearArray.push(<p>{this.props.response[i].year}</p>);				
								
			}				
	
		return(
			<div className="results">{yearArray[0]}</div>

		);
	}

}



let mapStateToProps = (state, props) => {
    return {
	response: state.response
        
    }
};

export default connect(mapStateToProps)(YearDisplay);