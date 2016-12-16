import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';


class LeadingCause extends React.Component {
	constructor(props){
		super(props);

	}


	render() {

		return(
			<p>{this.props.leadingCause}</p>

		);
	}

}



let mapStateToProps = (state, props) => {
    return {
	leadingCause: state.leadingCause
        
    }
};

export default connect(mapStateToProps)(LeadingCause);