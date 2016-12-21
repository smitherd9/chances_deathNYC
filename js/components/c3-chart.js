import React from 'react';
import actions from '../actions/index';
import store from '../store';
import { connect } from 'react-redux';
import  C3Chart  from 'c3-react';


export default class Chart extends React.Component {
	constructor(props){
		super(props);
		this.generateChart = this.generateChart.bind(this);


	}

	generateChart() {
		const data = {
      		columns: [
        		['data1', 30, 200, 100, 400, 150, 250],
        		['data2', 50, 20, 10, 40, 15, 25]
      		]
    	}
	}

	componentWillUpdate(){

	}






	render() {

		return(	
			
			<div id="chart"><C3Chart data={this.data} type={line} /></div>
			

		);
	}

}




let mapStateToProps = (state, props) => {
    return {
	data: state.response.leadingCause
        
    }
};

export default connect(mapStateToProps)(Chart);