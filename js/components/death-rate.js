import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';


class DeathRate extends React.Component {
	constructor(props){
		super(props);

	}


	render() {

		return(
			<p>{this.props.deathRate}</p>

		);
	}

}




let mapStateToProps = (state, props) => {
    return {
	deathRate: state.deathRate
        
    }
};

export default connect(mapStateToProps)(DeathRate);