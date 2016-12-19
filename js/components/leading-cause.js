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
			<p className="results">{this.props.leadingCause}</p>

		);
	}

}



let mapStateToProps = (state, props) => {
    return {
	leadingCause: state.response.leadingCause
        
    }
};

export default connect(mapStateToProps)(LeadingCause);