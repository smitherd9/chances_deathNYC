import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';


class EthnicityDisplay extends React.Component {
	constructor(props){
		super(props);

	}


	render() {

		return(
			<p className="results">{this.props.ethnicity}</p>

		);
	}

}



let mapStateToProps = (state, props) => {
    return {
	ethnicity: state.response.race_ethnicity
        
    }
};

export default connect(mapStateToProps)(EthnicityDisplay);