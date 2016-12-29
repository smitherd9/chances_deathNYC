import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';


class DeathNum extends React.Component {
	constructor(props){
		super(props);

	}


	render() {

		let deathNumArray = [];			
			for (let i = 0; i < this.props.response.length; i++) {			
				deathNumArray.push(<p>{this.props.response[i].deathNum}</p>);				
								
			}	

		return(
			<div className="results">{deathNumArray[0]}</div>

		);
	}

}




let mapStateToProps = (state, props) => {
    return {
	response: state.response
        
    }
};

export default connect(mapStateToProps)(DeathNum);