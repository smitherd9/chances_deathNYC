import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';


class DeathNum extends React.Component {
	constructor(props){
		super(props);

	}


	render() {

		return(
			<p className="results">{this.props.deathNum}</p>

		);
	}

}




let mapStateToProps = (state, props) => {
    return {
	deathNum: state.response.deathNum
        
    }
};

export default connect(mapStateToProps)(DeathNum);