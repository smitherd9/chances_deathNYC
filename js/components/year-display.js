import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';


class YearDisplay extends React.Component {
	constructor(props){
		super(props);

	}


	render() {

		return(
			<p className="results">{this.props.year}</p>

		);
	}

}



let mapStateToProps = (state, props) => {
    return {
	year: state.response.year
        
    }
};

export default connect(mapStateToProps)(YearDisplay);