import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';


class AgeAdjusted extends React.Component {
	constructor(props){
		super(props);

	}


	render() {

		return(
			<p>{this.props.ageAdjusted}</p>

		);
	}

}




let mapStateToProps = (state, props) => {
    return {
	ageAdjusted: state.ageAdjusted
        
    }
};

export default connect(mapStateToProps)(AgeAdjusted);