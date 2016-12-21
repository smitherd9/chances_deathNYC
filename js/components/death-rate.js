import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';


class DeathRate extends React.Component {
	constructor(props){
		super(props);
		console.log(this.props);

	}

	componentWillUpdate(){
		console.log('this.props will update: ' + this.props.deathRate);
		console.log('this.state will update: ' + this.state);
	}

	componentDidUpdate(){
		console.log('this.props: ' + this.props.deathRate);
		console.log('this.state did update: ' + this.state);
	}

	componentWillReceiveProps(nextProps) {
		console.log('this.props will receive: ' + this.props.deathRate);
	}




	render() {

		return(
			<p className="results">{this.props.deathRate}</p>

		);
	}

}




let mapStateToProps = (state, props) => {
    return {
	deathRate: state.response.deathRate
        
    }
};

export default connect(mapStateToProps)(DeathRate);